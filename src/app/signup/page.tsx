"use client";

import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import Control from "@/components/Control";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const INITIAL_FUNNEL_STATE = {
  email: "",
  password: "",
  profileImage: "",
  nickname: "",
  gender: "",
  birthday: "",
} as const;

const FunnelStateContext = createContext({
  currentIndex: 0,
  funnelState: INITIAL_FUNNEL_STATE,
  inputFunnelState: (newState: typeof INITIAL_FUNNEL_STATE) => {
    newState;
  },
});

const emailVerificationScheme = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  "verification-code": z.string().length(6, "6자를 입력해주세요"),
});

const passwordScheme = z
  .object({
    password: z
      .string()
      .min(8, "최소 8자리 이상 입력해야 합니다.")
      .regex(/[a-zA-Z]/, "영문, 숫자, 특수문자 모두 포함해야 합니다.")
      .regex(/[0-9]/, "영문, 숫자, 특수문자 모두 포함해야 합니다.")
      .regex(/[^a-zA-Z0-9]/, "영문, 숫자, 특수문자 모두 포함해야 합니다."),
    "confirm-password": z.string(),
  })
  .refine((data) => data.password === data["confirm-password"], {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirm-password"],
  });

const profileScheme = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  password: z.string().min(8, "8자 이상 입력해주세요."),
});

const schema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  password: z.string().min(8, "8자 이상 입력해주세요."),
});

const SignUpPage = () => {
  const router = useRouter();
  const [funnelState, setFunnelState] = useState(INITIAL_FUNNEL_STATE);
  const [currentIndex, setCurrentIndex] = useState(0);
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
        <Header.MiddleText text="회원가입" />
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
        <FunnelStateContext.Provider
          value={{ currentIndex, funnelState, inputFunnelState }}
        >
          {currentIndex === 2 && <EmailInput />}
          {currentIndex === 1 && <PasswordInput />}
          {currentIndex === 0 && <ProfileInput />}
        </FunnelStateContext.Provider>
      </main>
    </>
  );
};

export default SignUpPage;

const EmailInput = () => {
  const { funnelState, inputFunnelState } = useContext(FunnelStateContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      "verification-code": "",
    },
    resolver: zodResolver(emailVerificationScheme),
  });

  const { handleSubmit, formState, getFieldState } = methods;

  const onSubmit = () => {};

  const { isValid } = formState;

  const onClickNextButton = () => {
    inputFunnelState({ ...funnelState });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="flex flex-col grow pt-[16px] px-[24px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grow">
            <Input margin="0 0 34px 0">
              <Input.Label htmlFor="email">이메일</Input.Label>
              <Input.Content
                id="email"
                placeholder="영문, 숫자 포함 4 ~ 12자"
              />
              <Input.Button
                disabled={
                  !!getFieldState("email").error ||
                  !getFieldState("email").isDirty ||
                  !getFieldState("email").isTouched
                }
                onClick={() => {}}
              >
                인증받기
              </Input.Button>
            </Input>
            <Input margin="0 0 47px 0">
              <Input.Label htmlFor="verification-code">인증번호</Input.Label>
              <Input.Content
                maxLength={6}
                id="verification-code"
                placeholder="인증번호 6자리"
                type="password"
              />
            </Input>
          </div>
          <BottomButtonTabWrapper>
            <Button
              fullWidth
              disabled={!isValid}
              height={48}
              onClick={onClickNextButton}
            >
              저장
            </Button>
          </BottomButtonTabWrapper>
        </form>
      </FormProvider>
    </>
  );
};

const PasswordInput = () => {
  const { funnelState, inputFunnelState } = useContext(FunnelStateContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      password: "",
      "confirm-password": "",
    },
    resolver: zodResolver(passwordScheme),
  });

  const { handleSubmit, formState, trigger } = methods;

  const onSubmit = () => {};

  const { isValid } = formState;

  const onClickNextButton = () => {
    inputFunnelState({ ...funnelState });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="flex flex-col grow pt-[16px] px-[24px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grow">
            <Input margin="0 0 34px 0">
              <Input.Label htmlFor="password">비밀번호</Input.Label>
              <Input.Content
                id="password"
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8~15자"
                maxLength={15}
              />
            </Input>
            <Input margin="0 0 47px 0">
              <Input.Label htmlFor="confirm-password">
                비밀번호 확인
              </Input.Label>
              <Input.Content
                id="confirm-password"
                type="password"
                placeholder="비밀번호 입력"
                maxLength={15}
              />
            </Input>
          </div>
          <BottomButtonTabWrapper>
            <Button
              fullWidth
              disabled={!isValid}
              height={48}
              onClick={onClickNextButton}
            >
              저장
            </Button>
          </BottomButtonTabWrapper>
        </form>
      </FormProvider>
    </>
  );
};

const ProfileInput = () => {
  const router = useRouter();
  const { funnelState, inputFunnelState } = useContext(FunnelStateContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      profileImage: "",
      nickname: "",
      gender: "",
      birthday: "",
    },
    resolver: zodResolver(profileScheme),
  });

  const { handleSubmit, formState } = methods;

  const onSubmit = () => {};

  const { isValid } = formState;

  const onClickNextButton = () => {
    router.push("/");
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="flex flex-col grow pt-[16px] px-[24px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grow">
            <Input margin="0 0 34px 0">
              <Input.Label htmlFor="email">이메일</Input.Label>
              <Input.Content id="email" placeholder="이메일 입력" />
            </Input>
            <Input margin="0 0 47px 0">
              <Input.Label htmlFor="password">비밀번호</Input.Label>
              <Input.Content
                id="password"
                type="password"
                placeholder="비밀번호 입력"
              />
            </Input>
          </div>
          <BottomButtonTabWrapper>
            <Button
              fullWidth
              disabled={!isValid}
              height={48}
              onClick={onClickNextButton}
            >
              저장
            </Button>
          </BottomButtonTabWrapper>
        </form>
      </FormProvider>
    </>
  );
};
