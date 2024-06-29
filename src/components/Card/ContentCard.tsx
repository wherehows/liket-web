"use client";

import Image from "next/image";
import Like from "@/icons/like.svg";
import ActiveLike from "@/icons/like-filled.svg";
import Badge from "../Badge/Badge";

import { colors } from "@/utils/style";
import Link from "next/link";
import { ContentListItem } from "@/types/content";
import { ContentStateType, GenreType } from "@/types/const";

export interface ContentCardProps {
  idx: number;
  status: ContentStateType;
  genre: GenreType;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  likeState: boolean;
}

const ContentCard = ({
  idx,
  status,
  genre,
  title,
  location,
  startDate,
  endDate,
  likeState,
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
          <Badge
            variant={status}
            style={{
              position: "absolute",
              left: "8px",
              top: "8px",
            }}
          >
            진행중
          </Badge>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="absolute bottom-[8px] right-[8px]"
          >
            {likeState ? (
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
            {startDate} - {endDate}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ContentCard;

export const ApiContentCard = ({
  idx,
  title,
  thumbnail,
  likeState,
  startDate,
  endDate,
  location,
  genre,
  status = "willActive",
}: ContentListItem) => {
  const { region1Depth, region2Depth } = location;

  return (
    <Link href={`/contents/${idx}`}>
      <article className="w-[164px]">
        <div className="relative mb-[8px]">
          <div className="relative w-[164px] h-[232px]">
            {thumbnail ? (
              <Image
                src={thumbnail}
                fill={true}
                alt={`${title}에 대한 포스터`}
              />
            ) : null}
          </div>
          <Badge
            variant={status}
            style={{
              position: "absolute",
              left: "8px",
              top: "8px",
            }}
          >
            진행중
          </Badge>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="absolute bottom-[8px] right-[8px]"
          >
            {likeState ? (
              <ActiveLike color={colors.skyblue["01"]} />
            ) : (
              <Like color={colors.grey["02"]} />
            )}
          </button>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-body4 text-skyblue-01">{genre.name}</div>
          <div className="text-body2">{title}</div>
          <div className="text-body5 text-grey-04">{`${region1Depth} ${region2Depth}`}</div>
          <div className="text-body5 text-grey-04">
            {startDate} - {endDate}
          </div>
        </div>
      </article>
    </Link>
  );
};
