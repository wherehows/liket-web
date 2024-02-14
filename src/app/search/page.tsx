"use client";

import SearchHeader from "@/components/SearchHeader";
import { useStorage } from "@/hooks/useStorage";
import { useState, MouseEvent } from "react";
import CategoryTab from "@/components/CategoryTab";
import { GENRES } from "@/utils/const";

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
    </>
  );
}
