import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BottomButtonTabWrapper from "../BottomButtonTabWrapper";
import { Input, InputWrapper, Label } from "../newInput";
import Button from "../Button";

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

export default PasswordForm;
