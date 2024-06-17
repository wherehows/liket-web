"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function NotFoundBottomButton() {
  const router = useRouter();

  return (
    <>
      <Button
        variant="ghost"
        height={48}
        fullWidth
        onClick={() => {
          router.back();
        }}
      >
        이전 페이지
      </Button>
      <Button
        variant="primary"
        fullWidth
        height={48}
        onClick={() => {
          router.replace("/");
        }}
      >
        메인으로 가기
      </Button>
    </>
  );
}
