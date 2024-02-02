import { CONTENT_STATUSType, GENRESType } from "@/utils/const";
import Image from "next/image";
import Chip from "../Chip";
import { CSSProperties } from "react";
import Like from "@/icons/like.svg";
import ActiveLike from "@/icons/like-filled.svg";
import { colors } from "@/utils/style";
import Link from "next/link";

interface ContentCardProps {
  idx: number;
  status: CONTENT_STATUSType;
  genre: GENRESType;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  isLike: boolean;
}

export const CONTENT_CARDS_DUMMY: ContentCardProps[] = [
  {
    idx: 1,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    idx: 2,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    idx: 3,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    idx: 4,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    idx: 5,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    idx: 6,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    idx: 7,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    idx: 8,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
];

const ChipStyle: CSSProperties = {
  position: "absolute",
  left: "8px",
  top: "8px",
};

const ContentCard = ({
  idx,
  status,
  genre,
  title,
  location,
  startDate,
  endDate,
  isLike,
}: ContentCardProps) => {
  return (
    <Link href={`/contents/${idx}`}>
      <article className="w-[164px]">
        <div className="relative mb-[8px]">
          <div className="relative w-[164px] h-[232px]">
            <Image
              src="https://picsum.photos/seed/picsum/164/232"
              fill={true}
              alt={`${title}에 대한 포스터`}
            />
          </div>
          <Chip variant={status} style={ChipStyle}>
            진행중
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
    </Link>
  );
};

export default ContentCard;
