import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;

export const GeneralHeader = {
  render: () => {
    return (
      <>
        <div className="relative h-[48px]">
          <Header>
            <Header.LeftOption logo />
            <Header.MiddleText text="프로필" />
          </Header>
        </div>
        <div className="relative h-[48px]">
          <Header>
            <Header.LeftOption
              option={{
                close: true,
              }}
            />
            <Header.MiddleText text="필터" />
          </Header>
        </div>
        <div className="relative h-[48px]">
          <Header>
            <Header.LeftOption townSelection />
            <Header.RightOption
              option={{
                search: true,
                like: true,
              }}
            />
          </Header>
        </div>
        <div className="relative h-[48px]">
          <Header>
            <Header.LeftOption
              option={{
                back: true,
              }}
            />
            <Header.RightOption
              option={{
                search: true,
                like: true,
              }}
            />
          </Header>
        </div>
      </>
    );
  },
};
