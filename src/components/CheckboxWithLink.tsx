import RightArrow from "@/icons/right-arrow.svg";
import Checkbox from "./Checkbox";
import Link from "next/link";

interface CheckBoxWithLinkProps {
  isChecked: boolean;
  children: string;
  onChangeCheckbox: (isChecked: boolean) => void;
  onClickListItem: () => void;
}

const CheckBoxWithLink = ({
  isChecked,
  children,
  onChangeCheckbox,
  onClickListItem,
}: CheckBoxWithLinkProps) => {
  return (
    <div className="flex items-center">
      <Checkbox
        label=""
        isChecked={isChecked}
        size="14px"
        onChange={onChangeCheckbox}
      />
      <button className="flex grow ml-[8px]" onClick={onClickListItem}>
        <div className="text-body3 grow text-start">{children}</div>
        <RightArrow
          style={{
            display: "inline",
          }}
        />
      </button>
    </div>
  );
};

export default CheckBoxWithLink;
