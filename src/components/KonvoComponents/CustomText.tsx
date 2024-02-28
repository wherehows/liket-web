import { EmptyFunction } from "@/types/common";
import { StrictShapeConfig } from "@/types/konva";
import { getRefValue } from "@/utils/helpers";
import Konva from "konva";
import { useEffect, useRef } from "react";
import { Transformer, Text } from "react-konva";

interface Props {
  shapeProps: StrictShapeConfig;
  isSelected: boolean;
  onChange: (newAttrs: StrictShapeConfig) => void;
  onSelect: EmptyFunction;
  stagePos: { x: number; y: number };
}

const CustomText = ({
  shapeProps,
  isSelected,
  stagePos,
  onSelect,
  onChange,
}: Props) => {
  const textNodeRef = useRef<Konva.Text>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const { x: textPosX, y: textPosY } = shapeProps;
  const { x: stagePosX, y: stagePosY } = stagePos;

  useEffect(() => {
    if (isSelected) {
      getRefValue(trRef).nodes([getRefValue(textNodeRef)]);
      getRefValue(trRef).getLayer();
    }
  }, [isSelected]);

  // ref: https://konvajs.org/docs/sandbox/Editable_Text.html
  const handleDoubleClick = () => {
    getRefValue(textNodeRef).hide();
    getRefValue(trRef).hide();

    const areaPosition = {
      x: stagePosX + textPosX,
      y: stagePosY + textPosY,
    };

    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.focus();

    const removeTextArea = () => {
      console.log("remove 실행?");
      textarea.parentNode?.removeChild(textarea);
      getRefValue(textNodeRef).show();
      trRef.current?.show();
      trRef.current?.forceUpdate();
      window.removeEventListener("click", handleOutsideClick);
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (e.target !== textarea) {
        getRefValue(textNodeRef).text(textarea.value);
        removeTextArea();
      }
    };

    const setTextareaWidth = (newWidth: number) => {
      if (!newWidth) {
        newWidth = getRefValue(textNodeRef).fontSize();
      }

      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );
      const isFirefox =
        navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
      if (isSafari || isFirefox) {
        newWidth = Math.ceil(newWidth);
      }

      const isEdge = /Edge/.test(navigator.userAgent);

      if (isEdge) {
        newWidth += 1;
      }
      textarea.style.width = newWidth + "px";
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
    textarea.style.lineHeight = `${getRefValue(textNodeRef).lineHeight()}`;
    textarea.style.fontFamily = getRefValue(textNodeRef).fontFamily();
    textarea.style.transformOrigin = "left top";
    textarea.style.fontWeight = getRefValue(textNodeRef).fontStyle();
    textarea.style.textAlign = getRefValue(textNodeRef).align();
    textarea.style.color = getRefValue(textNodeRef).fill();
    const rotation = getRefValue(textNodeRef).rotation();
    let transform = "";
    if (rotation) {
      transform += "rotateZ(" + rotation + "deg)";
    }

    let px = 0;
    const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    if (isFirefox) {
      px += 2 + Math.round(getRefValue(textNodeRef).fontSize() / 20);
    }
    transform += "translateY(-" + px + "px)";

    textarea.style.transform = transform;

    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + 3 + "px";

    textarea.focus();

    textarea.addEventListener("keydown", function (e) {
      const scale = getRefValue(textNodeRef).getAbsoluteScale().x;
      setTextareaWidth(getRefValue(textNodeRef).width() * scale);
      textarea.style.height = "auto";
      textarea.style.height =
        textarea.scrollHeight + getRefValue(textNodeRef).fontSize() + "px";
    });

    setTimeout(() => {
      window.addEventListener("click", handleOutsideClick);
    });
  };

  return (
    <>
      <Text
        ref={textNodeRef}
        onDblClick={handleDoubleClick}
        onDblTap={handleDoubleClick}
        onTouchStart={onSelect}
        onMouseDown={onSelect}
        onClick={onSelect}
        onTap={onSelect}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
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
          boundBoxFunc={(_, newBox) => {
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default CustomText;
