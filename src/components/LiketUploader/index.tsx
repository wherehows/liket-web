"use client";

import { Layer, Text, Image, Stage, Transformer } from "react-konva";
import { RefObject, useEffect, useRef, useState } from "react";
import Konva from "konva";
import { classNames, getRefValue } from "@/utils/helpers";
import { CardSizeType } from "../WriteTab/SizeEdit";
import ReactDOM from "react-dom";

interface Props {
  shapes: Konva.ShapeConfig[];
  stageRef: RefObject<Konva.Stage>;
  size: CardSizeType;
}

const LAYOUT_SIZE = {
  SMALL:
    "bg-[url(/icons/create-54.svg)] bg-[center_193px] bg-no-repeat flex justify-center items-center w-[294px] h-[468px] rounded-[8px] border-[2px] border-solid divide-gray-01 relative",
  MEDIUM:
    "bg-[url(/icons/create-54.svg)] bg-[center_193px] bg-no-repeat flex justify-center items-center w-[294px] h-[468px] rounded-[8px] border-[2px] border-solid divide-gray-01 relative",
  LARGE:
    "bg-[url(/icons/create-54.svg)] bg-[center_193px] bg-no-repeat flex justify-center items-center w-[294px] h-[468px] rounded-[8px] border-[2px] border-solid divide-gray-01 relative",
};

const CARD_SIZE = {
  SMALL: { x: 16, y: 16, width: 294 - 32, height: 387 },
  MEDIUM: { x: 16, y: 16, width: 294 - 32, height: 468 - 32 },
  LARGE: { x: 0, y: 0, width: 294, height: 468 },
};

