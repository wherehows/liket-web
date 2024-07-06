"use client";

import Control from "@/components/Control";
import Header from "@/components/Header";
import EmailForm from "@/components/SignupForm/EmailForm";
import PasswordForm from "@/components/SignupForm/PasswordForm";
import ProfileForm from "@/components/SignupForm/ProfileForm";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const INITIAL_FUNNEL_STATE = {
  emailToken: "",
  email: "",
  password: "",
  nickname: "",
  gender: "",
  birth: "",
  file: "",
};

const FunnelStateContext = createContext({
  funnelState: INITIAL_FUNNEL_STATE,
  inputFunnelState: (newState: typeof INITIAL_FUNNEL_STATE) => {
    newState;
  },
});

const SignUpPage = () => {
  const router = useRouter();
  const [funnelState, setFunnelState] = useState(INITIAL_FUNNEL_STATE);
  const [currentIndex, setCurrentIndex] = useState(2);
  const inputFunnelState = (newState: typeof INITIAL_FUNNEL_STATE) => {
    setCurrentIndex(currentIndex + 1);
    setFunnelState(newState);
  };

  return (
    <>
      <Header>
        <Header.LeftOption
          option={{
            back: {
              onClick: () => router.back(),
            },
          }}
        />
        <Header.MiddleText text={currentIndex === 2 ? "프로필" : "회원가입"} />
      </Header>
      <main>
        <div className="my-[16px] gap-[8px] center">
          {[0, 1, 2].map((index) => {
            return (
              <Control
                key={index}
                onClick={() => {}}
                isSelected={index === currentIndex}
              />
            );
          })}
        </div>
        <FunnelStateContext.Provider value={{ funnelState, inputFunnelState }}>
          {currentIndex === 0 && <EmailForm />}
          {currentIndex === 1 && <PasswordForm />}
          {currentIndex === 2 && <ProfileForm />}
        </FunnelStateContext.Provider>
      </main>
    </>
  );
};

export default SignUpPage;
