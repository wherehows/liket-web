interface MiddleTextProps {
  text: string;
  textSize?: number;
}

const MiddleText = ({ text, textSize = 16 }: MiddleTextProps) => {
  return (
    <div
      className={`absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[${textSize}px]`}
    >
      {text}
    </div>
  );
};

export default MiddleText;
