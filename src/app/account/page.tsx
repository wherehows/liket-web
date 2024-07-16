"use client";

import Divider from "@/components/Divider";
import Header from "@/components/Header";
import LeftOption from "@/components/Header/LeftOption";
import MiddleText from "@/components/Header/MiddleText";
import LinkItem from "@/components/LinkItem";
import KaKao from "@/icons/kakao.svg";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header>
        <LeftOption option={{ back: true }} />
        <MiddleText text="계정관리" />
      </Header>
      <main>
        <div className="mt-[16px] px-[24px]">
          <div className="text-caption text-grey-04">이메일</div>
          <div className="flex h-[48px] w-[100%] items-center justify-between">
            <div className="ml-[8px] text-body3">han6569h@naver.com</div>
            <KaKao />
          </div>
        </div>
        <Divider width="100%" height="8px" margin="16px 0 0 0" />
        <LinkItem href="/mypage/edit/password">비밀번호 변경</LinkItem>
        <button className="text-h2 w-[100%] h-[48px] flex items-center px-[24px]">
          로그아웃
        </button>
        <Link
          className="text-body5 text-grey-04 flex flex-row-reverse w-[100%]"
          href="/delete/account"
        >
          회원탈퇴
        </Link>
      </main>
    </>
  );
}
