"use client";

import FrontBackSwitch from "@/components/FrontBackSwitch";
import Header from "@/components/Header";
import WriteTab from "@/components/WriteTab";
import { CardSizeType } from "@/components/WriteTab/SizeEdit";
import { StrictShapeConfig } from "@/types/konva";
import { classNames, generateRandomId, getRefValue } from "@/utils/helpers";
import { Stage } from "konva/lib/Stage";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import CircleCross from "@/icons/circle-cross.svg";
import TextEnteringModal from "@/components/TextEnteringModal";
import { useRouter } from "next/navigation";
import LiketBackSide from "@/components/LiketBackSide";
import { Else, If, Then } from "react-if";

const NoSSRLiketUploader = dynamic(() => import("@/components/LiketUploader"), {
  ssr: false,
});

export default function Page() {
  const router = useRouter();
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTextEnteringOnFrontSide, setIsTextEnteringOnFrontSide] =
    useState(false);
  const [isTextEnteringOnBackSide, setIsTextEnteringOnBackSide] =
    useState(false);
  const [review, setReview] = useState("");
  const [isFront, setIsFront] = useState(true);
  const [selectedShapeId, setSelectedShapeId] = useState(" ");
  const [shapes, setShapes] = useState<StrictShapeConfig[]>([]);
  const [size, setSize] = useState<CardSizeType>("LARGE");
  const stageRef = useRef<Stage>(null);
  const handleClickRemoveItem = () => {
    const targetShape = shapes.find(({ id }) => id === selectedShapeId);

    if (targetShape?.type === "text") {
      setSelectedIndex(0);
    }

    const newShapes = shapes.filter(({ id }) => id !== selectedShapeId);
    setShapes(newShapes);
  };
  const isTextExist = shapes.some(({ type }) => type === "text");
  const handleClickFrontTextEnteringClose = () => {
    setSelectedIndex(0);
    setIsTextEnteringOnFrontSide(false);
  };
  const handleClickFrontTextEnteringCheck = (text: string) => {
    setShapes([
      ...shapes,
      {
        type: "text",
        id: generateRandomId(10),
        fill: "black",
        text,
      },
    ]);

    setIsTextEnteringOnFrontSide(false);
  };

  const handleClickBackTextEnteringClose = () => {
    setIsTextEnteringOnBackSide(false);
  };

  const handleClickBackTextEnteringCheck = (text: string) => {
    setReview(text);
    setIsTextEnteringOnBackSide(false);
  };

  const isTextEnteringOpen =
    isTextEnteringOnBackSide || isTextEnteringOnFrontSide;

  return (
    <>
      <Header>
        {!isTextEnteringOpen && (
          <>
            <Header.LeftOption
              option={{
                back: true,
              }}
            />
            <Header.MiddleText text="라이켓 제작" />
            <Header.RightOption
              option={{
                check: {
                  disabled: !isImageUploaded,
                  onClick: () => {
                    const dataURL = getRefValue(stageRef).toDataURL();
                    // router.push("/mypage/likets/1");
                  },
                },
              }}
            />
          </>
        )}
      </Header>
      <main>
        <div className="center mt-[36px] mb-[24px]">
          <FrontBackSwitch
            isFront={isFront}
            onClickSwitch={() => setIsFront(!isFront)}
          />
        </div>
        <LiketBackSide
          isFront={isFront}
          review={review}
          onClickReview={() => setIsTextEnteringOnBackSide(true)}
        />
        <div className={classNames(!isFront && "hidden")}>
          <NoSSRLiketUploader
            stageRef={stageRef}
            size={size}
            shapes={shapes}
            selectedShapeId={selectedShapeId}
            onSelectShape={(selectedShapeId: string) =>
              setSelectedShapeId(selectedShapeId)
            }
            onChangeShape={(newShapes: StrictShapeConfig[]) => {
              setShapes(newShapes);
            }}
            onUploadImage={() => setIsImageUploaded(true)}
          />
          <If condition={selectedShapeId.length > 1}>
            <Then>
              <button
                className="absolute bottom-[34px] left-1/2 transform -translate-x-1/2"
                onClick={handleClickRemoveItem}
              >
                <CircleCross width="36" height="36" />
              </button>
            </Then>
            <Else>
              <WriteTab
                selectedIndex={selectedIndex}
                onChangeTab={(index) => setSelectedIndex(index)}
                hidden={selectedShapeId.length > 1}
                enabled={isImageUploaded}
                onClickText={() =>
                  !isTextExist && setIsTextEnteringOnFrontSide(true)
                }
                onClickChangeSize={(size) => setSize(size)}
                onClickSticker={async (sticker) => {
                  const num_of_images = shapes.map(
                    ({ type }) => type === "image"
                  ).length;

                  if (num_of_images > 10) {
                    return false;
                  }

                  try {
                    const response = await fetch(
                      `/icons/stickers/${sticker}.svg`
                    );
                    const blob = await response.blob();
                    const reader = new FileReader();
                    reader.onload = () => {
                      const image = new window.Image();
                      image.src = reader.result as string;
                      image.onload = () => {
                        setShapes([
                          ...shapes,
                          {
                            type: "image",
                            id: generateRandomId(10),
                            image,
                            width: 155.0000000000017,
                            height: 155.0000000000017,
                            x: 132.90240239540793,
                            y: 79.39955775197706,
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

                  const newShapes = [...shapes];
                  newShapes[textShapeIdx] = {
                    ...newShapes[textShapeIdx],
                    fill,
                  };

                  setShapes(newShapes);
                }}
              />
            </Else>
          </If>
        </div>
      </main>
      <TextEnteringModal
        isOpen={isTextEnteringOnFrontSide}
        maxLength={18}
        allowNewLine={false}
        onClickClose={handleClickFrontTextEnteringClose}
        onClickCheck={handleClickFrontTextEnteringCheck}
      />
      <TextEnteringModal
        isOpen={isTextEnteringOnBackSide}
        maxLength={42}
        allowNewLine
        onClickClose={handleClickBackTextEnteringClose}
        onClickCheck={handleClickBackTextEnteringCheck}
      />
    </>
  );
}
