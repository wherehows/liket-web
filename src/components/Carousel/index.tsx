"use client";

import useStateRef from "@/hooks/useRefState";
import { getTouchEventData } from "@/utils/dom";
import { classNames, getRefValue } from "@/utils/helpers";
import Image from "next/image";
import { useRef, useState } from "react";

const MIN_SWIPE_REQUIRED = 40;

interface CarouselProps {
  imgs: string[];
}

export const CAROUSEL_DUMMY = [
  "https://picsum.photos/id/44/1000/1000",
  "https://picsum.photos/id/75/1000/1000",
  "https://picsum.photos/id/38/1000/1000",
  "https://picsum.photos/id/47/1000/1000",
];

const Carousel = ({ imgs }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const startXRef = useRef(0);
  const priorOffsetXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(priorOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX =
      getRefValue(containerRef).offsetWidth -
      getRefValue(containerRef).scrollWidth;

    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };

  const handleTouchEnd = () => {
    const currentOffsetX = getRefValue(priorOffsetXRef);
    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

    const containerWidth = getRefValue(containerRef).offsetWidth;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIndex(Math.abs(newOffsetX / containerWidth));

    window.removeEventListener("touchend", handleTouchEnd);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("mouseup", handleTouchEnd);
    window.removeEventListener("mousemove", handleTouchMove);
  };

  const handleTouchStart = (
    e: React.TouchEvent<HTMLElement> | React.MouseEvent<HTMLElement>
  ) => {
    setIsSwiping(true);
    startXRef.current = getTouchEventData(e).clientX;
    priorOffsetXRef.current = offsetX;

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mousemove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("mouseup", handleTouchEnd);
  };

  const handleClickControl = (index: number) => {
    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    setCurrentIndex(index);
    setOffsetX(-(containerWidth * index));
  };

  return (
    <div className="relative w-[100%]">
      <section
        role="group"
        aria-label="carousel"
        className="w-[100%] max-w-[100%] overflow-hidden touch-pan-x"
        onTouchStart={handleTouchStart}
        onMouseDown={handleTouchStart}
      >
        <div
          ref={containerRef}
          role="group"
          aria-label="slide"
          style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
          className={classNames(
            "flex flex-row",
            isSwiping
              ? "transition-none"
              : "transition-transform duration-300 ease-out"
          )}
        >
          {imgs.map((img, index) => {
            return (
              <Image
                key={index}
                src={img}
                width={390}
                style={{
                  width: "100%",
                  height: "280px",
                }}
                height={280}
                alt="테스트 이미지"
                loading="eager"
                draggable={false}
                className="select-none shrink-0"
              />
            );
          })}
        </div>
        <div
          className="flex gap-[8px] absolute bottom-[16px] left-[50%] translate-x-[-50%]"
          role="group"
          aria-label="slide controls"
        >
          {imgs.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClickControl(index)}
                className={classNames(
                  "w-[8px] h-[8px] rounded-[50%]",
                  currentIndex === index ? "bg-skyblue-01" : "bg-grey-01"
                )}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Carousel;
