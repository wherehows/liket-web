import { XOR } from "@/types/common";
import { MouseEvent } from "react";
import { IconName } from "@/utils/icons";
import IconButtonGroup from "../IconButtonGroup";

type RightOptionProps = XOR<
  {
    text: string;
  },
  {
    icons: IconName[];
    onClickIcon: (e: MouseEvent<HTMLUListElement>) => void;
  }
> & {
  iconGap?: string;
  iconSize: number;
};

const RightOption = ({
  text,
  icons,
  iconGap,
  iconSize,
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
