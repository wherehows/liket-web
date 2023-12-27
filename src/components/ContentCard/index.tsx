import { CONTENT_STATUSType, GENRESType } from "@/utils/const";
import Image from "next/image";
import Chip from "../Chip";
import { CSSProperties } from "react";
import Like from "@/icons/like.svg";
import ActiveLike from "@/icons/like-filled.svg";
import { colors } from "@/utils/style";

interface ContentCardProps {
  status: CONTENT_STATUSType;
  genre: GENRESType;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  isLike: boolean;
}

const ChipStyle: CSSProperties = {
  position: "absolute",
  left: "8px",
  top: "8px",
};

const ContentCard = ({
  status,
  genre,
  title,
  location,
  startDate,
  endDate,
  isLike,
}: ContentCardProps) => {
  return (
    <article className="w-[164px] h-[232px]">
      <div className="relative mb-[8px]">
        <Image
          src="https://picsum.photos/seed/picsum/164/232"
          width={164}
          height={232}
          alt={`${title}에 대한 포스터`}
        />
        <Chip variant="willActive" style={ChipStyle}>
          오픈예정
        </Chip>
        <button className="absolute bottom-[8px] right-[8px]">
          {isLike ? (
            <ActiveLike color={colors.skyblue["01"]} />
          ) : (
            <Like color={colors.grey["02"]} />
          )}
        </button>
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="text-body4 text-skyblue-01">{genre}</div>
        <div className="text-body2">{title}</div>
        <div className="text-body5 text-grey-04">{location}</div>
        <div className="text-body5 text-grey-04">
          {startDate} ~ {endDate}
        </div>
      </div>
    </article>
  );
};

export default ContentCard;
