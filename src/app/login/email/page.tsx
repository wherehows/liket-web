"use client";

import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  password: z.string().min(8, "8자 이상 입력해주세요."),
});

export default function Page() {
  const router = useRouter();

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = () => {};

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
                type="passwor"
                placeholder="비밀번호 입력"
              />
            </Input>
            <div className="flex flex-row-reverse">
              <button className="text-button5 text-grey-02">
                비밀번호 재설정
              </button>
            </div>
          </div>
          <BottomButtonTabWrapper>
            <Button
              fullWidth
              disabled={!isValid}
              height={48}
              onClick={() => {
                // 전혀 입력이 안된 경우
              }}
            >
              저장
            </Button>
          </BottomButtonTabWrapper>
        </form>
      </FormProvider>
    </>
  );
}
