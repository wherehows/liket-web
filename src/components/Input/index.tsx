import { StrictPropsWithChildren } from "@/types/common";
import { HTMLInputTypeAttribute } from "react";

type InputProps = StrictPropsWithChildren<unknown>;

const Input = ({ children }: InputProps) => {
  return <div className="flex flex-col">{children}</div>;
};

interface LabelProps {
  maxLength?: number;
  currentLength?: number;
  htmlFor: string;
  children: string;
}

const Label = ({ currentLength, maxLength, htmlFor, children }: LabelProps) => {
  const labelTextClassName = "text-caption text-grey-04";

  if (
    typeof maxLength !== "undefined" &&
    typeof currentLength !== "undefined"
  ) {
    return (
      <div className={`flex flex-row ${labelTextClassName}`}>
        <label className="flex-1">{children}</label>
        <div className="text-numbering3 text-grey-04">
          {currentLength} / {maxLength}
        </div>
      </div>
    );
  }

  return (
    <label className={labelTextClassName} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

interface ContentProps {
  id: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  isRequired?: boolean;
}

const Content = ({
  id,
  type = "text",
  isRequired = false,
  placeholder,
}: ContentProps) => {
  return (
    <input
      className="pl-[8px] pr-[8px] pt-[12px] pb-[12px] text-body3 border-b-[1px] border-b-grey-01 focus:border-b-skyblue-01"
      id={id}
      type={type}
      aria-required={!!isRequired}
      placeholder={placeholder}
    />
  );
};

Input.Label = Label;
Input.Content = Content;

export default Input;
