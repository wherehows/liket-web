import { ProfileStoreState } from "@/stores/profileStore";
import axiosInstance from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export interface MyPageInformation {
  reviewCount: number;
  reviewList: ReviewListItem[];
  liketCount: number;
  liketList: LiketListItem[];
  idx: number;
  profileImgPath: string;
  nickname: string;
  provider: string;
  gender: number;
  email: string;
  birth: number;
  createdAt: string;
}

export interface ReviewListItem {
  idx: number;
  thumbnail: string;
}

export interface LiketListItem {
  idx: number;
  imgPath: string;
}

export const useMyPage = ({
  onSuccess,
}: {
  onSuccess: (profile: ProfileStoreState) => void;
}) =>
  useQuery<AxiosResponse<MyPageInformation>, AxiosError, MyPageInformation>({
    queryKey: ["mypage"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/apis/user/my");
      const { gender, nickname, birth, email, profileImgPath } = data;
      onSuccess({ gender, nickname, birth, email, profileImgPath });
      return data;
    },
  });
