import type { Meta } from "@storybook/react";
import toast, { Toaster } from "react-hot-toast";

const meta: Meta = {
  title: "Toast",
};

export default meta;

export const Index = {
  render: () => {
    return (
      <>
        <button
          onClick={() => {
            toast("Hi", {
              style: {
                borderRadius: "28px",
                fontSize: "14px",
                fontWeight: 400,
                background: "#000",
                color: "#fff",
              },
            });
          }}
        >
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
