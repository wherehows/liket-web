"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const { orderby, type } = {
    orderby: searchParams.get("orderby"),
    type: searchParams.get("type"),
  };

  return <div>개발중</div>;
}
