"use client";

import FrontBackSwitch from "@/components/FrontBackSwitch";
import Header from "@/components/Header";
import LiketUploader from "@/components/LiketUploader";
import WriteTab from "@/components/WriteTab";
import { CardSizeType } from "@/components/WriteTab/SizeEdit";
import { getRefValue } from "@/utils/helpers";
import { TypographyScale } from "@/utils/style";
import Konva from "konva";
import { useRef, useState } from "react";

export default function Page() {
  const [shapes, setShapes] = useState<Konva.ShapeConfig[]>([]);
  const [size, setSize] = useState<CardSizeType>("LARGE");
  const [text, setText] = useState<Konva.TextConfig>({
    text: "텍스트를 입력해주세요",
    x: 0,
    y: 0,
    fontSize: 16,
    lineHeight: 20,
    width: 147,
    fill: "color",
    fontFamily: "AppleSDGothicNeo",
    fontStyle: "bold",
  });
  const stageRef = useRef<Konva.Stage>(null);

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
                const dataURL = getRefValue(stageRef).toDataURL();
                const link = document.createElement("a");
                link.download = "edited_image.png";
                link.href = dataURL;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              },
            },
          }}
        />
      </Header>
      <div className="center mt-[36px] mb-[24px]">
        <FrontBackSwitch />
      </div>
      <div className="mx-auto">
        <LiketUploader
          stageRef={stageRef}
          size={size}
          shapes={shapes}
          onChangeShape={(newShapes) => {
            setShapes(newShapes);
          }}
        />
      </div>
      <WriteTab
        enabled={true}
        onClickChangeSize={(size) => setSize(size)}
        onClickSticker={(sticker) => {
          fetch(`/icons/${sticker}.svg`)
            .then((response) => response.blob())
            .then((blob) => {
              const reader = new FileReader();
              reader.onload = () => {
                const image = new window.Image();
                image.src = reader.result as string;
                image.onload = () => {
                  setShapes([
                    ...shapes,
                    {
                      id: getRandomId(9),
                      type: "image",
                      image,
                      x: 0,
                      y: 0,
                      width: 80,
                      height: 80,
                    },
                  ]);
                };
              };
              reader.readAsDataURL(blob);
            })
            .catch((error) => {
              console.error("Error fetching sticker:", error);
            });
        }}
        onClickColor={(color) => {
          const textShapeIdx = shapes.findIndex(({ type }) => type === "text");
          if (textShapeIdx > -1) {
            const newShapes = [...shapes];
            newShapes[textShapeIdx] = {
              ...newShapes[textShapeIdx],
              fill: color,
            };
            setShapes(newShapes);
          } else {
            setShapes([
              ...shapes,
              {
                id: getRandomId(9),
                type: "text",
                text: "텍스트를 입력해주세요",
                x: 0,
                y: 0,
                fontSize: 16,
                lineHeight: 2,
                width: 147,
                fill: color,
                fontFamily: "AppleSDGothicNeo",
                fontStyle: "bold",
              },
            ]);
          }
        }}
      />
    </>
  );
}

const getRandomId = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let randomId = "";
  for (let i = 0; i < length; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return randomId;
};
