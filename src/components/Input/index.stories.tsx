import Input from "@/components/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
};

export default meta;

type Index = StoryObj<typeof Input>;

export const Index: Index = {
  render: () => {
    return (
      <>
        <Input>
          <Input.Label htmlFor="email">이메일</Input.Label>
          <Input.Content id="email" placeholder="영문, 숫자 포함 4~12자 " />
        </Input>
        <Input>
          <Input.Label htmlFor="password">비밀번호</Input.Label>
          <Input.Content
            id="password"
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
        </Input>
        <Input>
          <Input.Label htmlFor="password-check">비밀번호 확인</Input.Label>
          <Input.Content
            id="password-check"
            type="password"
            placeholder="비밀번호 재확인"
          />
        </Input>
        <Input>
          <Input.Label htmlFor="title" currentLength={0} maxLength={30}>
            제목
          </Input.Label>
          <Input.Content id="title" placeholder="영문, 숫자 포함 4~12자 " />
        </Input>
      </>
    );
  },
};