const LiketUploader = ({
  shapes,
  size = "LARGE",
  stageRef,
  onChangeShape,
}: Props) => {
  const [file, setFile] = useState<CanvasImageSource>();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selectedShape, setSelectedShape] = useState("");
  const { x, y, width, height } = CARD_SIZE[size];
  const onClickStage = (e) => {
    const isEmptyAreaClicked = e.target === e.target.getStage();
    const isBackgroundImageClicked = e.target.attrs.id === "bg-image";

    if (isEmptyAreaClicked || isBackgroundImageClicked) {
      setSelectedShape(" ");
    }
  };

  return (
    <div ref={wrapperRef} className={classNames(LAYOUT_SIZE[size])}>
      {file ? (
        <Stage
          ref={stageRef}
          width={294}
          height={468}
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
              alt="유저가 포토 카드에 올린 이미지"
              cornerRadius={8}
            />
            {shapes.map((shape, idx) => {
              switch (shape.type) {
                case "text": {
                  const rect = getRefValue(wrapperRef).getBoundingClientRect();

                  return (
                    <CustomText
                      key={`${shape.id}`}
                      stagePos={{
                        x: rect.left,
                        y: rect.top,
                      }}
                      isSelected={shape.id === selectedShape}
                      shapeProps={shape}
                      onSelect={() => {
                        setSelectedShape(shape.id);
                      }}
                      onChange={(newAttrs) => {
                        const newShapes = [...shapes];
                        newShapes[idx] = newAttrs;
                        onChangeShape(newShapes);
                      }}
                    />
                  );
                }
                case "image": {
                  return (
                    <CustomImage
                      key={`${shape.id}`}
                      isSelected={shape.id === selectedShape}
                      shapeProps={shape}
                      onSelect={() => {
                        setSelectedShape(shape.id);
                      }}
                      onChange={(newAttrs) => {
                        const newShapes = [...shapes];
                        newShapes[idx] = newAttrs;
                        onChangeShape(newShapes);
                      }}
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
        </>
      )}
    </div>
  );
};

export default LiketUploader;

const CustomText = ({
  shapeProps,
  isSelected,
  stagePos,
  onSelect,
  onChange,
}) => {
  const textNodeRef = useRef<Konva.Text>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const { x: textPosX, y: textPosY } = shapeProps;
  const { x: stagePosX, y: stagePosY } = stagePos;

  useEffect(() => {
    if (isSelected) {
      getRefValue(trRef).nodes([getRefValue(textNodeRef)]);
      getRefValue(trRef).getLayer();
    }
  }, [isSelected]);

  return (
    <>
      <Text
        onDblClick={() => {
          textNodeRef.current?.hide();
          trRef.current?.hide();

          var areaPosition = {
            x: stagePosX + textPosX,
            y: stagePosY + textPosY,
          };

          var textarea = document.createElement("textarea");
          document.body.appendChild(textarea);
          textarea.focus();

          const removeTextArea = () => {
            textarea.parentNode?.removeChild(textarea);
            window.removeEventListener("click", handleOutsideClick);
            getRefValue(textNodeRef)?.show();
            getRefValue(trRef)?.show();
            getRefValue(trRef)?.forceUpdate();
          };

          textarea.addEventListener("keydown", function (e) {
            if (e.keyCode === 13 && !e.shiftKey) {
              getRefValue(textNodeRef).text(textarea.value);
              removeTextArea();
            }

            if (e.keyCode === 27) {
              removeTextArea();
            }
          });

          textarea.value = getRefValue(textNodeRef).text();
          textarea.style.position = "absolute";
          textarea.style.top = areaPosition.y + "px";
          textarea.style.left = areaPosition.x + "px";
          textarea.style.width =
            getRefValue(textNodeRef).width() -
            getRefValue(textNodeRef).padding() * 2 +
            "px";
          textarea.style.height =
            getRefValue(textNodeRef).height() -
            getRefValue(textNodeRef).padding() * 2 +
            5 +
            "px";
          textarea.style.fontSize = getRefValue(textNodeRef).fontSize() + "px";
          textarea.style.border = "none";
          textarea.style.padding = "0px";
          textarea.style.margin = "0px";
          textarea.style.overflow = "hidden";
          textarea.style.background = "none";
          textarea.style.outline = "none";
          textarea.style.resize = "none";
          // textarea.style.lineHeight = getRefValue(textNodeRef).lineHeight();
          textarea.style.fontFamily = getRefValue(textNodeRef).fontFamily();
          textarea.style.transformOrigin = "left top";
          textarea.style.fontWeight = getRefValue(textNodeRef).fontStyle();
          textarea.style.textAlign = getRefValue(textNodeRef).align();
          textarea.style.color = getRefValue(textNodeRef).fill();
          // rotation = getRefValue(textNodeRef).rotation();

          textarea.addEventListener("keydown", function (e) {
            const scale = getRefValue(textNodeRef).getAbsoluteScale().x;
            setTextareaWidth(getRefValue(textNodeRef).width() * scale);
            textarea.style.height = "auto";
            textarea.style.height =
              textarea.scrollHeight +
              getRefValue(textNodeRef).fontSize() +
              "px";
          });

          function setTextareaWidth(newWidth) {
            // some extra fixes on different browsers
            var isSafari = /^((?!chrome|android).)*safari/i.test(
              navigator.userAgent
            );
            var isFirefox =
              navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
            if (isSafari || isFirefox) {
              newWidth = Math.ceil(newWidth);
            }

            var isEdge = /Edge/.test(navigator.userAgent);
            if (isEdge) {
              newWidth += 1;
            }
            textarea.style.width = newWidth + "px";
          }

          function handleOutsideClick(e) {
            if (e.target !== textarea) {
              getRefValue(textNodeRef).text(textarea.value);
              removeTextArea();
            }
          }

          setTimeout(() => {
            window.addEventListener("click", handleOutsideClick);
          });
        }}
        onDblTap={() => {}}
        onTouchStart={() => onSelect()}
        onMouseDown={() => onSelect()}
        onClick={onSelect}
        onTap={onSelect}
        ref={textNodeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = getRefValue(textNodeRef);
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width > 200) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const CustomImage = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const imageRef = useRef<Konva.Image>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const { x, y, width, height, image } = shapeProps;

  useEffect(() => {
    if (isSelected) {
      getRefValue(trRef).nodes([getRefValue(imageRef)]);
      getRefValue(trRef).getLayer();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        onTouchStart={() => onSelect()}
        onMouseDown={() => onSelect()}
        image={image}
        x={x}
        y={y}
        width={width}
        height={height}
        onClick={onSelect}
        onTap={onSelect}
        ref={imageRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = getRefValue(imageRef);
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width > 200) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};
