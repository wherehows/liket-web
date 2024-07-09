import {
  useSendAuthentication,
  useCheckAuthentication,
} from "@/service/signup/hooks";
import customToast from "@/utils/customToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTimer } from "react-timer-hook";
import BottomButtonTabWrapper from "../BottomButtonTabWrapper";
import {
  Input,
  InputButton,
  InputText,
  InputWrapper,
  Label,
} from "../newInput";
import Button from "../Button";
import { z } from "zod";

const emailVerificationScheme = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  token: z.string().length(6, "6자를 입력해주세요"),
});

interface EmailFormProps {
  updateForm: (insertedFormData: { email: string; emailToken: string }) => void;
}

const EmailForm = ({ updateForm }: EmailFormProps) => {
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
      updateForm({
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

export default EmailForm;
