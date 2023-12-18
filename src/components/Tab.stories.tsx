import Button from "./Button";
import BottomButtonTabWrapper from "./BottomButtonTabWrapper";
import LinkableTab from "./LinkableTab";
import WriteTab from "./WriteTab";
import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Tabs",
};

export default meta;

interface WriteTabProps {
  isImageExist: boolean;
}

export const WriteTabIndex = {
  render: ({ isImageExist }: WriteTabProps) => {
    return (
      <div className="flex flex-col h-[100%]">
        <div className="flex-1"></div>
        <WriteTab
          enabled={isImageExist}
          onClickChangeSize={() => {}}
          onClickColor={() => {}}
          onClickSticker={() => {}}
        />
      </div>
    );
  },
  argTypes: {
    isImageExist: {
      control: "boolean",
    },
  },
};

export const LinkableTabIndex = {
  render: () => {
    return;
    <div className="flex flex-col h-[100%]">
      <div className="flex-1"></div>
      <LinkableTab />
    </div>;
  },
};

export const OneButtonBottomTab = {
  render: () => {
    return (
      <div className="flex flex-col h-[100%]">
        <div className="flex-1"></div>
        <BottomButtonTabWrapper>
          <Button
            fullWidth
            height={48}
            onClick={() => {
              //
            }}
          >
            저장
          </Button>
        </BottomButtonTabWrapper>
      </div>
    );
  },
};

export const TwoButtonBottomTab = {
  render: () => {
    return (
      <div className="flex flex-col h-[100%]">
        <div className="flex-1"></div>
        <BottomButtonTabWrapper gap="16px">
          <Button
            height={48}
            variant="ghost"
            fullWidth
            onClick={() => {
              //
            }}
          >
            이전 페이지
          </Button>
          <Button
            height={48}
            fullWidth
            onClick={() => {
              //
            }}
          >
            메인으로 가기
          </Button>
        </BottomButtonTabWrapper>
      </div>
    );
  },
};
