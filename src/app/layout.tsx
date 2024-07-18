import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ModalProvider from "@/components/Modal/ModalProvider";
import { Toaster } from "react-hot-toast";
import MuiLocalizationProvider from "@/components/MuiLocalizationProvider";
import QueryProvider from "@/components/QueryProvider";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

export const appleGothic = localFont({
  src: [
    {
      path: "../../public/fonts/100_AppleSDGothicNeo-Thin.woff2",
      weight: "100",
    },
    {
      path: "../../public/fonts/200_AppleSDGothicNeo-UltraLight.woff2",
      weight: "200",
    },
    {
      path: "../../public/fonts/300_AppleSDGothicNeo-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/400_AppleSDGothicNeo-Medium.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/500_AppleSDGothicNeo-Regular.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/600_AppleSDGothicNeo-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/700_AppleSDGothicNeo-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/800_AppleSDGothicNeo-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../../public/fonts/900_AppleSDGothicNeo-Heavy.woff2",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <ModalProvider>
        <body className={appleGothic.className}>
          <QueryProvider>
            <MuiLocalizationProvider>
              <Toaster
                position="bottom-center"
                containerStyle={{
                  inset: "16px 16px 114px 16px",
                }}
              />
              {children}
            </MuiLocalizationProvider>
          </QueryProvider>
        </body>
      </ModalProvider>
    </html>
  );
}
