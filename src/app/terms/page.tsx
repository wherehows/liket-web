"use client";

import Header from "@/components/Header";
import LinkItem from "@/components/LinkItem";

export default function Page() {
  return (
    <>
      <Header>
        <Header.LeftOption option={{ back: true }} />
        <Header.MiddleText text="약관/정책" />
      </Header>
      <main>
        <LinkItem text="청소년보호정책" href="/terms/youth-protection" />
        <LinkItem text="이용약관" href="/terms/usage" />
        <LinkItem text="개인정보 처리방침" href="/terms/privacy" />
      </main>
    </>
  );
}
