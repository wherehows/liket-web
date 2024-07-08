"use client";

import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import CheckBoxWithLink from "@/components/CheckboxWithLink";
import Divider from "@/components/Divider";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [agree, setAgree] = useState({
    "youth-protection": false,
    usage: false,
    privacy: false,
  });

  const handleChangeCheckbox = (
    term: "youth-protection" | "usage" | "privacy",
    isChecked: boolean
  ) => {
    const newAgree = { ...agree, [term]: isChecked };
    setAgree(newAgree);
  };

  const isAllAgreed = Object.values(agree).every((isAgree) => isAgree);

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
      <main className="px-[24px] pt-[15px]">
        <div className="my-[8px]">
          <Checkbox
            label="전체 약관동의"
            size="14px"
            isBoard
            isChecked={isAllAgreed}
            onChange={() => {
              const isAllAgree = Object.values(agree).every(
                (isAgree) => isAgree
              );

              if (isAllAgree) {
                setAgree({
                  "youth-protection": false,
                  usage: false,
                  privacy: false,
                });
              } else {
                setAgree({
                  "youth-protection": true,
                  usage: true,
                  privacy: true,
                });
              }
            }}
            marginBetweenTextAndCheckbox="8px"
          />
        </div>
        <Divider width="100%" height="1px" margin="0 0 16px 0" />
        <div className="my-[8px]">
          <CheckBoxWithLink
            isChecked={agree["youth-protection"]}
            href="/terms/youth-protection"
            onChangeCheckbox={(isChecked) =>
              handleChangeCheckbox("youth-protection", isChecked)
            }
          >
            [필수] 만 14세 이상입니다.
          </CheckBoxWithLink>
        </div>

        <div className="my-[8px]">
          <CheckBoxWithLink
            isChecked={agree.usage}
            href="/terms/usage"
            onChangeCheckbox={(isChecked) =>
              handleChangeCheckbox("usage", isChecked)
            }
          >
            [필수] 서비스 이용 약관
          </CheckBoxWithLink>
        </div>
        <div className="my-[8px]">
          <CheckBoxWithLink
            isChecked={agree["privacy"]}
            href="/terms/privacy"
            onChangeCheckbox={(isChecked) =>
              handleChangeCheckbox("privacy", isChecked)
            }
          >
            [필수] 개인정보 수집 및 이용
          </CheckBoxWithLink>
        </div>
      </main>
      <BottomButtonTabWrapper shadow>
        <Button
          fullWidth
          height={48}
          disabled={!isAllAgreed}
          onClick={() => {}}
        >
          다음
        </Button>
      </BottomButtonTabWrapper>
    </>
  );
}
