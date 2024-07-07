import { useSignup } from "@/service/signup/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, YearCalendar } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState, MouseEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BottomButtonTabWrapper from "../BottomButtonTabWrapper";
import CustomDrawer from "../CustomDrawer";
import { Input, InputWrapper, Label } from "../newInput";
import MediumSelectButton from "../SelectButton/MediumSelectButton";
import Button from "../Button";
import AvatarUploader from "../AvatarUploader";
import Chip from "../Chip";
import { ProfileFormData } from "@/types/signup";

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

const FORM_DEFAULT_VALUES = {
  file: "",
  nickname: "",
  gender: "",
  birth: "",
};

interface ProfileForm {
  currentFormInformation?: typeof FORM_DEFAULT_VALUES;
  nextButtonText: string;
  onClickNextButton: (insertedFormData: ProfileFormData) => void;
}

const ProfileForm = ({
  currentFormInformation = FORM_DEFAULT_VALUES,
  nextButtonText,
  onClickNextButton,
}: ProfileForm) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [isYearSelectionDrawerOpen, setIsYearSelectionDrawerOpen] =
    useState(false);
  const [tempYear, setTempYear] = useState<Dayjs>(dayjs(new Date()));

  const methods = useForm({
    mode: "onBlur",
    defaultValues: currentFormInformation,
    resolver: zodResolver(profileScheme),
  });

  const { formState, register, setValue, getValues, trigger } = methods;

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

  const handleClickNextButton = () => {
    const { file, birth, gender, nickname } = getValues();

    onClickNextButton({
      file,
      nickname,
      birth: +birth,
      gender: gender === "남성" ? 1 : 2,
    });
  };

  return (
    <>
      <form className="flex flex-col grow pt-[16px] px-[24px]">
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
          onClick={handleClickNextButton}
        >
          {nextButtonText}
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

export default ProfileForm;
