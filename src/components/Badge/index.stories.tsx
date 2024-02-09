import { StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
  title: "components/Badge",
};

export default meta;

type IndexType = StoryObj<typeof Badge>;

export const Index: IndexType = {
  render: ({ variant }) => {
    return (
      <div>
        <Badge variant="willActive">오픈예정</Badge>
        <Badge variant="active">진행중</Badge>
        <Badge variant="willClosed">종료예정</Badge>
        <Badge variant="closed">종료</Badge>
        <Badge variant="waiting">등록대기</Badge>
        <Badge variant="inactive">비활성화</Badge>
      </div>
    );
  },
};
