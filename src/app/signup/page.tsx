"use client";

import AvatarUploader from "@/components/AvatarUploader";
import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Control from "@/components/Control";
import Header from "@/components/Header";
import Input from "@/components/Input";
import MediumSelectButton from "@/components/SelectButton/MediumSelectButton";
import customToast from "@/utils/customToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, MouseEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import CalendarIcon from "@/icons/calendar.svg";
import { YearCalendar } from "@mui/x-date-pickers";
import CustomDrawer from "@/components/CustomDrawer";
import dayjs from "dayjs";

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
          {currentIndex === 0 && <EmailForm />}
          {currentIndex === 1 && <PasswordForm />}
          {currentIndex === 2 && <ProfileForm />}
        </FunnelStateContext.Provider>
      </main>
    </>
  );
};

export default SignUpPage;

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
  "profile-image": z.string(),
  nickname: z.string().email("올바른 이메일을 입력해주세요."),
  gender: z.string().min(8, "8자 이상 입력해주세요."),
  "birth-year": z.string(),
});

const EmailForm = () => {
  const { funnelState, inputFunnelState } = useContext(FunnelStateContext);
  const isEmailVerified = false;

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

  const { isValid, isValidating } = formState;

  const onClickNextButton = () => {
    if (!isEmailVerified) {
      customToast("올바른 인증번호를 입력해주세요.");
      return;
    }

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
              <Input.Content id="email" placeholder="liket@email.com" />
              <Input.Button
                disabled={
                  !!getFieldState("email").error ||
                  !getFieldState("email").isDirty ||
                  !getFieldState("email").isTouched ||
                  isValidating
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
        </form>
        <BottomButtonTabWrapper>
          <Button
            fullWidth
            disabled={!isValid}
            height={48}
            onClick={onClickNextButton}
          >
            다음
          </Button>
        </BottomButtonTabWrapper>
      </FormProvider>
    </>
  );
};

const PasswordForm = () => {
  const { funnelState, inputFunnelState } = useContext(FunnelStateContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      password: "",
      "confirm-password": "",
    },
    resolver: zodResolver(passwordScheme),
  });

  const { handleSubmit, formState, trigger, watch } = methods;

  const onSubmit = () => {};

  const { isValid, dirtyFields } = formState;

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
                onChange={(value) => {
                  if (
                    value !== watch("password") &&
                    dirtyFields["confirm-password"]
                  ) {
                    trigger("confirm-password");
                  }
                }}
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
        </form>
        <BottomButtonTabWrapper>
          <Button
            fullWidth
            disabled={!isValid}
            height={48}
            onClick={onClickNextButton}
          >
            다음
          </Button>
        </BottomButtonTabWrapper>
      </FormProvider>
    </>
  );
};

const ProfileForm = () => {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState("");
  const [isYearSelectionDrawerOpen, setIsYearSelectionDrawerOpen] =
    useState(false);
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

  const handleClickGender = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;

    if (target.tagName === "BUTTON") {
      const targetGender = target.textContent as "남성" | "여성";
      setSelectedGender(targetGender === selectedGender ? "" : targetGender);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="flex flex-col grow pt-[16px] px-[24px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grow">
            <div className="center mb-[34px]">
              <AvatarUploader onUploadImage={() => {}} />
            </div>
            <Input margin="0 0 34px 0">
              <Input.Label htmlFor="email">
                닉네임 <span className="text-top">*</span>
              </Input.Label>
              <Input.Content
                id="email"
                placeholder="영문, 숫자 포함 2~15자 (중복 불가)"
              />
            </Input>
            <Input margin="0 0 34px 0">
              <Input.Label htmlFor="gender">성별</Input.Label>
              <ul
                id="gender"
                onClick={handleClickGender}
                className="flex mt-[12px] gap-[8px]"
              >
                {["남자", "여자"].map((gender) => {
                  return (
                    <li key={gender}>
                      <Chip isSelected={selectedGender === gender}>
                        {gender}
                      </Chip>
                    </li>
                  );
                })}
              </ul>
            </Input>
            <Input>
              <Input.Label
                style={{
                  margin: "0 0 12px 0",
                }}
                htmlFor="birth-year"
              >
                연령
              </Input.Label>
              <MediumSelectButton
                text=""
                placeholder="출생년도"
                onClick={() => setIsYearSelectionDrawerOpen(true)}
                Icon={<CalendarIcon />}
              />
            </Input>
          </div>
        </form>
        <BottomButtonTabWrapper>
          <Button
            fullWidth
            disabled={!isValid}
            height={48}
            onClick={onClickNextButton}
          >
            라이켓 시작하기
          </Button>
        </BottomButtonTabWrapper>
      </FormProvider>
      <CustomDrawer open={isYearSelectionDrawerOpen}>
        <YearCalendar
          minDate={dayjs(`${new Date().getFullYear() - 100}`)}
          maxDate={dayjs(`${new Date().getFullYear() - 1}`)}
        />
        <div className="flex h-[98px] px-[24px]">
          <Button
            height={48}
            fullWidth
            onClick={() => setIsYearSelectionDrawerOpen(false)}
          >
            확인
          </Button>
        </div>
      </CustomDrawer>
    </>
  );
};
