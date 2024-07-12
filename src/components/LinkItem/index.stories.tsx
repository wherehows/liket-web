import { Meta } from "@storybook/react";
import LinkItem from ".";

const meta: Meta = {
  title: "components/LinkItem",
};

export default meta;

export const Index = {
  render: () => {
    return (
      <LinkItem href="https://liket-web.vercel.app/">
        라이켓 메인 페이지
      </LinkItem>
    );
  },
};
