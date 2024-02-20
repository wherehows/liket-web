"use client";

import SearchHeader from "@/components/SearchHeader";
import { useStorage } from "@/hooks/useStorage";
import { useState } from "react";
import CategoryTab from "@/components/CategoryTab";
import { GENRES } from "@/utils/const";
import SmallSelectButton from "@/components/SelectButton/SmallSelectButton";
import SamllDownArrow from "@/icons/down-arrow-small-24.svg";

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [searchedTexts, setSearchedTexts] = useStorage(
    "searchedText",
    [],
    "localStorage"
  );
  const [selectedTab, setSelectedTab] = useState("전체");

  return (
    <>
      <SearchHeader
        onInput={(text) => {
          setSearchText(text);
        }}
        onSearch={(text) => {
          setSearchedTexts([...searchedTexts, text]);
        }}
        onRemove={() => setSearchText("")}
        placeholder="검색어를 입력해주세요."
      />
      <CategoryTab
        list={["전체", ...GENRES]}
        selectedTab={selectedTab}
        onClickTab={(selectedTab) => setSelectedTab(selectedTab)}
        wrapperStyle={{
          marginTop: "8px",
        }}
      />
      <div className="flex ml-[24px] mt-[8px] mb-[11px] gap-[8px]">
        <SmallSelectButton
          placeholder="지역"
          text=""
          onClick={() => {}}
          Icon={<SamllDownArrow />}
        />
        <SmallSelectButton
          placeholder="연령대"
          text=""
          onClick={() => {}}
          Icon={<SamllDownArrow />}
        />
        <SmallSelectButton
          placeholder="스타일"
          text=""
          onClick={() => {}}
          Icon={<SamllDownArrow />}
        />
      </div>
      <div className="flex justify-between">
        <div>진행중인 컨텐츠만 보기</div>
        <SmallSelectButton
          withBorder={false}
          placeholder="최신순"
          text=""
          onClick={() => {}}
          Icon={<SamllDownArrow />}
        />
      </div>
    </>
  );
}
