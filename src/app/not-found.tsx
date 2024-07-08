import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import ButtonGroup from "@/components/ButtonGroup";
import ExclamationIcon from "@/icons/circle-exclamation.svg";
import NotFoundBottomButtons from "../components/NotFoundBottomButtons";

export default function Page() {
  return (
    <>
      <main className="center">
        <ExclamationIcon
          style={{
            margin: "0 0 48px 0",
          }}
        />
        <div className="text-h1 mb-[16px]">페이지를 찾을 수 없습니다</div>
        <div className="text-center text-body3 text-grey-04">
          <div>주소가 잘못 입력되거나</div>
          <div>변경 혹은 삭제되어 페이지를 찾을 수 없습니다.</div>
        </div>
      </main>
      <BottomButtonTabWrapper>
        <ButtonGroup gap={8}>
          <NotFoundBottomButtons />
        </ButtonGroup>
      </BottomButtonTabWrapper>
    </>
  );
}
