import Carousel from "@/components/Carousel";
import ContentCard, { ContentCardProps } from "@/components/ContentCard";
import Divider from "@/components/Divider";
import GenreTile from "@/components/GenreTile";
import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";
import { GENRES } from "@/utils/const";

export default function Home() {
  return (
    <>
      <Header>
        <Header.LeftOption logo />
        <Header.RightOption option={{ search: true, like: true }} />
      </Header>
      <Carousel imgs={imgs} />
      <section className="pl-[24px] mt-[24px]">
        <div className="flex flex-row w-[100%] justify-between overflow-x-scroll overflow-y-hidden">
          {(["전체", ...GENRES] as const).map((genre) => {
            return <GenreTile key={genre} genre={genre} />;
          })}
        </div>
      </section>
      <Divider height="8px" width="100%" margin="24px 0" />
      <section className="pl-[24px] mb-[48px]">
        <h2>
          선선한 가을 날씨에 <span className="text-skyblue-01">#힐링</span>하기
          좋은 곳 🍁
        </h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          {CONTENT_CARDS.map((data, index) => {
            return <ContentCard key={index} {...data} />;
          })}
        </div>
      </section>
      <section className="pl-[24px]">
        <h2>
          요즘 <span className="text-skyblue-01">#10대</span> Z세대가 주목하는
          곳 ✨
        </h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          {CONTENT_CARDS.map((data, index) => {
            return <ContentCard key={index} {...data} />;
          })}
        </div>
      </section>
      <Divider height="8px" width="100%" margin="24px 0" />
      <section className="pl-[24px]">
        <h2>핫플차트</h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          To be insterted
        </div>
      </section>
      <Divider height="8px" width="100%" margin="24px 0" />
      <section className="pl-[24px] mb-[48px]">
        <h2>오픈 예정 컨텐츠</h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          {CONTENT_CARDS.map((data, index) => {
            return <ContentCard key={index} {...data} />;
          })}
        </div>
      </section>
      <section className="pl-[24px]">
        <h2>종료 예정 컨텐츠</h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          {CONTENT_CARDS.map((data, index) => {
            return <ContentCard key={index} {...data} />;
          })}
        </div>
      </section>
      <Divider height="8px" width="100%" margin="24px 0" />
      <section className="pl-[24px] mb-[24px]">
        <h2>이번 주 인기 리뷰</h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          To be insterted
        </div>
      </section>
      <LinkableTab />
    </>
  );
}

const imgs = [
  "https://picsum.photos/seed/picsum/390/280",
  "https://picsum.photos/seed/picsum/390/280",
  "https://picsum.photos/seed/picsum/390/280",
  "https://picsum.photos/seed/picsum/390/280",
];

const CONTENT_CARDS: ContentCardProps[] = [
  {
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
  {
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023-01-30",
    endDate: "2023-02-23",
    isLike: false,
  },
];
