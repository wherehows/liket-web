import type { Meta, StoryObj } from "@storybook/react";

import Modal from ".";
import useModalStore from "./store";
import ModalProvider from "./ModalProvider";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
};

export default meta;

export const Index = {
  render: function Render() {
    const setModal = useModalStore(({ setModal }) => setModal);

    return (
      <ModalProvider>
        <button
          onClick={() => {
            setModal({ modalFileName: "DeleteComment" });
          }}
        >
          댓글 삭제 버튼
        </button>
      </ModalProvider>
    );
  },
};
