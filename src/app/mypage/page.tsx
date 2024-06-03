"use client";

import Divider from "@/components/Divider";
import LinkItem from "@/components/LinkItem";
import LinkableTab from "@/components/LinkableTab";
import RightArrow from "@/icons/right-arrow.svg";
import Image from "next/image";
import Link from "next/link";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Mypage() {
  return (
    <>
      <main className="grow">
        <div className="mx-[24px]">
          <div className="flex mt-[64px]">
            <div className="grow">
              <div className="flex flex-col">
                <Link className="text-h1" href="/edit/profile">
                  jjjuuu_a{" "}
                  <RightArrow
                    style={{
                      display: "inline",
                    }}
                  />
                </Link>
                <div className="text-body5 text-grey-04 mt-[7px]">
                  han6569h@naver.com
                </div>
                <div className="flex text-body3 items-center mt-[15px]">
                  좋아요{" "}
                  <p className="text-numbering1 text-skyblue-01 ml-[4px]">33</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[80px] h-[80px] rounded-full relative overflow-hidden">
                <Image
                  src={"https://picsum.photos/80/80?random="}
                  alt="아바타 이미지"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[24px]">
            <Link className="flex items-center" href="/reviews">
              <div className="text-h2 mr-[4px]">리뷰</div>
              <div className="text-numbering1 text-skyblue-01">30</div>
              <RightArrow />
            </Link>
            <ScrollContainer className="flex flex-row gap-[8px] overflow-x-hidden overflow-y-hidden w-[100%] mt-[8px]">
              {REVIEW_DUMMY_DATA.map((src, index) => {
                return (
                  <Link href={`/reviews/${index}`} key={index}>
                    <div className="relative w-[112px] h-[112px]">
                      <Image src={src} alt="리뷰 이미지" fill />
                    </div>
                  </Link>
                );
              })}
            </ScrollContainer>
          </div>
          <Link className="flex flex-col mt-[24px]" href="/likets">
            <div className="flex items-center">
              <div className="text-h2 mr-[4px]">라이켓</div>
              <div className="text-numbering1 text-skyblue-01">24</div>
              <RightArrow />
            </div>
            <ScrollContainer className="flex flex-row gap-[8px] overflow-x-hidden overflow-y-hidden w-[100%] mt-[8px]">
              {REVIEW_DUMMY_DATA.map((src, index) => {
                return (
                  <Link href={`/likets/${index}`} key={index}>
                    <div className="relative w-[112px] h-[178px]">
                      <Image src={src} fill alt="라이켓 이미지" />
                    </div>
                  </Link>
                );
              })}
            </ScrollContainer>
          </Link>
        </div>
        <Divider width="100%" height="8px" margin="24px 0 0 0" />
        <LinkItem text="계정 관리" href="/account" />
        <Divider width="100%" height="8px" />
        <LinkItem text="컨텐츠 등록 요청" href="/requested-contents" />
        <LinkItem text="1:1 문의" href="/inquires" />
        <Divider width="100%" height="8px" />
        <LinkItem text="약관/정책" href="/terms" />
        <div className="flex justify-between items-center w-[100%] h-[48px] px-[24px]">
          <div className="text-h2">버전</div>
          <div className="text-body2 text-grey-04">1.0</div>
        </div>
      </main>
      <LinkableTab shadow />
    </>
  );
}

const REVIEW_DUMMY_DATA = Array.from(
  { length: 20 },
  (_, index) => `https://picsum.photos/112/112?random=${index}`
);

console.log(REVIEW_DUMMY_DATA);

const LIKET_DUMMY_DATA = Array.from(
  { length: 20 },
  (_, index) => `https://picsum.photos/112/112?random=${index}`
);
