import IconButtonGroup, { IconType } from "@/components/IconButtonGroup";
import { XOR } from "@/types/common";
import { MouseEvent } from "react";

type LeftOptionProps = XOR<
  {
    isTownSelection: boolean;
  },
  {
    icons: IconType[];
    onClickIcon: (e: MouseEvent<HTMLUListElement>) => void;
  }
> & {
  iconSize?: number;
  iconGap?: number;
};

const LeftOption = ({
  isTownSelection,
  icons,
  iconGap = 8,
  iconSize = 24,
  onClickIcon,
}: LeftOptionProps) => {
  if (isTownSelection) {
    return <div>동네 선택 컴포넌트</div>;
  }

  if (icons && iconSize && onClickIcon) {
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

export default LeftOption;
