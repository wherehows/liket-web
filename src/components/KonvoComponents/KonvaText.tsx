import { EmptyFunction } from "@/types/common";
import { StrictShapeConfig } from "@/types/konva";
import {
  getXPos,
  yPos,
  RECT_HEIGHT,
  FONT_SIZE,
  PADDING_BETWEEN_TEXT_AND_BOX,
} from "@/utils/create-liket";
import { getPxLength } from "@/utils/helper";
import { colors } from "@/utils/style";
import { Text, Rect, Group } from "react-konva";

interface Props {
  shapeProps: StrictShapeConfig;
  isSelected: boolean;
  onChange: (newAttrs: StrictShapeConfig) => void;
  onSelect: EmptyFunction;
  stagePos: { x: number; y: number };
}

const KonvaText = ({ shapeProps, isSelected, onSelect, onChange }: Props) => {
  return (
    <>
      <Group
        draggable
        x={getXPos(shapeProps.text)}
        y={yPos}
        onTouchStart={onSelect}
        onMouseDown={onSelect}
        onClick={onSelect}
        onTab={onSelect}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            // x: e.target.x(),
            // y: e.target.y(),
          });
        }}
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

export default KonvaText;
