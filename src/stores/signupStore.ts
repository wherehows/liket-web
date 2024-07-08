import { create } from "zustand";

const INITIAL_FUNNEL_STATE = {
  emailToken: "",
  email: "",
  password: "",
  nickname: "",
  gender: "",
  birth: "",
  file: "",
};

interface State {
  formState: typeof INITIAL_FUNNEL_STATE;
  formIndex: number;
}

interface Actions {
  updateForm: (newState: Partial<typeof INITIAL_FUNNEL_STATE>) => void;
}

const useSignupStore = create<State & Actions>((set) => ({
  formIndex: 0,
  formState: INITIAL_FUNNEL_STATE,
  updateForm: (newState) =>
    set((state) => ({
      ...state,
      formIndex: state.formIndex + 1,
      formState: { ...state.formState, ...newState },
    })),
}));

export default useSignupStore;
