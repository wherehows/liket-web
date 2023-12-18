import customToast from "@/utils/customToast";
import type { Meta } from "@storybook/react";
import { Toaster } from "react-hot-toast";

const meta: Meta = {
  title: "components/Toast",
};

export default meta;

export const Index = {
  render: () => {
    return (
      <>
        <button onClick={() => customToast("로그인이 필요합니다")}>
          테스트
        </button>
        <Toaster
          position="bottom-center"
          containerStyle={{
            inset: "16px 16px 114px 16px",
          }}
        />
      </>
    );
  },
};
