"use client";

import { EmptyFunction, IconButtonOption, XOR } from "@/types/common";
import Logo from "@/icons/logo.svg";
import Link from "next/link";

import BackIcon from "@/icons/back.svg";
import CloseIcon from "@/icons/close-24.svg";
import { useRouter } from "next/navigation";

type LeftOptionProps = XOR<
  {
    townSelection: boolean;
    onClickTownSelection: EmptyFunction;
  },
  XOR<
    {
      option: {
        back?: IconButtonOption;
        close?: IconButtonOption;
      };
    },
    { logo: boolean }
  >
>;

const LeftOption = ({
  logo,
  townSelection,
  option,
  onClickTownSelection,
}: LeftOptionProps) => {
  const router = useRouter();

  if (logo) {
    return (
      <Link href="/">
        <Logo />
      </Link>
    );
  }

  if (townSelection) {
    return (
      <button onClick={onClickTownSelection}>동네 선택 컴포넌트(미완)</button>
    );
  }

  if (option) {
    const { back, close } = option;

    const Back = back && (
      <button
        onClick={() => {
          router.back();
        }}
      >
        <BackIcon />
      </button>
    );

    const Close = close && (
      <button
        onClick={() => {
          router.back();
        }}
      >
        <CloseIcon />
      </button>
    );

    return <div className="center">{[Back, Close]}</div>;
  }
};

export default LeftOption;
