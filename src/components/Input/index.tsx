import { StrictPropsWithChildren } from "@/types/common";
import { classNames } from "@/utils/helpers";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

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

  if (maxLength && currentLength) {
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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isErrorExist = errors[id]?.message ? true : false;

  return (
    <>
      <input
        className={classNames(
          "pl-[8px] pr-[8px] pt-[16px] pb-[15px] mb-[4px] text-body3 border-b-[1px] border-b-grey-01 focus:border-b-[2px] placeholder:text-button4 placeholder:text-grey-02",
          isErrorExist
            ? "border-b-[2px] border-b-rosepink-01 focus:border-b-rosepink-01"
            : "focus:border-b-skyblue-01"
        )}
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={isErrorExist}
        aria-required={!!isRequired}
        {...register(id)}
      />
      <strong
        className="text-button6 text-rosepink-01"
        hidden={isErrorExist ? false : true}
        aria-live="assertive"
      >
        {errors[id]?.message?.toString()}
      </strong>
    </>
  );
};

Input.Label = Label;
Input.Content = Content;

export default Input;
