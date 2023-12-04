import { PartialPick } from "@/types/common";
import { create } from "zustand";

interface StoreState {
  modalFileName: string;
  onClickPositive: (() => void) | null;
  onClickNegative: (() => void) | null;
}

const useModalStore = create<
  {
    setModal: (
      state: PartialPick<StoreState, "onClickPositive" | "onClickNegative">
    ) => void;
  } & StoreState
>((set) => ({
  modalFileName: "",
  onClickPositive: null,
  onClickNegative: null,
  setModal: (state) => set(state),
}));

export default useModalStore;
