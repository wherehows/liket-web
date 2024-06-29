import Image from "next/image";
import Link from "next/link";
import CustomImage from "./CustomImage";

export interface HotPlaceItemProps {
  idx: number;
  title: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
}

const HotPlaceListItem = ({
  idx,
  title,
  thumbnail,
  startDate,
  endDate,
}: HotPlaceItemProps) => (
  <Link href={`/contents/${idx}`}>
    <div className="flex flex-row">
      <div className="w-[48px] h-[48px] relative shrink-0">
        <CustomImage src={thumbnail} alt={`${title} thumbnail`} />
      </div>
      <div className="flex flex-col justify-around ml-[12px]">
        <div className="text-body2 w-[150px] overflow-hidden truncate">
          {title}
        </div>
        <div className="text-body5 text-grey-04">
          {startDate} ~ {endDate}
        </div>
      </div>
    </div>
  </Link>
);

export default HotPlaceListItem;
