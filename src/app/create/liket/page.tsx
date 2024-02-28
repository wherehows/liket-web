"use client";

import FrontBackSwitch from "@/components/FrontBackSwitch";
import Header from "@/components/Header";
import WriteTab from "@/components/WriteTab";
import { CardSizeType } from "@/components/WriteTab/SizeEdit";
import { StrictShapeConfig } from "@/types/konva";
import { generateRandomId } from "@/utils/helpers";
import { Stage } from "konva/lib/Stage";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const NoSSRLiketUploader = dynamic(() => import("@/components/LiketUploader"), {
  ssr: false,
});

export default function Page() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isFront, setIsFront] = useState(true);
  const [shapes, setShapes] = useState<StrictShapeConfig[]>([]);
  const [size, setSize] = useState<CardSizeType>("LARGE");
  const stageRef = useRef<Stage>(null);

  return (
    <>
      <Header>
        <Header.LeftOption
          option={{
            back: true,
          }}
        />
        <Header.MiddleText text="라이켓 제작" />
        <Header.RightOption
          option={{
            check: {
              onClick: () => {
                // 저장 로직
                // const dataURL = getRefValue(stageRef).toDataURL();
              },
            },
          }}
        />
      </Header>
      <div className="center mt-[36px] mb-[24px]">
        <FrontBackSwitch
          isFront={isFront}
          onClickSwitch={() => setIsFront(!isFront)}
        />
      </div>
      <main>
        {!isFront && <div className="liket-card mx-auto">제작예정</div>}
        {isFront && (
          <>
            <NoSSRLiketUploader
              stageRef={stageRef}
              size={size}
              shapes={shapes}
              onChangeShape={(newShapes: StrictShapeConfig[]) => {
                setShapes(newShapes);
              }}
              onUploadImage={() => setIsImageUploaded(true)}
            />
            <WriteTab
              enabled={isImageUploaded}
              onClickChangeSize={(size) => setSize(size)}
              onClickSticker={async (sticker) => {
                try {
                  const response = await fetch(`/icons/${sticker}.svg`);
                  const blob = await response.blob();
                  const reader = new FileReader();
                  reader.onload = () => {
                    const image = new window.Image();
                    image.src = reader.result as string;
                    image.onload = () => {
                      setShapes([
                        ...shapes,
                        {
                          id: generateRandomId(10),
                          image,
                          ...INITIAL_STICKER_SETTING,
                        },
                      ]);
                    };
                  };
                  reader.readAsDataURL(blob);
                } catch (error) {
                  console.error(
                    "스티커를 가져오는 도중 에러가 발생했습니다",
                    error
                  );
                }
              }}
              onClickColor={(fill) => {
                const textShapeIdx = shapes.findIndex(
                  ({ type }) => type === "text"
                );
                if (textShapeIdx > -1) {
                  const newShapes = [...shapes];
                  newShapes[textShapeIdx] = {
                    ...newShapes[textShapeIdx],
                    fill,
                  };
                  setShapes(newShapes);
                } else {
                  setShapes([
                    ...shapes,
                    {
                      id: generateRandomId(10),
                      fill,
                      ...INITIAL_TEXT_SETTING,
                    },
                  ]);
                }
              }}
            />
          </>
        )}
      </main>
    </>
  );
}

const INITIAL_STICKER_SETTING = {
  type: "image",
  x: 0,
  y: 0,
  width: 80,
  height: 80,
};

const INITIAL_TEXT_SETTING = {
  type: "text",
  text: "텍스트를 입력해주세요",
  x: 74,
  y: 427,
  fontSize: 16,
  width: 147,
  fontFamily: "AppleSDGothicNeo",
  fontStyle: "bold",
};
