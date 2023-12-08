import { IconName } from "@/utils/icons";
import Image from "next/image";
import { MouseEvent } from "react";

export type IconType =
  | IconName
  | { name: IconName; isDisabled?: boolean; isActive?: boolean };

interface IconButtonGroup {
  icons: IconType[];
  iconSize: number;
  iconGap?: string;
  onClickIcon: (e: MouseEvent<HTMLUListElement>) => void;
}

const IconButtonGroup = ({
  icons,
  iconGap,
  iconSize,
  onClickIcon,
}: IconButtonGroup) => {
  return (
    <ul
      style={{
        gap: iconGap,
      }}
      className={`flex justify-between overflow-x-auto x-[100%] h-[100%]`}
      onClick={onClickIcon}
    >
      {icons.map((icon: IconType) => {
        let iconName = null;
        let status = {
          isDisabled: false,
          isActive: false,
        };

        if (typeof icon === "string") {
          iconName = icon;
        } else {
          const { name, isDisabled, isActive } = icon;
          status.isActive = !!isActive;
          status.isDisabled = !!isDisabled;
          iconName = name;
        }

        return (
          <li key={iconName} className={`flex justify-center items-center`}>
            <button
              data-icon={iconName}
              disabled={status.isDisabled}
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
              }}
            >
              <Image
                alt={`${iconName} 아이콘`}
                width={iconSize}
                height={iconSize}
                src={`/icons/${iconName}.svg`}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default IconButtonGroup;
