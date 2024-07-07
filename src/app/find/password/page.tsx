"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import EmailForm from "@/components/SignupForm/EmailForm";
import { useState } from "react";

export default function Page() {
  const [formIndex, setFormIndex] = useState(0);

  const router = useRouter();
  const updateForm = () => setFormIndex(formIndex + 1);

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
        <Header.MiddleText text="비밀번호 재설정" />
      </Header>
      {formIndex === 0 && <EmailForm updateForm={updateForm} />}
    </>
  );
}
