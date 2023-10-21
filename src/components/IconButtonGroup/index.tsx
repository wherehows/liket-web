import { IconName } from "@/utils/icons";
import Image from "next/image";
import { MouseEvent } from "react";

interface IconButtonGroup {
  icons: IconName[];
  iconSize: number;
  onClickIcon: (e: MouseEvent<HTMLUListElement>) => void;
}

const IconButtonGroup = ({ icons, iconSize, onClickIcon }: IconButtonGroup) => {
  return (
    <ul className="flex" onClick={onClickIcon}>
      {icons.map((icon: IconName) => (
        <li key={icon}>
          <button data-icon={icon}>
            <Image
              alt={`${icon} 아이콘`}
              width={iconSize}
              height={iconSize}
              src={`/icons/${icon}.svg`}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IconButtonGroup;
