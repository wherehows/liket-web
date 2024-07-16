import { MyPageInformation } from "@/service/hooks";
import { create } from "zustand";

export type ProfileStoreState = Pick<
  MyPageInformation,
  "gender" | "nickname" | "birth" | "email" | "profileImgPath"
>;

interface Action {
  setProfile: (profile: ProfileStoreState) => void;
}

const authStore = create<ProfileStoreState & Action>((set) => ({
  gender: 0,
  nickname: "",
  birth: 0,
  email: "",
  profileImgPath: "",
  setProfile: (profile) => set(() => profile),
}));

export default authStore;
