import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BottomButtonTabWrapper from "../BottomButtonTabWrapper";
import { Input, InputWrapper, Label } from "../newInput";
import Button from "../Button";

const passwordScheme = z
  .object({
    pw: z
      .string()
      .min(8, "최소 8자리 이상 입력해야 합니다.")
      .regex(/[a-zA-Z]/, "영문, 숫자, 특수문자 모두 포함해야 합니다.")
      .regex(/[0-9]/, "영문, 숫자, 특수문자 모두 포함해야 합니다.")
      .regex(/[^a-zA-Z0-9]/, "영문, 숫자, 특수문자 모두 포함해야 합니다."),
    "confirm-pw": z.string(),
  })
  .refine((data) => data.pw === data["confirm-pw"], {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirm-pw"],
  });

interface PasswordFormProps {
  updateForm: (insertedFormData: object) => void;
}

const PasswordForm = ({ updateForm }: PasswordFormProps) => {
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      pw: "",
      "confirm-pw": "",
    },
    resolver: zodResolver(passwordScheme),
  });

  const { formState, trigger, watch, register, getValues } = methods;
  const { isValid, dirtyFields } = formState;

  const onClickNextButton = () => {
    updateForm({ pw: getValues("pw") });
  };

  return (
    <>
      <form className="flex flex-col grow pt-[16px] px-[24px]">
        <div className="grow">
          <InputWrapper margin="0 0 34px 0">
            <Label htmlFor="pw">비밀번호</Label>
            <Input
              field="pw"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8~15자"
              maxLength={15}
              formState={formState}
              register={register}
              onChange={(e) => {
                if (
                  e.target.value !== watch("pw") &&
                  dirtyFields["confirm-pw"]
                ) {
                  trigger("confirm-pw");
                }
              }}
            />
          </InputWrapper>
          <InputWrapper margin="0 0 47px 0">
            <Label htmlFor="confirm-pw">비밀번호 확인</Label>
            <Input
              field="confirm-pw"
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
