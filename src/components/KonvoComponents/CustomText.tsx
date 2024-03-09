import { EmptyFunction } from "@/types/common";
import { StrictShapeConfig } from "@/types/konva";
import { LIKET_CARD_HEIGHT, LIKET_CARD_WIDTH, colors } from "@/utils/style";
import { Text, Rect, Group } from "react-konva";

interface Props {
  shapeProps: StrictShapeConfig;
  isSelected: boolean;
  onChange: (newAttrs: StrictShapeConfig) => void;
  onSelect: EmptyFunction;
  stagePos: { x: number; y: number };
}

const RECT_HEIGHT = 42;
const PADDING_BETWEEN_TEXT_AND_BOX = 24;
const FONT_SIZE = 16;

const CustomText = ({ shapeProps, isSelected, onSelect }: Props) => {
  return (
    <>
      <Group
        x={
          +LIKET_CARD_WIDTH.replace("px", "") / 2 -
          (getPxLength(shapeProps.text) + 2 * PADDING_BETWEEN_TEXT_AND_BOX) / 2
        }
        y={+LIKET_CARD_HEIGHT.replace("px", "") / 2 - RECT_HEIGHT / 2}
        onTouchStart={onSelect}
        onMouseDown={onSelect}
        onClick={onSelect}
        onTab={onSelect}
        draggable
      >
        <Text
          text="텍스트를 입력해주세요"
          fontSize={16}
          fontFamily="AppleSDGothicNeo"
          fontStyle="bold"
          y={(RECT_HEIGHT - FONT_SIZE) / 2 + 2}
          x={PADDING_BETWEEN_TEXT_AND_BOX}
          {...shapeProps}
        />
        <Rect
          stroke={colors["skyblue"]["02"]}
          strokeWidth={isSelected ? 1 : 0}
          width={
            getPxLength(shapeProps.text) + 2 * PADDING_BETWEEN_TEXT_AND_BOX
          }
          height={RECT_HEIGHT}
        />
      </Group>
    </>
  );
};

export default CustomText;

const getPxLength = (text: string) => {
  const tempElem = document.createElement("span");
  tempElem.style.visibility = "hidden";
  tempElem.style.position = "absolute";
  tempElem.style.left = "-9999px";
  tempElem.style.top = "-9999px";
  tempElem.style.fontFamily = "AppleSDGothicNeo";
  tempElem.style.fontStyle = "bold";
  tempElem.style.fontSize = "16";
  tempElem.textContent = text;
  document.body.appendChild(tempElem);

  const width = tempElem.offsetWidth;
  document.body.removeChild(tempElem);
  return width;
};
