import { StoryObj } from "@storybook/react";
import Divider from ".";

const meta = {
  title: "components/Divider",
};

export default meta;

type VerticalType = StoryObj<{
  width: number;
  height: number;
}>;

export const Vertical: VerticalType = {
  render: ({ width, height }) => {
    return (
      <>
        <div className="flex items-center">
          <span className="text-grey-03 text-button6 mr-[16px]">
            이메일로 로그인
          </span>
          <Divider height="8px" width="1px" orientation="vertical" />
          <span className="text-grey-03 text-button6 ml-[16px]">
            이메일로 회원가입
          </span>
        </div>
        <Divider
          width={`${width}px`}
          height={`${height}px`}
          orientation="vertical"
        />
      </>
    );
  },
  args: {
    width: 10,
    height: 99,
  },
};

type HorizontalType = StoryObj<{
  width: number;
  height: number;
}>;

export const Horizontal: HorizontalType = {
  render: ({ width, height }) => {
    return (
      <>
        <div className="flex items-center">
          <Divider width="30px" height="1px" />
          <span className="text-body5 text-grey-04 ml-[16px] mr-[16px]">
            또는
          </span>
          <Divider width="30px" height="1px" />
        </div>
        <Divider
          width={`${width}px`}
          height={`${height}px`}
          orientation="vertical"
        />
      </>
    );
  },
  args: {
    width: 10,
    height: 99,
  },
};
