"use client";

import FrontBackSwitch from "@/components/FrontBackSwitch";
import Header from "@/components/Header";
import LiketUploader from "@/components/LiketUploader";
import WriteTab from "@/components/WriteTab";
import Konva from "konva";
import { useState } from "react";

export default function Page() {
  const [shapes, setShapes] = useState<Konva.ShapeConfig[]>([]);

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
              disabled: true,
            },
          }}
        />
      </Header>
      <div className="center mt-[36px] mb-[24px]">
        <FrontBackSwitch />
      </div>
      <div className="mx-auto">
        <LiketUploader shapes={shapes} />
      </div>
      <WriteTab
        enabled={true}
        onClickChangeSize={(size) => {}}
        onClickSticker={(sticker) => {
          console.log(sticker);
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
                      type: "image",
                      image,
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
        onClickColor={(color) => {}}
      />
    </>
  );
}
