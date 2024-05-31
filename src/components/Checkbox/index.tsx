import FilledCheckbox from "@/icons/checked-checkbox.svg";
import UnFilledCheckbox from "@/icons/empty-checkbox.svg";
import { classNames } from "@/utils/helpers";

interface Props {
  label: string;
  size: "12px" | "14px" | "16px";
  isChecked: boolean;
  onChange: () => void;
  isRight?: boolean;
}

const Index = ({
  label,
  isChecked,
  size,
  isRight = false,
  onChange,
}: Props) => {
  return (
    <label
      className={classNames(
        "flex items-center cursor-pointer",
        size == "12px" ? "text-caption text-grey-04" : "text-body3 color-body3",
        isRight ? "flex-row-reverse" : ""
      )}
      style={{
        fontSize: size,
      }}
    >
      {label}
      <input
        className="appearance-none hidden"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <p className="ml-[6px]">
        {isChecked ? (
          <FilledCheckbox width="24" />
        ) : (
          <UnFilledCheckbox width="24" />
        )}
      </p>
    </label>
  );
};

export default Index;
