"use client";

import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  password: z.string().min(8, "8자 이상 입력해주세요."),
});

const SignUpPage = () => {
  const router = useRouter();

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const [currentStep, setCurrentStep] = useState("이메일 입력");

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
        <FormProvider {...methods}>
          <form className="col-expanded">
            {currentStep === "이메일 입력" && (
              <>
                <div className="col-expanded px-[24px]">
                  <Input margin="16px 0 34px 0">
                    <Input.Label htmlFor="email">이메일</Input.Label>
                    <Input.Content id="email" />
                    <Input.Button disabled={true} onClick={() => {}}>
                      인증받기
                    </Input.Button>
                  </Input>
                  <Input>
                    <Input.Label htmlFor="verification-code">
                      인증번호
                    </Input.Label>
                    <Input.Content id="verification-code" />
                    <Input.Text isShown={false}>03분 00초</Input.Text>
                  </Input>
                </div>
                <BottomButtonTabWrapper>
                  <Button fullWidth height={48} onClick={() => {}}>
                    다음
                  </Button>
                </BottomButtonTabWrapper>
              </>
            )}
          </form>
        </FormProvider>
      </main>
    </>
  );
};

export default SignUpPage;
