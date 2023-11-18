import IconButtonGroup from "@/components/IconButtonGroup";
import { XOR } from "@/types/common";
import { IconName } from "@/utils/icons";
import { MouseEvent } from "react";

type LeftOptionProps = XOR<
  {
    isTownSelection: boolean;
  },
  {
    icons: IconName[];
    onClickIcon: (e: MouseEvent<HTMLUListElement>) => void;
  }
> & {
  iconSize?: number;
  iconGap?: string;
};

const LeftOption = ({
  isTownSelection,
  icons,
  iconGap,
  iconSize,
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
