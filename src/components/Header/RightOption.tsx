import { XOR } from "@/types/common";
import { MouseEvent } from "react";
import IconButtonGroup, { IconType } from "../IconButtonGroup";

type RightOptionProps = XOR<
  {
    text: string;
  },
  {
    icons: IconType[];
    onClickIcon: (e: MouseEvent<HTMLUListElement>) => void;
  }
> & {
  iconGap?: number;
  iconSize?: number;
};

const RightOption = ({
  text,
  icons,
  iconGap = 8,
  iconSize = 24,
  onClickIcon,
}: RightOptionProps) => {
  if (text) {
    return <button>{text}</button>;
  }

  if (icons) {
    return (
      <IconButtonGroup
        icons={icons}
        iconGap={iconGap}
        iconSize={iconSize}
        onClickIcon={onClickIcon}
      />
    );
  }
};

export default RightOption;
