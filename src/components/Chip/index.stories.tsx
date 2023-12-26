import { StoryObj } from "@storybook/react";
import Chip from ".";

const meta = {
  title: "components/Chip",
};

export default meta;

type IndexType = StoryObj<typeof Chip>;

export const Index: IndexType = {
  render: ({ variant }) => {
    return (
      <>
        <Chip variant="willActive">오픈예정</Chip>
        <Chip variant="active">진행중</Chip>
        <Chip variant="willClosed">종료예정</Chip>
        <Chip variant="closed">종료</Chip>
        <Chip variant="waiting">등록대기</Chip>
        <Chip variant="inactive">비활성화</Chip>
      </>
    );
  },
};
