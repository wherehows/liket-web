import { XOR } from "@/types/common";
import Logo from "@/icons/logo.svg";
import Link from "next/link";

import BackIcon from "@/icons/back.svg";
import CloseIcon from "@/icons/close.svg";
import { useRouter } from "next/router";

type LeftOptionProps = XOR<
  {
    townSelection: boolean;
  },
  XOR<
    {
      option: {
        back?: boolean;
        close?: boolean;
      };
    },
    { logo: boolean }
  >
>;

const LeftOption = ({ logo, townSelection, option }: LeftOptionProps) => {
  const router = useRouter();

  if (logo) {
    return (
      <Link href="/">
        <Logo />
      </Link>
    );
  }

  if (townSelection) {
    return <div>동네 선택 컴포넌트(미완)</div>;
  }

  if (option) {
    const Back = option.back && (
      <button
        onClick={() => {
          router.back();
        }}
      >
        <BackIcon />
      </button>
    );

    const Close = option.close && (
      <button
        onClick={() => {
          router.back();
        }}
      >
        <CloseIcon />
      </button>
    );

    return <div>{[Back, Close]}</div>;
  }
};

export default LeftOption;
