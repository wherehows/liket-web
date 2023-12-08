import type { Meta, StoryObj } from "@storybook/react";

import { Icons } from "@/utils/icons";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;

type GeneralHeader = StoryObj<
  ({
    text,
    iconGap,
    isTownSelection,
    textSize,
    iconSize,
    leftIcons,
    rightIcons,
  }: {
    text: string;
    iconGap: string;
    textSize: number;
    isTownSelection: boolean;
    iconSize: number;
    leftIcons: Parameters<typeof Header.LeftOption>[0]["icons"];
    rightIcons: Parameters<typeof Header.RightOption>[0]["icons"];
  }) => JSX.Element
>;

export const GeneralHeader: GeneralHeader = {
  render: () => {
    return (
      <>
        <div className="relative h-[48px]">
          <Header>
            <Header.LeftOption icons={["back"]} onClickIcon={() => {}} />
            <Header.MiddleText text="프로필" />
          </Header>
        </div>
        <div className="relative h-[48px]">
          <Header>
            <Header.LeftOption icons={["back"]} onClickIcon={() => {}} />
            <Header.MiddleText text="리뷰 작성" />
            <Header.RightOption icons={["save"]} onClickIcon={() => {}} />
          </Header>
        </div>
        <div className="relative h-[48px]">
          <Header>
            <Header.LeftOption icons={["back"]} onClickIcon={() => {}} />
            <Header.MiddleText text="리뷰 작성" />
            <Header.RightOption
              icons={[{ name: "save", isDisabled: true }]}
              onClickIcon={() => {}}
            />
          </Header>
        </div>
        <div className="relative h-[48px]">
          <Header>
            <Header.LeftOption icons={["back"]} onClickIcon={() => {}} />
            <Header.MiddleText text="리뷰 작성" />
            <Header.RightOption
              icons={[{ name: "save", isDisabled: true }]}
              onClickIcon={() => {}}
            />
          </Header>
        </div>
        <div className="relative h-[48px]">
          <Header>
            <Header.LeftOption icons={["back"]} onClickIcon={() => {}} />
            <Header.RightOption
              icons={["search", "like"]}
              onClickIcon={() => {}}
            />
          </Header>
        </div>
      </>
    );
  },
};
