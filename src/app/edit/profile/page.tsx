"use client";

import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MediumSelectButton from "@/components/SelectButton/MediumSelectButton";
import CalendarIcon from "@/icons/calendar.svg";
import AvatarUploader from "@/components/AvatarUploader";
import { YearCalendar } from "@mui/x-date-pickers";
import CustomDrawer from "@/components/CustomDrawer";
import dayjs from "dayjs";
import { Input, InputWrapper, Label } from "@/components/newInput";

const profileScheme = z.object({
  "profile-image": z.string(),
  nickname: z
    .string()
    .min(2, "최소 2자리 이상 입력해야 합니다.")
    .regex(/[a-zA-Z]/, "영문, 숫자 모두 포함해야 합니다.")
    .regex(/[0-9]/, "영문, 숫자 모두 포함해야 합니다."),
  gender: z.enum(["남자", "여자"]),
  "birth-year": z.string(),
});

export default function Page() {
  const router = useRouter();
  const [isYearSelectionDrawerOpen, setIsYearSelectionDrawerOpen] =
    useState(false);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      profileImage: "",
      nickname: "jjjuuu_a",
      gender: "남자",
      birthday: "1998",
    },
    resolver: zodResolver(profileScheme),
  });

  const { handleSubmit, formState, watch, register, setValue } = methods;

  const onSubmit = () => {};

  const { isValid } = formState;

  const onClickSave = () => {
    router.replace("/mypage");
  };

  const handleClickGender = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.tagName === "BUTTON") {
      const targetGender = target.textContent as "남자" | "여자";
      setValue("gender", targetGender);
    }
  };

  return (
    <>
      <Header>
        <Header.LeftOption option={{ back: true }} />
        <Header.MiddleText text="프로필" />
      </Header>
      <main>
        <form
          className="flex flex-col grow pt-[16px] px-[24px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="center mb-[34px]">
            <AvatarUploader
              defaultAvatar="https://picsum.photos/80/80?random=45"
              onUploadImage={() => {}}
            />
          </div>
          <InputWrapper>
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              field="nickname"
              value={watch("nickname")}
              register={register}
              formState={formState}
            />
          </InputWrapper>
          <div className="mt-[34px]">
            <Label htmlFor="gender">성별</Label>
            <div
              className="flex gap-[8px] mt-[12px]"
              onClick={handleClickGender}
            >
              {["남자", "여자"].map((gender) => {
                return (
                  <Chip key={gender} isSelected={watch("gender") === gender}>
                    {gender}
                  </Chip>
                );
              })}
            </div>
          </div>
          <div className="mt-[34px]">
            <Label htmlFor="age">연령</Label>
            <div className="flex gap-[8px] mt-[12px]">
              <MediumSelectButton
                text={watch("birthday")}
                placeholder="출생년도"
                onClick={() => setIsYearSelectionDrawerOpen(true)}
                Icon={<CalendarIcon />}
              />
            </div>
          </div>
        </form>
        <BottomButtonTabWrapper>
          <Button
            fullWidth
            disabled={!isValid}
            height={48}
            onClick={onClickSave}
          >
            저장하기
          </Button>
        </BottomButtonTabWrapper>
      </main>
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
}
