import { ReviewListItem } from "@/types/review";
import customFetch from "@/utils/fetch";

export const getHotReviews = async (): Promise<ReviewListItem[]> =>
  (
    await customFetch(`/review/hot/all`, {
      next: {
        revalidate: false,
      },
    })
  ).json();
