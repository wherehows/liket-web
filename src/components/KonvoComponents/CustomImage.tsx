import { EmptyFunction } from "@/types/common";
import { StrictShapeConfig } from "@/types/konva";
import { getRefValue } from "@/utils/helpers";
import Konva from "konva";
import { useEffect, useRef } from "react";
import { Transformer, Image } from "react-konva";

interface Props {
  shapeProps: StrictShapeConfig;
  isSelected: boolean;
  onChange: (newAttrs: StrictShapeConfig) => void;
  onSelect: EmptyFunction;
}

const CustomImage = ({ shapeProps, isSelected, onSelect, onChange }: Props) => {
  const imageRef = useRef<Konva.Image>(null);
  const trRef = useRef<Konva.Transformer>(null);

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
        image={shapeProps.image}
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
        onTransformEnd={() => {
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
          boundBoxFunc={(_, newBox) => {
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default CustomImage;
