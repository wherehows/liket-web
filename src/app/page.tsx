import Carousel, { CAROUSEL_DUMMY } from "@/components/Carousel";
import ContentCard, {
  ApiContentCard,
  ContentCardProps,
} from "@/components/Card/ContentCard";
import ReviewCard, { REVIEW_CARDS_DUMMY } from "@/components/Card/ReviewCard";
import Divider from "@/components/Divider";
import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";
import RightArrow from "@/icons/right-arrow.svg";
import HotPlaceItem, {
  HOT_PLACE_DUMMY_1,
  HOT_PLACE_DUMMY_2,
  HOT_PLACE_DUMMY_3,
  HOT_PLACE_DUMMY_4,
  HOT_PLACE_DUMMY_5,
  HOT_PLACE_DUMMY_6,
} from "@/components/List/Hotplace";
import { colors } from "@/utils/style";
import Link from "next/link";
import CustomScrollContainer from "@/components/CustomScrollContainer";
import { getSoonOpenContents } from "@/apis/content";

export default async function Home() {
  const { contentList: soonOpenContents } = await getSoonOpenContents();

  return (
    <>
      <Header>
        <Header.LeftOption logo />
        <Header.RightOption option={{ search: true, like: true }} />
      </Header>
      <main>
        <Carousel imgs={CAROUSEL_DUMMY} />
        <section className="mb-[48px] mt-[24px]">
          <h2 className="pl-[24px] mb-[8px]">
            선선한 가을 날씨에 <span className="text-skyblue-01">#힐링</span>
            하기 좋은 곳 🍁
          </h2>
          <CustomScrollContainer className="flex flex-row gap-[8px] overflow-x-hidden overflow-y-hidden w-[100%] cursor-grab touch-action-none [&>*:last-child]:mr-[24px] [&>*:first-child]:ml-[24px]">
            {CONTENT_CARDS_DUMMY.map((data, index) => {
              return <ContentCard key={index} {...data} />;
            })}
          </CustomScrollContainer>
        </section>
        <section>
          <h2 className="pl-[24px] mb-[8px]">
            요즘 <span className="text-skyblue-01">#10대</span> Z세대가 주목하는
            곳 ✨
          </h2>
          <CustomScrollContainer className="flex flex-row gap-[8px] overflow-x-hidden overflow-y-hidden w-[100%] [&>*:last-child]:mr-[24px] [&>*:first-child]:ml-[24px]">
            {CONTENT_CARDS_DUMMY.map((data, index) => {
              return <ContentCard key={index} {...data} />;
            })}
          </CustomScrollContainer>
        </section>
        <Divider height="8px" width="100%" margin="24px 0" />
        <section>
          <div className="pl-[24px] flex flex-row mb-[8px]">
            <h2>핫플차트</h2>
            <div className="text-body5 text-grey-04 flex flex-col-reverse ml-[8px]">{`업로드 Date`}</div>
          </div>
          <CustomScrollContainer className="flex flex-row overflow-x-hidden gap-[8px] overflow-y-hidden w-[100%] [&>*:last-child]:mr-[24px] [&>*:first-child]:ml-[24px]">
            <div>
              <Link
                href="/category?type=팝업스토어&orderby=famous"
                className="flex item-center"
              >
                <div className="text-skyblue-01 text-body4">팝업 스토어</div>
                <RightArrow
                  fill={colors.skyblue["01"]}
                  style={{
                    display: "inline",
                  }}
                />
              </Link>
              <ul>
                {HOT_PLACE_DUMMY_1.map((dummy, index) => {
                  return (
                    <li className="flex my-[13px] w-[256px]" key={dummy.idx}>
                      <div className="text-numbering1 mr-[18px] center align-middle">
                        {index + 1}
                      </div>
                      <HotPlaceItem {...dummy} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Link
                href="/category?type=전시회&orderby=famous"
                className="flex item-center"
              >
                <div className="text-skyblue-01 text-body4">전시회</div>
                <RightArrow
                  fill={colors.skyblue["01"]}
                  style={{
                    display: "inline",
                  }}
                />
              </Link>
              <ul>
                {HOT_PLACE_DUMMY_2.map((dummy, index) => {
                  const { idx, thumbnail } = dummy;
                  return (
                    <li className="flex my-[13px] w-[256px]" key={dummy.idx}>
                      <div className="text-numbering1 mr-[18px] center align-middle">
                        {index + 1}
                      </div>
                      <HotPlaceItem {...dummy} thumbnail={thumbnail + idx} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Link
                href="/category?type=연극&orderby=famous"
                className="flex item-center"
              >
                <div className="text-skyblue-01 text-body4">연극</div>
                <RightArrow
                  fill={colors.skyblue["01"]}
                  style={{
                    display: "inline",
                  }}
                />
              </Link>
              <ul>
                {HOT_PLACE_DUMMY_3.map((dummy, index) => {
                  const { idx, thumbnail } = dummy;
                  return (
                    <li className="flex my-[13px] w-[256px]" key={dummy.idx}>
                      <div className="text-numbering1 mr-[18px] center align-middle">
                        {index + 1}
                      </div>
                      <HotPlaceItem {...dummy} thumbnail={thumbnail + idx} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Link
                href="/category?type=뮤지컬&orderby=famous"
                className="flex item-center"
              >
                <div className="text-skyblue-01 text-body4">뮤지컬</div>
                <RightArrow
                  fill={colors.skyblue["01"]}
                  style={{
                    display: "inline",
                  }}
                />
              </Link>
              <ul>
                {HOT_PLACE_DUMMY_4.map((dummy, index) => {
                  const { idx, thumbnail } = dummy;
                  return (
                    <li className="flex my-[13px] w-[256px]" key={dummy.idx}>
                      <div className="text-numbering1 mr-[18px] center align-middle">
                        {index + 1}
                      </div>
                      <HotPlaceItem {...dummy} thumbnail={thumbnail + idx} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Link
                href="/category?type=콘서트&orderby=famous"
                className="flex item-center"
              >
                <div className="text-skyblue-01 text-body4">콘서트</div>
                <RightArrow
                  fill={colors.skyblue["01"]}
                  style={{
                    display: "inline",
                  }}
                />
              </Link>
              <ul>
                {HOT_PLACE_DUMMY_5.map((dummy, index) => {
                  const { idx, thumbnail } = dummy;
                  return (
                    <li className="flex my-[13px] w-[256px]" key={dummy.idx}>
                      <div className="text-numbering1 mr-[18px] center align-middle">
                        {index + 1}
                      </div>
                      <HotPlaceItem {...dummy} thumbnail={thumbnail + idx} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Link
                href="/category?type=페스티벌&orderby=famous"
                className="flex item-center"
              >
                <div className="text-skyblue-01 text-body4">페스티벌</div>
                <RightArrow
                  fill={colors.skyblue["01"]}
                  style={{
                    display: "inline",
                  }}
                />
              </Link>
              <ul>
                {HOT_PLACE_DUMMY_6.map((dummy, index) => {
                  const { idx, thumbnail } = dummy;
                  return (
                    <li className="flex my-[13px] w-[256px]" key={dummy.idx}>
                      <div className="text-numbering1 mr-[18px] center align-middle">
                        {index + 1}
                      </div>
                      <HotPlaceItem {...dummy} thumbnail={thumbnail + idx} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </CustomScrollContainer>
        </section>
        <Divider height="8px" width="100%" margin="24px 0" />
        <section className="mb-[48px]">
          <h2 className="pl-[24px] mb-[8px]">오픈예정 컨텐츠</h2>
          <CustomScrollContainer className="flex flex-row gap-[8px] overflow-x-hidden overflow-y-hidden w-[100%] [&>*:last-child]:mr-[24px] [&>*:first-child]:ml-[24px]">
            {soonOpenContents.map((data, index) => {
              return (
                <ApiContentCard key={index} {...data} status="willActive" />
              );
            })}
          </CustomScrollContainer>
        </section>
        <section>
          <h2 className="pl-[24px] mb-[8px]">종료예정 컨텐츠</h2>
          <CustomScrollContainer className="flex flex-row gap-[8px] overflow-x-hidden overflow-y-hidden w-[100%] [&>*:last-child]:mr-[24px] [&>*:first-child]:ml-[24px]">
            {CONTENT_CARDS_DUMMY.map((data, index) => {
              return <ContentCard key={index} {...data} />;
            })}
          </CustomScrollContainer>
        </section>
        <Divider height="8px" width="100%" margin="24px 0" />
        <section className="mb-[24px]">
          <h2 className="pl-[24px] mb-[8px]">최근 인기 리뷰</h2>
          <CustomScrollContainer className="flex flex-row gap-[8px] overflow-x-hidden overflow-y-hidden w-[100%] [&>*:last-child]:mr-[24px] [&>*:first-child]:ml-[24px]">
            {REVIEW_CARDS_DUMMY.map((data, index) => {
              return <ReviewCard key={index} {...data} />;
            })}
          </CustomScrollContainer>
        </section>
      </main>
      <LinkableTab shadow />
    </>
  );
}
const CONTENT_CARDS_DUMMY: ContentCardProps[] = [
  {
    idx: 1,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.01.30",
    endDate: "2023.02.23",
    likeState: false,
  },
  {
    idx: 2,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.01.30",
    endDate: "2023.02.23",
    likeState: false,
  },
  {
    idx: 3,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.01.30",
    endDate: "2023.02.23",
    likeState: false,
  },
  {
    idx: 4,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.01.30",
    endDate: "2023.02.23",
    likeState: false,
  },
  {
    idx: 5,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.01.30",
    endDate: "2023.02.23",
    likeState: false,
  },
  {
    idx: 6,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.01.30",
    endDate: "2023.02.23",
    likeState: false,
  },
  {
    idx: 7,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.01.30",
    endDate: "2023.02.23",
    likeState: false,
  },
  {
    idx: 8,
    status: "active",
    genre: "연극",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.01.30",
    endDate: "2023.02.23",
    likeState: false,
  },
];
