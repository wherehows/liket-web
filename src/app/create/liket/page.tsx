"use client";

import FrontBackSwitch from "@/components/FrontBackSwitch";
import Header from "@/components/Header";
import LiketUploader from "@/components/LiketUploader";
import WriteTab from "@/components/WriteTab";

export default function Page() {
  return (
    <>
      <Header>
        <Header.LeftOption
          option={{
            back: true,
          }}
        />
        <Header.MiddleText text="라이켓 제작" />
      </Header>
      <div className="center mt-[36px] mb-[24px]">
        <FrontBackSwitch />
      </div>
      <div className="mx-auto">
        <LiketUploader />
      </div>
      <WriteTab
        enabled={true}
        onClickChangeSize={(size) => {}}
        onClickSticker={(sticker) => {}}
        onClickColor={(color) => {}}
      />
    </>
  );
}
