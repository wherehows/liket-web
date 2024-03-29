"use client";

import { Layer, Image, Stage } from "react-konva";
import { RefObject, useEffect, useRef, useState } from "react";
import Konva from "konva";
import { getRefValue } from "@/utils/helpers";
import { CardSizeType } from "../WriteTab/SizeEdit";
import { KonvaEventObject } from "konva/lib/Node";
import CustomText from "../KonvoComponents/CustomText";
import CustomImage from "../KonvoComponents/CustomImage";
import { EmptyFunction } from "@/types/common";
import { StrictShapeConfig } from "@/types/konva";

interface Props {
  selectedShapeId: string;
  shapes: StrictShapeConfig[];
  stageRef: RefObject<Konva.Stage>;
  size: CardSizeType;
  onSelectShape: (shapeId: string) => void;
  onChangeShape: (shapes: StrictShapeConfig[]) => void;
  onUploadImage: EmptyFunction;
}

const LiketUploader = ({
  shapes,
  size = "LARGE",
  stageRef,
  selectedShapeId,
  onSelectShape,
  onChangeShape,
  onUploadImage,
}: Props) => {
  const [file, setFile] = useState<CanvasImageSource>();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { x, y, width, height } = BACKGROUND_CARD_SIZES[size];

  const onClickStage = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    const isEmptyAreaClicked = e.target === e.target.getStage();
    const isBackgroundImageClicked = e.target.attrs.id === "bg-image";

    if (isEmptyAreaClicked || isBackgroundImageClicked) {
      onSelectShape(" ");
    }
  };

  const onChange = (newAttrs: StrictShapeConfig, idx: number) => {
    const newShapes = [...shapes];
    newShapes[idx] = newAttrs;
    onChangeShape(newShapes);
  };

  const handleSelectItem = (id: string) => {
    onSelectShape(id);
  };

  useEffect(() => {
    const handleClickOutSideOfStage = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement)?.tagName !== "CANVAS" &&
        (e.target as HTMLElement)?.tagName !== "TEXTAREA"
      ) {
        onSelectShape(" ");
      }
    };

    window.addEventListener("click", handleClickOutSideOfStage);
    return () => window.removeEventListener("click", handleClickOutSideOfStage);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="liket-card center bg-[url(/icons/create-54.svg)] bg-[center_193px] bg-no-repeat"
    >
      {file ? (
        <Stage
          ref={stageRef}
          width={STAGE_SIZE.WIDTH}
          height={STAGE_SIZE.HEIGHT}
          onMouseDown={onClickStage}
          onTouchStart={onClickStage}
        >
          <Layer>
            <Image
              id="bg-image"
              image={file}
              x={x}
              y={y}
              width={width}
              height={height}
              objectFit="contain"
              alt="유저가 포토 카드에 올린 배경 이미지"
              cornerRadius={8}
            />
            {shapes.map((shape, idx) => {
              const { id, type } = shape;

              switch (type) {
                case "text": {
                  const rect = getRefValue(wrapperRef).getBoundingClientRect();

                  return (
                    <CustomText
                      key={id}
                      stagePos={{
                        x: rect.left,
                        y: rect.top,
                      }}
                      isSelected={id === selectedShapeId}
                      shapeProps={shape}
                      onSelect={() => handleSelectItem(id)}
                      onChange={(newAttrs: StrictShapeConfig) =>
                        onChange(newAttrs, idx)
                      }
                    />
                  );
                }
                case "image": {
                  return (
                    <CustomImage
                      key={id}
                      isSelected={id === selectedShapeId}
                      shapeProps={shape}
                      onSelect={() => handleSelectItem(id)}
                      onChange={(newAttrs: StrictShapeConfig) =>
                        onChange(newAttrs, idx)
                      }
                    />
                  );
                }
              }
            })}
          </Layer>
        </Stage>
      ) : (
        <>
          <label
            htmlFor="image-uploader"
            className="center text-center text-body5 text-grey-02 mt-[110px] cursor-pointer w-[100%] h-[100%]"
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
                image.src = reader.result as string;
                image.onload = () => {
                  setFile(image);
                  onUploadImage();
                };
              };

              reader.readAsDataURL(file);
            }}
          />
        </>
      )}
    </div>
  );
};

export default LiketUploader;

const PADDING_BETWEEN_STAGE = 16;

const STAGE_SIZE = {
  WIDTH: 294,
  HEIGHT: 468,
};

const BACKGROUND_CARD_SIZES = {
  SMALL: {
    x: PADDING_BETWEEN_STAGE,
    y: PADDING_BETWEEN_STAGE,
    width: STAGE_SIZE.WIDTH - PADDING_BETWEEN_STAGE * 2,
    height: STAGE_SIZE.HEIGHT - 81,
  },
  MEDIUM: {
    x: PADDING_BETWEEN_STAGE,
    y: PADDING_BETWEEN_STAGE,
    width: STAGE_SIZE.WIDTH - PADDING_BETWEEN_STAGE * 2,
    height: STAGE_SIZE.HEIGHT - PADDING_BETWEEN_STAGE * 2,
  },
  LARGE: { x: 0, y: 0, width: STAGE_SIZE.WIDTH, height: STAGE_SIZE.HEIGHT },
};
