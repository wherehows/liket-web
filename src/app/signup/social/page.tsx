"use client";

import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import Control from "@/components/Control";
import Header from "@/components/Header";
import EmailForm from "@/components/SignupForm/EmailForm";
import PasswordForm from "@/components/SignupForm/PasswordForm";
import ProfileForm from "@/components/SignupForm/ProfileForm";
import { useSocialSignup } from "@/service/signup/hooks";
import { ProfileFormData } from "@/types/signup";
import customToast from "@/utils/customToast";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const INITIAL_FORM_STATE = {
  emailToken: "",
  email: "",
  pw: "",
  nickname: "",
  gender: "",
  birth: "",
  file: "",
};

const SignUpPage = () => {
  const router = useRouter();
  const params = useSearchParams();

  // TODO: 잘못된 접근 처리 필요.
  const token = params.get("token") as string;
  const [formInformation, setFormInformation] = useState(INITIAL_FORM_STATE);
  const [formIndex, setFormIndex] = useState(0);
  const updateForm = (insertedFormData: Partial<typeof INITIAL_FORM_STATE>) => {
    setFormInformation({ ...formInformation, ...insertedFormData });
    setFormIndex(formIndex + 1);
  };

  const { mutate } = useSocialSignup({
    onSuccess: () => {
      router.push("/");
    },
    onError: ({ response }) => {
      if (response?.status === 400) {
        customToast("잘못된 폼 데이터가 전달됐습니다.");
        return;
      }

      if (response?.status === 401) {
        customToast("토큰 정보가 잘못됐습니다.");
        return;
      }

      if (response?.status === 409) {
        customToast("이메일 혹은 닉네임이 중복됩니다.");
        return;
      }
    },
  });

  const handleClickNextButtonInPasswordForm = (pw: string) =>
    updateForm({ pw });

  const onClickNextButtonInProfileForm = ({
    file,
    nickname,
    birth,
    gender,
  }: ProfileFormData) => {
    mutate({
      token,
      file,
      nickname,
      birth: birth,
      gender,
    });
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
        <Header.MiddleText text={"프로필"} />
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
        {formIndex === 0 && <EmailForm updateForm={updateForm} />}
        {formIndex === 1 && (
          <PasswordForm
            isResetForm={false}
            nextButtonText="다음"
            onClickNextButton={handleClickNextButtonInPasswordForm}
          />
        )}
        {formIndex === 2 && (
          <ProfileForm
            nextButtonText="라이켓 시작하기"
            onClickNextButton={onClickNextButtonInProfileForm}
          />
        )}
      </main>
      <BottomButtonTabWrapper shadow>
        <Button
          fullWidth
          // disabled={!isValid}
          height={48}
          // onClick={onClickNextButton}
        >
          라이켓 시작하기
        </Button>
      </BottomButtonTabWrapper>
    </>
  );
};

export default SignUpPage;
