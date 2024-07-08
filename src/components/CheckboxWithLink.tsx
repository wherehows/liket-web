import RightArrow from "@/icons/right-arrow.svg";
import Checkbox from "./Checkbox";
import Link from "next/link";

interface CheckBoxWithLinkProps {
  isChecked: boolean;
  children: string;
  href: string;
  onChangeCheckbox: (isChecked: boolean) => void;
}

const CheckBoxWithLink = ({
  isChecked,
  children,
  href,
  onChangeCheckbox,
}: CheckBoxWithLinkProps) => {
  return (
    <div className="flex items-center">
      <Checkbox
        label=""
        isChecked={isChecked}
        size="14px"
        onChange={onChangeCheckbox}
      />
      <Link className="flex grow ml-[8px]" href={href}>
        <div className="text-body3 grow">{children}</div>
        <RightArrow
          style={{
            display: "inline",
          }}
        />
      </Link>
    </div>
  );
};

export default CheckBoxWithLink;
