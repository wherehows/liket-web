import { ReviewListItem } from "@/types/review";
import Image from "next/image";
import Link from "next/link";

interface ReviewCardProps {
  idx: number;
  profileImgPath: string;
  thumbnail: string;
  nickname: string;
  description: string;
  title: string;
}

const ReviewCard = ({
  idx,
  thumbnail,
  description,
  cultureContent: { title },
  author: { profileImgPath, nickname },
}: ReviewListItem) => {
  return (
    <Link href={`/contents/${idx}`} className="w-[164px] h-[232px]">
      <article className="w-[164px] h-[232px] relative">
        <Image
          alt={`${title} 썸네일 이미지`}
          src={thumbnail}
          layout="fill"
          style={{
            zIndex: -1,
          }}
        />
        <div className="absolute flex flex-row mt-[12px] ml-[12px]">
          <div className="relative w-[18px] h-[18px] overflow-hidden rounded-full">
            <Image
              src={profileImgPath}
              fill
              alt={`${nickname}유저의 프로필 이미지`}
            />
          </div>
          <div className="text-body2 text-white ml-[4px]">{nickname}</div>
        </div>
        <div className="absolute bottom-0 mb-[12px] ml-[12px]">
          <div className="text-body3 text-white w-[140px] line-clamp-2">
            {description}
          </div>
          <div className="text-body5 text-grey-02">{`${title} >`}</div>
        </div>
      </article>
    </Link>
  );
};

export default ReviewCard;
