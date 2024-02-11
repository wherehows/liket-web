import { EmptyFunction, StrictPropsWithChildren } from "@/types/common";
import { classNames } from "@/utils/helpers";
import { variantToStyleMap, variantWithDisabledStyleMap } from "@/utils/style";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

type InputProps = StrictPropsWithChildren<{
  margin?: string;
}>;

const Input = ({ children, margin = "" }: InputProps) => {
  return (
    <div
      style={{
        margin,
      }}
      className="relative flex flex-col"
    >
      {children}
    </div>
  );
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
  maxLength?: number;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  isRequired?: boolean;
}

const Content = ({
  id,
  maxLength,
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
          "box-border pl-[8px] pr-[8px] pt-[16px] pb-[15px] text-body3 border-b-[1px] border-b-grey-01 focus:border-b-[2px] placeholder:text-button4 placeholder:text-grey-02",
          isErrorExist
            ? "border-b-[2px] border-b-rosepink-01 focus:border-b-rosepink-01"
            : "focus:border-b-skyblue-01"
        )}
        maxLength={maxLength}
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={isErrorExist}
        aria-required={!!isRequired}
        {...register(id)}
      />
      <strong
        className="transform translate-y-[100%] absolute bottom-0 text-button6 text-rosepink-01"
        hidden={isErrorExist ? false : true}
        aria-live="assertive"
      >
        {errors[id]?.message?.toString()}
      </strong>
    </>
  );
};

type ButtonProps = StrictPropsWithChildren<
  {
    disabled: boolean;
    onClick: EmptyFunction;
  },
  string
>;

const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "px-[8px] text-button4 rounded-[12px] h-[24px] absolute bottom-0 right-0 mb-[12px]",
        disabled
          ? variantWithDisabledStyleMap["primary"]
          : variantToStyleMap["primary"]
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

type TextProps = StrictPropsWithChildren<{ isShown: boolean }, string>;

const Text = ({ children, isShown }: TextProps) => {
  return (
    <>
      {isShown && (
        <div className="absolute text-button6 bottom-0 right-0 mb-[17px] text-rosepink-01">
          {children}
        </div>
      )}
    </>
  );
};

Input.Label = Label;
Input.Content = Content;
Input.Button = Button;
Input.Text = Text;

export default Input;
