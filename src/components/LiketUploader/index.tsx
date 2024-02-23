"use client";

import { Layer, Image, Stage } from "react-konva";
import { useRef, useState } from "react";
import Konva from "konva";

interface Props {
  shapes: Konva.ShapeConfig[];
}

const LiketUploader = ({ shapes }: Props) => {
  const [file, setFile] = useState<CanvasImageSource>();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {file ? (
        <Stage width={294} height={468}>
          <Layer>
            <Image
              image={file}
              width={294}
              height={468}
              objectFit="contain"
              alt="유저가 포토 카드에 올린 이미지"
              cornerRadius={8}
            />
            {shapes.map((shape) => {
              switch (shape.type) {
                case "image": {
                  console.log("이미지첨부");
                  return (
                    <Image
                      draggable
                      image={shape.image}
                      x={0}
                      y={0}
                      width={80}
                      height={80}
                    />
                  );
                }
              }
            })}
          </Layer>
        </Stage>
      ) : (
        <div className="bg-[url(/icons/create-54.svg)] bg-[center_193px] bg-no-repeat flex justify-center items-center w-[294px] h-[468px] rounded-[8px] border-[2px] border-solid divide-gray-01 relative">
          <label
            htmlFor="image-uploader"
            className="text-center text-body5 text-grey-02 mt-[110px] cursor-pointer"
          >
            이미지를 추가해
            <br />
            나만의 티켓을 만들어보세요.
          </label>
          <input
            id="image-uploader"
            ref={inputRef}
            accept="image/*"
            type="file"
            hidden
            onChange={(e) => {
              const files = e.target.files;

              if (!files) {
                return;
              }

              const file = files[0];

              const reader = new FileReader();
              reader.onload = () => {
                const image = new window.Image();
                image.src = reader.result;
                image.onload = () => {
                  setFile(image);
                };
              };
              reader.readAsDataURL(file);
            }}
          />
        </div>
      )}
    </>
  );
};

export default LiketUploader;
