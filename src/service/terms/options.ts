import { skipToken } from "@tanstack/react-query";
import signupService from "./service";

const queryOptions = {
  queryKey: ["tosList"],
  tosList: () => ({
    queryKey: [...queryOptions.queryKey],
    queryFn: () => signupService.tosList(),
  }),
  detailTos: (tosIdx: number | undefined) => ({
    queryKey: [...queryOptions.queryKey, tosIdx],
    queryFn:
      typeof tosIdx === "number"
        ? () => signupService.detailTos(tosIdx)
        : skipToken,
  }),
};

export default queryOptions;
