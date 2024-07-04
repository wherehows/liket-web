import { BannerListItem } from "@/types/banner";
import { GenreType } from "@/types/const";
import { ContentListItem } from "@/types/content";
import customFetch from "@/utils/fetch";

export const getSoonOpenContents = async (): Promise<{
  contentList: ContentListItem[];
}> =>
  (
    await customFetch(`/culture-content/soon-open/all`, {
      next: {
        revalidate: false,
      },
    })
  ).json();

export const getSoonEndContents = async (): Promise<{
  contentList: ContentListItem[];
}> =>
  (
    await customFetch(`/culture-content/soon-end/all`, {
      next: {
        revalidate: false,
      },
    })
  ).json();

export const getHotPlaces = async (): Promise<
  {
    contentList: ContentListItem[];
    idx: number;
    name: GenreType;
  }[]
> =>
  (
    await customFetch(`/culture-content/hot/all`, {
      next: {
        revalidate: false,
      },
    })
  ).json();

export const getBannerImages = async (): Promise<{
  bannerList: BannerListItem[];
}> =>
  (
    await customFetch(`/banner/all`, {
      next: {
        revalidate: false,
      },
    })
  ).json();
