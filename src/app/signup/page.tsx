"use client";

import AvatarUploader from "@/components/AvatarUploader";
import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Control from "@/components/Control";
import Header from "@/components/Header";
import MediumSelectButton from "@/components/SelectButton/MediumSelectButton";
import customToast from "@/utils/customToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, MouseEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CalendarIcon from "@/icons/calendar.svg";
import { YearCalendar } from "@mui/x-date-pickers";
import CustomDrawer from "@/components/CustomDrawer";
import dayjs, { Dayjs } from "dayjs";
import { useTimer } from "react-timer-hook";
import {
  useCheckAuthentication,
  useSendAuthentication,
  useSignup,
} from "@/service/signup/hooks";
import {
  Input,
  InputButton,
  InputText,
  InputWrapper,
  Label,
} from "@/components/newInput";

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

const emailVerificationScheme = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  token: z.string().length(6, "6자를 입력해주세요"),
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

const profileScheme = z
  .object({
    nickname: z
      .string()
      .min(2, { message: "2~15자 이내로 입력해주세요." })
      .max(15, { message: "2~15자 이내로 입력해주세요." })
      .regex(/^[a-zA-Z0-9]+$/, {
        message: "닉네임은 영문, 숫자만 입력할 수 있습니다.",
      }),
    gender: z.string().min(1),
    file: z.string().min(1),
    birth: z.string().min(1),
  })
  .required();

const EmailForm = () => {
  const { funnelState, inputFunnelState } = useContext(FunnelStateContext);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 180);
  const { minutes, seconds, isRunning, start } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
  });
  const [userEmail, setUserEmail] = useState("");

  const {
    mutate: sendAuthenticationNumber,
    isSuccess: isSendSuccess,
    isPending,
  } = useSendAuthentication({
    onSuccess: () => start(),
  });

  const { mutate: checkAuthenticationNumber } = useCheckAuthentication({
    onSuccess: ({ data }) => {
      inputFunnelState({
        ...funnelState,
        email: userEmail,
        emailToken: data.token,
      });
    },
    onError: () => customToast("올바른 인증번호를 입력해주세요."),
  });

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      token: "",
    },
    resolver: zodResolver(emailVerificationScheme),
  });

  const { formState, getFieldState, register, getValues } = methods;
  const { isValid, isValidating } = formState;

  const onClickNextButton = () => {
    checkAuthenticationNumber({
      email: userEmail,
      type: 0,
      code: getValues("token"),
    });
  };

  const onClickSendAuthenticationNumber = () => {
    if (isSendSuccess || isPending) {
      return;
    }

    setUserEmail(getValues("email"));
    sendAuthenticationNumber({
      email: getValues("email"),
      type: 0,
    });
  };

  const isEmailFormatInvalid =
    !!getFieldState("email").error ||
    !getFieldState("email").isDirty ||
    !getFieldState("email").isTouched ||
    isValidating;

  return (
    <>
      <form className="flex flex-col grow pt-[16px] px-[24px]">
        <div className="grow">
          <InputWrapper margin="0 0 34px 0">
            <Label htmlFor="email">이메일</Label>
            <Input
              field="email"
              placeholder="liket@email.com"
              formState={formState}
              register={register}
            />
            <InputButton
              disabled={
                (!isSendSuccess && isEmailFormatInvalid) ||
                (isSendSuccess && isRunning)
              }
              onClick={onClickSendAuthenticationNumber}
            >
              {isSendSuccess ? "재발송" : "인증받기"}
            </InputButton>
          </InputWrapper>
          <InputWrapper margin="0 0 47px 0">
            <Label htmlFor="token">인증번호</Label>
            <Input
              field="token"
              maxLength={6}
              placeholder="인증번호 6자리"
              type="password"
              formState={formState}
              register={register}
            />
            <InputText isShown={isSendSuccess}>{`${String(minutes).padStart(
              2,
              "0"
            )}분 ${String(seconds).padStart(2, "0")}초`}</InputText>
          </InputWrapper>
        </div>
      </form>
      <BottomButtonTabWrapper shadow>
        <Button
          fullWidth
          disabled={!isValid}
          height={48}
          onClick={onClickNextButton}
        >
          다음
        </Button>
      </BottomButtonTabWrapper>
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

  const { formState, trigger, watch, register, getValues } = methods;
  const { isValid, dirtyFields } = formState;

  const onClickNextButton = () => {
    inputFunnelState({ ...funnelState, password: getValues("password") });
  };

  return (
    <>
      <form className="flex flex-col grow pt-[16px] px-[24px]">
        <div className="grow">
          <InputWrapper margin="0 0 34px 0">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              field="password"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8~15자"
              maxLength={15}
              formState={formState}
              register={register}
              onChange={(e) => {
                if (
                  e.target.value !== watch("password") &&
                  dirtyFields["confirm-password"]
                ) {
                  trigger("confirm-password");
                }
              }}
            />
          </InputWrapper>
          <InputWrapper margin="0 0 47px 0">
            <Label htmlFor="confirm-password">비밀번호 확인</Label>
            <Input
              field="confirm-password"
              type="password"
              placeholder="비밀번호 입력"
              maxLength={15}
              formState={formState}
              register={register}
            />
          </InputWrapper>
        </div>
      </form>
      <BottomButtonTabWrapper shadow>
        <Button
          fullWidth
          disabled={!isValid}
          height={48}
          onClick={onClickNextButton}
        >
          다음
        </Button>
      </BottomButtonTabWrapper>
    </>
  );
};

