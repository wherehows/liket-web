import type { Meta } from "@storybook/react";

import Modal from ".";
import useModalStore from "./store";
import ModalProvider from "./ModalProvider";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

const meta: Meta<typeof Modal> = {
  title: "components/Modal",
  component: Modal,
};

export default meta;

export const Index = {
  render: function Render() {
    const openModal = useModalStore(({ openModal }) => openModal);

    return (
      <ModalProvider>
        <div className="w-[600px]">
          <ButtonGroup gap={16}>
            <Button
              fullWidth
              variant="ghost"
              height={48}
              onClick={() => {
                openModal("DeleteCommentModal");
              }}
            >
              삭제 모달 보기
            </Button>
            <Button
              fullWidth
              variant="ghost"
              height={48}
              onClick={() => {
                openModal("LoginModal");
              }}
            >
              로그인 모달 보기
            </Button>
          </ButtonGroup>
        </div>
      </ModalProvider>
    );
  },
};
