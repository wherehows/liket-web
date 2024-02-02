import Carousel, { CAROUSEL_DUMMY } from "@/components/Carousel";
import ContentCard, {
  CONTENT_CARDS_DUMMY,
} from "@/components/Card/ContentCard";
import ReviewCard, { REVIEW_CARDS_DUMMY } from "@/components/Card/ReviewCard";
import Divider from "@/components/Divider";
import GenreTile from "@/components/GenreTile";
import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";
import { GENRES } from "@/utils/const";
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

export default function Home() {
  return (
    <>
      <Header>
        <Header.LeftOption logo />
        <Header.RightOption option={{ search: true, like: true }} />
      </Header>
      <Carousel imgs={CAROUSEL_DUMMY} />
      <section className="pl-[24px] mt-[24px]">
        <div className="flex flex-row w-[100%] justify-between overflow-x-scroll overflow-y-hidden">
          {(["전체", ...GENRES] as const).map((genre) => {
            return <GenreTile key={genre} genre={genre} />;
          })}
        </div>
      </section>
      <Divider height="8px" width="100%" margin="24px 0" />
      <section className="pl-[24px] mb-[48px]">
        <h2 className="mb-[8px]">
          선선한 가을 날씨에 <span className="text-skyblue-01">#힐링</span>하기
          좋은 곳 🍁
        </h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          {CONTENT_CARDS_DUMMY.map((data, index) => {
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
          {CONTENT_CARDS_DUMMY.map((data, index) => {
            return <ContentCard key={index} {...data} />;
          })}
        </div>
      </section>
      <Divider height="8px" width="100%" margin="24px 0" />
      <section className="pl-[24px]">
        <div className="flex flex-row mb-[8px]">
          <h2>핫플차트</h2>
          <div className="text-body5 text-grey-04 flex flex-col-reverse ml-[8px]">{`업로드 Date`}</div>
        </div>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          <div>
            <div className="flex item-center">
              <div className="text-skyblue-01 text-body4">팝업 스토어</div>
              <RightArrow
                fill={colors.skyblue["01"]}
                style={{
                  display: "inline",
                }}
              />
            </div>
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
            <div className="flex item-center">
              <div className="text-skyblue-01 text-body4">전시회</div>
              <RightArrow
                fill={colors.skyblue["01"]}
                style={{
                  display: "inline",
                }}
              />
            </div>
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
            <div className="flex item-center">
              <div className="text-skyblue-01 text-body4">연극</div>
              <RightArrow
                fill={colors.skyblue["01"]}
                style={{
                  display: "inline",
                }}
              />
            </div>
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
            <div className="flex item-center">
              <div className="text-skyblue-01 text-body4">뮤지컬</div>
              <RightArrow
                fill={colors.skyblue["01"]}
                style={{
                  display: "inline",
                }}
              />
            </div>
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
            <div className="flex item-center">
              <div className="text-skyblue-01 text-body4">콘서트</div>
              <RightArrow
                fill={colors.skyblue["01"]}
                style={{
                  display: "inline",
                }}
              />
            </div>
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
            <div className="flex item-center">
              <div className="text-skyblue-01 text-body4">페스티벌</div>
              <RightArrow
                fill={colors.skyblue["01"]}
                style={{
                  display: "inline",
                }}
              />
            </div>
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
        </div>
      </section>
      <Divider height="8px" width="100%" margin="24px 0" />
      <section className="pl-[24px] mb-[48px]">
        <h2 className="mb-[8px]">오픈 예정 컨텐츠</h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          {CONTENT_CARDS_DUMMY.map((data, index) => {
            return <ContentCard key={index} {...data} />;
          })}
        </div>
      </section>
      <section className="pl-[24px]">
        <h2 className="mb-[8px]">종료 예정 컨텐츠</h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          {CONTENT_CARDS_DUMMY.map((data, index) => {
            return <ContentCard key={index} {...data} />;
          })}
        </div>
      </section>
      <Divider height="8px" width="100%" margin="24px 0" />
      <section className="pl-[24px] mb-[24px]">
        <h2 className="mb-[8px]">최근 인기 리뷰</h2>
        <div className="flex flex-row overflow-x-scroll gap-[8px] overflow-y-hidden w-[100%]">
          {REVIEW_CARDS_DUMMY.map((data, index) => {
            return <ReviewCard key={index} {...data} />;
          })}
        </div>
      </section>
      <LinkableTab />
    </>
  );
}
