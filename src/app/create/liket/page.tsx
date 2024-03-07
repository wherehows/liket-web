"use client";

import Divider from "@/components/Divider";
import FrontBackSwitch from "@/components/FrontBackSwitch";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import WriteTab from "@/components/WriteTab";
import { CardSizeType } from "@/components/WriteTab/SizeEdit";
import { StrictShapeConfig } from "@/types/konva";
import { classNames, generateRandomId } from "@/utils/helpers";
import { colors } from "@/utils/style";
import { Stage } from "konva/lib/Stage";
import dynamic from "next/dynamic";
import Image from "next/image";
import SampleQR from "@/icons/sample-qr.svg";
import { useRef, useState } from "react";
import CircleCross from "@/icons/circle-cross.svg";

const NoSSRLiketUploader = dynamic(() => import("@/components/LiketUploader"), {
  ssr: false,
});

export default function Page() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isFront, setIsFront] = useState(true);
  const [selectedShapeId, setSelectedShapeId] = useState(" ");
  const [shapes, setShapes] = useState<StrictShapeConfig[]>([]);
  const [size, setSize] = useState<CardSizeType>("LARGE");
  const stageRef = useRef<Stage>(null);
  const handleClickRemoveItem = () => {
    const newShapes = shapes.filter(({ id }) => id !== selectedShapeId);
    setShapes(newShapes);
  };

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
      <main>
        <div className="center mt-[36px] mb-[24px]">
          <FrontBackSwitch
            isFront={isFront}
            onClickSwitch={() => setIsFront(!isFront)}
          />
        </div>
        <div
          className={classNames(
            "liket-card flex-col mx-auto p-[16px]",
            isFront && "hidden"
          )}
        >
          <div className="flex items-center">
            <div className="relative w-[14px] h-[14px] overflow-hidden rounded-full">
              <Image
                src="https://picsum.photos/seed/picsum/14/14"
                alt="프로필 이미지"
                fill
                sizes="14"
              />
            </div>
            <div className="ml-[4px] text-grey-02">jjjuuu_a</div>
          </div>
          <div className="relative h-[80px] center border-y-[1px] border-solid border-y-grey-01">
            <div className="absolute top-[13px] left-0 text-caption text-grey-04">
              컨텐츠
            </div>
            <div className="text-body-01">성수 디올 팝업 스토어</div>
          </div>
          <div className="flex items-center h-[40px]">
            <div className="text-caption text-grey-04">장르</div>
            <div className="ml-[16px] text-body3">팝업스토어</div>
          </div>
          <div className="flex items-center h-[40px] border-y-[1px] border-solid border-y-grey-01">
            <div className="text-caption text-grey-04">위치</div>
            <div className="ml-[16px] text-body3">
              서울특별시 성동구 연무장5길 7
            </div>
          </div>
          <div className="flex items-center h-[40px]">
            <div className="flex items-center w-[131px]">
              <div className="text-caption text-grey-04">날짜</div>
              <time dateTime="2023.09.09" className="ml-[16px] text-body3">
                2023.09.09
              </time>
            </div>
            <Divider width="1px" height="8px" orientation="vertical" />
            <div className="flex items-center w-[131px]">
              <div className="text-caption text-grey-04 ml-[17px]">시간</div>
              <div className="ml-[16px] text-body3">19:20</div>
            </div>
          </div>
          <div className="flex items-center h-[40px] border-y-[1px] border-solid border-y-grey-01">
            <div className="text-caption text-grey-04">평점</div>
            <div className="ml-[16px] w-[131px]">
              <StarRating
                readOnly
                value={3}
                inactiveFillColor={colors.grey["02"]}
              />
            </div>
          </div>
          <div id="one-line-comment" className="mt-[13px]">
            <div className="flex justify-between">
              <div className="text-caption text-grey-04">한줄평</div>
              <div className="text-numbering3 text-grey-04">27 / 42</div>
            </div>
            <div className="w-[100%] text-center mt-[18px] text-body3">
              낮엔 되게 비싸보이는데 <br /> 밤엔 엄청 비싸보이는 다올
            </div>
          </div>
          <div className="absolute left-0 bottom-0 mb-[16px] ml-[16px]">
            로고
          </div>
          <div className="absolute right-0 bottom-0 mb-[16px] mr-[16px]">
            <SampleQR />
          </div>
        </div>
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
          {selectedShapeId.length > 1 && (
            <button
              className="absolute bottom-[34px] left-1/2 transform -translate-x-1/2"
              onClick={handleClickRemoveItem}
            >
              <CircleCross />
            </button>
          )}
          <WriteTab
            hidden={selectedShapeId.length > 1}
            enabled={isImageUploaded}
            onClickChangeSize={(size) => setSize(size)}
            onClickSticker={async (sticker) => {
              const num_of_images = shapes.map(
                ({ type }) => type === "image"
              ).length;

              if (num_of_images > 10) {
                return false;
              }

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
                        type: "image",
                        id: generateRandomId(10),
                        image,
                        width: 80,
                        height: 80,
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
                    type: "text",
                    id: generateRandomId(10),
                    fill,
                    text: "텍스트를 입력해주세요",
                  },
                ]);
              }
            }}
          />
        </div>
      </main>
    </>
  );
}
