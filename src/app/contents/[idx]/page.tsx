"use client";

import Badge from "@/components/Badge/Badge";
import Carousel, { CAROUSEL_DUMMY } from "@/components/Carousel";
import CategoryTab from "@/components/CategoryTab";
import Divider from "@/components/Divider";
import Header from "@/components/Header";
import Like from "@/icons/like.svg";
import { colors } from "@/utils/style";
import Link from "next/link";
import { useState } from "react";
import SignificantIcon from "@/icons/significant.svg";
import RightArrowIcon from "@/icons/right-arrow.svg";
import BottomArrowIcon from "@/icons/down-arrow-small-24.svg";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import ThumbIcon from "@/icons/thumb.svg";
interface PageProps {
  params: {
    idx: string;
  };
}

export default function Page({ params: { idx } }: PageProps) {
  const [selectedTab, setSelectedTab] = useState("상세정보");

  return (
    <>
      <Header>
        <Header.LeftOption
          option={{
            back: {
              onClick: () => {},
            },
          }}
        />
        <Header.RightOption
          option={{
            search: {
              onClick: () => {},
            },
          }}
        />
      </Header>
      <main>
        <Carousel imgs={CAROUSEL_DUMMY} />
        <div className="px-[24px] py-[24px]">
          <Badge variant="active">진행중</Badge>
          <div className="mt-[16px]">
            <div className="flex justify-between">
              <div>
                <h1 className="mb-[4px]">성수 디올 팝업스토어</h1>
                <div className="text-body5 text-grey-04 mt-[4px]">
                  #팝업 #성수동 #포토존 #20대
                </div>
              </div>
              <button>
                <Like fill={colors["grey"]["02"]} />
                <div className="text-skyblue-01 text-numbering2">234</div>
              </button>
            </div>
            <div className="mt-[16px]">
              <div className="text-body3">2023.08.01 - 09.10</div>
              <div className="text-body3">
                월-금 12:00-20:00 토-일 11:00-20:00
              </div>
              <div className="text-body3">서울특별시 성동구 연무장5길 7</div>
              <Link
                href="https://www.dior.com/ko_kr/fashion"
                className="text-skyblue-01 text-body3"
              >
                https://www.dior.com/ko_kr/fashion
              </Link>
              <div className="mt-[8px]">
                <SignificantIcon />
              </div>
            </div>
          </div>
        </div>
        <Divider width="100%" height="8px" />
        <CategoryTab
          small={false}
          list={["상세정보", "리뷰 21"]}
          selectedTab={selectedTab}
          onClickTab={(selectedTab) => setSelectedTab(selectedTab)}
          wrapperStyle={{
            marginTop: "8px",
          }}
        />
        {selectedTab === "상세정보" ? (
          <>
            <div className="py-[16px] px-[24px] whitespace-pre-wrap w-[100%] text-center text-body3">
              {
                "서울에서 만나는 디올의 특별한 컨셉 스토어 \n\n DIOR SEONGSU에서 펼쳐지는\n매혹적인 홀리데이 시즌을 경험해보세요.\n 주중 | DIOR SEONGSU 앱을 통해 방문 예약 \n 또는 현장 접수 가능\n 주말 | 현장 접수만 가능\n 12월 예약 서비스는 12월 4일 오후 12시에 오픈되오니, 많은 관심 부탁드립니다."
              }
            </div>
            <Divider width="100%" height="8px" />
            <div className="px-[24px] py-[24px] flex-col relative">
              <div className="text-h2">위치</div>
              <div className="text-grey-04 text-body5 mt-[7px] mb-[4px]">
                서울특별시 성동구 연무장5길 7
              </div>
              <div className="h-[171px] w-[100%] bg-grey-02"></div>
              <button className="center absolute right-[24px] bottom-0 text-button4 text-skyblue-03">
                카카오맵에서 길찾기
                <RightArrowIcon fill={colors["skyblue"]["03"]} />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center mt-[16px] mb-[24px] justify-between">
              <div>
                <StarRating value={4} readOnly />
              </div>
              <div className="text-numbering1 mt-[16px]">
                4.0 <span className="text-grey-02">/ 5.0</span>
              </div>
            </div>
            <Divider width="100%" height="8px" />

            <div className="mt-[8px]">
              <button className="flex text-button3 justify-end w-[100%] pr-[24px]">
                최신순
                <BottomArrowIcon />
              </button>
              <ul>
                {[1, 2, 3, 4, 5].map((tempId) => {
                  return (
                    <li
                      key={tempId}
                      className="border-solid border-b-[1px] border-grey-01"
                    >
                      <div className="px-[24px] py-[16px]">
                        <div className="flex justify-between">
                          <div className="flex mb-[8px]">
                            <div className="w-[18px] h-[18px] mr-[4px] rounded-full relative overflow-hidden">
                              <Image
                                src={"/icons/default-avatar.svg"}
                                alt="아바타 이미지"
                                fill
                                objectFit="cover"
                              />
                            </div>
                            <div className="text-body2">jjjuuu_a</div>
                          </div>
                          <button className="text-numbering2 text-skyblue-01 flex">
                            <ThumbIcon /> <span className="ml-[4px]">23</span>
                          </button>
                        </div>
                        <div className="flex justify-between mb-[9px]">
                          <div className="w-[90px] h-[16px]">
                            <StarRating readOnly value={3} />
                          </div>
                          <span className="text-body5 text-grey-04">
                            2023.09.09
                          </span>
                        </div>
                        <div className="text-body3 mt-[8px]">
                          아직 안가신분들 다들 꼭꼭 예약하세요!! 저번에 예약을
                          안해서 못 들어갔는데 이번엔 시간 맞춰서 입장
                          성공했어요! 팡법스토어 너무 예뻐서 사진 200장은 찍은
                          것 같아요 ㅎㅎㅎ!!
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </main>
    </>
  );
}
