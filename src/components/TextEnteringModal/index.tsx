import { useState, ChangeEvent } from "react";
import Header from "../Header";
import { EmptyFunction } from "@/types/common";

interface Props {
  isOpen: boolean;
  maxLength: number;
  allowNewLine: boolean;
  onClickClose: EmptyFunction;
  onClickCheck: (text: string) => void;
}

const TEXT_AREA_HEIGHT = 48;

const Index = ({
  isOpen,
  maxLength,
  allowNewLine,
  onClickClose,
  onClickCheck,
}: Props) => {
  const [value, setValue] = useState("");
  const [textAreaHeight, setTextAreaHeight] =
    useState<number>(TEXT_AREA_HEIGHT);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (allowNewLine) {
      setValue(e.target.value);
      setTextAreaHeight(e.target.scrollHeight - 5);
    } else {
      setValue(e.target.value.replace(/(\r\n|\n|\r)/gm, ""));
    }
  };

  return (
    <>
      {isOpen && (
        <div className="z-[9999] flex flex-col fixed top-0 left-0 right-0 height-0 bottom-0 bg-black bg-opacity-80">
          <Header transparent>
            <Header.LeftOption
              option={{
                close: {
                  color: "#fff",
                  onClick: onClickClose,
                },
              }}
            />
            <Header.RightOption
              option={{
                check: {
                  onClick: () => {
                    if (value.length === 0) {
                      return;
                    }

                    onClickCheck(value);
                  },
                  disabled: !value.length,
                },
              }}
            />
          </Header>
          <div className="flex grow items-center mx-auto w-content px-[45px]">
            <textarea
              value={value}
              onChange={handleChange}
              placeholder="텍스트를 입력해주세요"
              maxLength={maxLength}
              style={{
                height: textAreaHeight,
              }}
              className="text-button4 text-center resize-none border-b-2 border-skyblue-01 outline-none bg-transparent px-[8px] py-[16px] text-white w-[100%]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
