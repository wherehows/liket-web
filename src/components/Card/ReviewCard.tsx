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

export const REVIEW_CARDS_DUMMY: ReviewCardProps[] = [
  {
    idx: 1,
    title: "성수 디올 팝업 스토어",
    profileImgPath: "https://picsum.photos/seed/picsum/390/280",
    thumbnail: "https://picsum.photos/seed/picsum/390/280",
    nickname: "yhkim.dev",
    description:
      "엄청나게 긴 문자열을 쓰는 경우에 어떻게 되는가에 대해서 궁금합니다.",
  },
  {
    idx: 2,
    title: "성수 디올 팝업 스토어",
    profileImgPath: "https://picsum.photos/seed/picsum/390/280",
    thumbnail: "https://picsum.photos/seed/picsum/390/280",
    nickname: "yhkim.dev",
    description:
      "엄청나게 긴 문자열을 쓰는 경우에 어떻게 되는가에 대해서 궁금합니다.",
  },
  {
    idx: 3,
    title: "성수 디올 팝업 스토어",
    profileImgPath: "https://picsum.photos/seed/picsum/390/280",
    thumbnail: "https://picsum.photos/seed/picsum/390/280",
    nickname: "yhkim.dev",
    description:
      "엄청나게 긴 문자열을 쓰는 경우에 어떻게 되는가에 대해서 궁금합니다.",
  },
  {
    idx: 4,
    title: "성수 디올 팝업 스토어",
    profileImgPath: "https://picsum.photos/seed/picsum/390/280",
    thumbnail: "https://picsum.photos/seed/picsum/390/280",
    nickname: "yhkim.dev",
    description:
      "엄청나게 긴 문자열을 쓰는 경우에 어떻게 되는가에 대해서 궁금합니다.",
  },
  {
    idx: 5,
    title: "성수 디올 팝업 스토어",
    profileImgPath: "https://picsum.photos/seed/picsum/390/280",
    thumbnail: "https://picsum.photos/seed/picsum/390/280",
    nickname: "yhkim.dev",
    description:
      "엄청나게 긴 문자열을 쓰는 경우에 어떻게 되는가에 대해서 궁금합니다.",
  },
  {
    idx: 6,
    title: "성수 디올 팝업 스토어",
    profileImgPath: "https://picsum.photos/seed/picsum/390/280",
    thumbnail: "https://picsum.photos/seed/picsum/390/280",
    nickname: "yhkim.dev",
    description:
      "엄청나게 긴 문자열을 쓰는 경우에 어떻게 되는가에 대해서 궁금합니다.",
  },
];

const ReviewCard = ({
  idx,
  profileImgPath,
  nickname,
  thumbnail,
  description,
  title,
}: ReviewCardProps) => {
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
