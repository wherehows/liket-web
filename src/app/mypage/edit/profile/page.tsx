"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProfileForm from "@/components/SignupForm/ProfileForm";
import profileStore from "@/stores/profileStore";

export default function Page() {
  const router = useRouter();
  const [isYearSelectionDrawerOpen, setIsYearSelectionDrawerOpen] =
    useState(false);
  const { nickname, profileImgPath } = profileStore({
    nickname,
    gender,
    birth,
    profileImgPath,
  });

  return (
    <>
      <Header>
        <Header.LeftOption option={{ back: true }} />
        <Header.MiddleText text="프로필" />
      </Header>
      <main>
        <ProfileForm
          currentFormInformation={{
            nickname,
            gender,
            birth,
            file: profileImgPath,
          }}
          nextButtonText="저장하기"
          onClickNextButton={() => {}}
        />
      </main>
    </>
  );
}
