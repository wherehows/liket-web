"use client";

import authStore from "@/stores/authStore";
import axios, { setAuthToken } from "@/utils/axios";
import {
  isServer,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
interface QueryClientParam {
  onRefreshTokenExpired: () => void;
}

function makeQueryClient({ onRefreshTokenExpired }: QueryClientParam) {
  const setToken = authStore(({ setToken }) => setToken);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: (failureCount, error) => {
          if (error) {
            let { response } = error as AxiosError;

            if (response?.status === 401) {
              return false;
            }
          }

          return failureCount <= 1;
        },
      },
    },
    queryCache: new QueryCache({
      onError: async (error) => {
        if (error) {
          const { response, config } = error as AxiosError;

          if (response?.status === 401 && config) {
            try {
              const { data } = await axios.post("/apis/auth/access-token");
              setAuthToken(data);
              setToken(data);

              // TODO: 요청이 실패한 쿼리키에 한해서만 invalidate 하기
              queryClient.invalidateQueries();
            } catch {
              onRefreshTokenExpired();
              return;
            }
          }
        }
      },
    }),
  });

  return queryClient;
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient({ onRefreshTokenExpired }: QueryClientParam) {
  if (isServer) {
    return makeQueryClient({ onRefreshTokenExpired });
  } else {
    if (!browserQueryClient)
      browserQueryClient = makeQueryClient({ onRefreshTokenExpired });
    return browserQueryClient;
  }
}

export default function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  const queryClient = getQueryClient({
    onRefreshTokenExpired: () => router.replace("/login?isTokenExpired=true"),
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
