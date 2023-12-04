import Modal from ".";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import useModalStore from "./store";

const DeleteComment = () => {
  const { modalFileName, onClickNegative, onClickPositive, setModal } =
    useModalStore();

  const handleCloseModal = () => {
    setModal({
      modalFileName: "",
      onClickNegative: null,
      onClickPositive: null,
    });
    onClickNegative && onClickNegative();
  };

  const handleClickPositive = () => {
    setModal({
      modalFileName: "",
      onClickNegative: null,
      onClickPositive: null,
    });
    onClickPositive && onClickPositive();
  };

  return (
    <Modal
      title="댓글 삭제"
      ariaLabel="댓글 삭제 모달"
      isOpen={!!modalFileName}
      onClose={handleCloseModal}
      footer={
        <ButtonGroup gap={8}>
          <Button
            fullWidth
            variant="ghost"
            height={40}
            onClick={handleCloseModal}
          >
            취소
          </Button>
          <Button fullWidth height={40} onClick={handleClickPositive}>
            확인
          </Button>
        </ButtonGroup>
      }
    >
      <div className="text-body3 text-grey-04 text-center">
        <div>댓글 삭제 버튼을 눌르셨습니다.</div>
        <div>정말 삭제하시겠습니까?</div>
      </div>
    </Modal>
  );
};

export default DeleteComment;
