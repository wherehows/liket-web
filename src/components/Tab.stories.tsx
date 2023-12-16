import Button from "./Button";
import BottomButtonTabWrapper from "./BottomButtonTabWrapper";
import LinkableTab from "./LinkableTab";
import WriteTab from "./WriteTab";

const meta = {
  title: "Tabs",
};

export default meta;

interface WriteTabProps {
  isImageExist: boolean;
}

export const WriteTabIndex = {
  render: ({ isImageExist }: WriteTabProps) => {
    return (
      <WriteTab
        enabled={isImageExist}
        onClickChangeSize={() => {}}
        onClickColor={() => {}}
        onClickSticker={() => {}}
      />
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
    return <LinkableTab />;
  },
};

export const OneButtonBottomTab = {
  render: () => {
    return (
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
    );
  },
};

export const TwoButtonBottomTab = {
  render: () => {
    return (
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
    );
  },
};