const ProfileForm = () => {
  const router = useRouter();
  const { funnelState, inputFunnelState } = useContext(FunnelStateContext);

  const { mutate } = useSignup({
    onSuccess: (res) => {
      console.log(res);
    },
  });
  const [selectedGender, setSelectedGender] = useState("");
  const [isYearSelectionDrawerOpen, setIsYearSelectionDrawerOpen] =
    useState(false);
  const [tempYear, setTempYear] = useState<Dayjs>(dayjs(new Date()));

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      file: "",
      nickname: "",
      gender: "",
      birth: "",
    },
    resolver: zodResolver(profileScheme),
  });

  const { formState, handleSubmit, register, setValue, getValues, trigger } =
    methods;

  const onSubmit = () => {};

  const onClickNextButton = () => {
    const { file, birth, gender, nickname } = getValues();

    mutate({
      ...funnelState,
      file,
      nickname,
      birth: +birth,
      gender: gender === "남성" ? 1 : 2,
    });
  };

  const handleClickGender = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;

    if (target.tagName === "BUTTON") {
      const targetGender = target.textContent as "남성" | "여성";
      const res = targetGender === selectedGender ? "" : targetGender;
      setSelectedGender(res);
      setValue("gender", res);
      trigger();
    }
  };

  return (
    <>
      <form
        className="flex flex-col grow pt-[16px] px-[24px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grow">
          <div className="center mb-[34px]">
            <AvatarUploader onUploadImage={(url) => setValue("file", url)} />
          </div>
          <InputWrapper margin="0 0 16px 0">
            <Label htmlFor="email" required>
              닉네임
            </Label>
            <Input
              field="nickname"
              placeholder="영문, 숫자 포함 2~15자 (중복 불가)"
              formState={formState}
              register={register}
            />
          </InputWrapper>
          <InputWrapper margin="0 0 34px 0">
            <Label htmlFor="gender">성별</Label>
            <ul
              id="gender"
              onClick={handleClickGender}
              className="flex mt-[12px] gap-[8px]"
            >
              {["남자", "여자"].map((gender) => {
                return (
                  <li key={gender}>
                    <Chip isSelected={selectedGender === gender}>{gender}</Chip>
                  </li>
                );
              })}
            </ul>
          </InputWrapper>
          <InputWrapper>
            <Label
              style={{
                margin: "0 0 12px 0",
              }}
              htmlFor="birth-year"
            >
              연령
            </Label>
            <MediumSelectButton
              text={getValues("birth")}
              placeholder="출생년도"
              onClick={() => setIsYearSelectionDrawerOpen(true)}
              Icon={<CalendarIcon />}
            />
          </InputWrapper>
        </div>
      </form>
      <BottomButtonTabWrapper shadow>
        <Button
          fullWidth
          disabled={!formState.isValid}
          height={48}
          onClick={onClickNextButton}
        >
          라이켓 시작하기
        </Button>
      </BottomButtonTabWrapper>
      <CustomDrawer
        open={isYearSelectionDrawerOpen}
        onClose={() => {
          setIsYearSelectionDrawerOpen(false);
        }}
      >
        <YearCalendar
          value={dayjs(tempYear)}
          minDate={dayjs(new Date().getFullYear() - 1)}
          maxDate={dayjs(new Date())}
          onChange={(date) => {
            setTempYear(date);
          }}
        />
        <div className="flex h-[98px] px-[24px]">
          <Button
            height={48}
            fullWidth
            onClick={() => {
              setValue("birth", dayjs(tempYear).year() + "");
              setIsYearSelectionDrawerOpen(false);
              trigger();
            }}
          >
            확인
          </Button>
        </div>
      </CustomDrawer>
    </>
  );
};
