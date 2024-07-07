"use client";

import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { Input, InputWrapper, Label } from "@/components/newInput";
import { useLogin } from "@/service/login/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

const schema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  password: z.string().min(8, "8자 이상 입력해주세요."),
});

export default function Page() {
  const { mutate } = useLogin({
    onSuccess: () => {},
  });

  const router = useRouter();

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const { formState, handleSubmit, register, getValues } = methods;

  const onSubmit = () => {
    const { email, password } = getValues();

    mutate({
      email,
      pw: password,
    });
  };

  return (
    <>
      <Header>
        <Header.LeftOption
          option={{
            close: {
              onClick: () => router.back(),
            },
          }}
        />
        <Header.MiddleText text="로그인" />
      </Header>
      <form
        className="flex flex-col grow pt-[16px] px-[24px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grow">
          <InputWrapper margin="0 0 34px 0">
            <Label htmlFor="email">이메일</Label>
            <Input
              field="email"
              placeholder="이메일 입력"
              formState={formState}
              register={register}
            />
          </InputWrapper>
          <InputWrapper margin="0 0 47px 0">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              field="password"
              type="password"
              placeholder="비밀번호 입력"
              register={register}
              formState={formState}
            />
          </InputWrapper>
          <div className="flex flex-row-reverse">
            <Link className="text-button5 text-grey-02" href="/find/password">
              비밀번호 재설정
            </Link>
          </div>
        </div>
        <BottomButtonTabWrapper>
          <Button
            fullWidth
            disabled={!formState.isValid}
            height={48}
            onClick={() => {
              // 전혀 입력이 안된 경우
            }}
          >
            로그인
          </Button>
        </BottomButtonTabWrapper>
      </form>
    </>
  );
}
