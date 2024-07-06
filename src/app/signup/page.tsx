"use client";

import Control from "@/components/Control";
import Header from "@/components/Header";
import EmailForm from "@/components/SignupForm/EmailForm";
import PasswordForm from "@/components/SignupForm/PasswordForm";
import ProfileForm from "@/components/SignupForm/ProfileForm";
import useSignupStore from "@/stores/signupStore";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const formIndex = useSignupStore((state) => state.formIndex);

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
        <Header.MiddleText text={formIndex === 2 ? "프로필" : "회원가입"} />
      </Header>
      <main>
        <div className="my-[16px] gap-[8px] center">
          {[0, 1, 2].map((index) => {
            return (
              <Control
                key={index}
                onClick={() => {}}
                isSelected={index === formIndex}
              />
            );
          })}
        </div>
        {formIndex === 0 && <EmailForm />}
        {formIndex === 1 && <PasswordForm />}
        {formIndex === 2 && <ProfileForm />}
      </main>
    </>
  );
};

export default SignUpPage;
