"use client";

import SearchHeader from "@/components/SearchHeader";
import { useStorage } from "@/hooks/useStorage";
import { useState } from "react";
import Remove from "@/icons/close-16.svg";
import { colors } from "@/utils/style";

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [searchedTexts, setSearchedTexts] = useStorage(
    "searchedText",
    [],
    "localStorage"
  );

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
      <div className="flex items-center justify-between mt-[16px] mb-[22px] mx-[24px]">
        <div className="text-h2">최근 검색어</div>
        {!!searchedTexts.length && !searchText.length && (
          <button className="text-button6 text-grey-03" onClick={() => {}}>
            모두 지우기
          </button>
        )}
      </div>
      {searchText.length ? (
        <></>
      ) : !!searchedTexts.length ? (
        <ul>
          {searchedTexts.map((text: string, index: number) => {
            return (
              <li
                key={text + index}
                className="flex justify-between mx-[24px] h-[40px]"
              >
                <div className="text-body3 text-grey-03">{text}</div>
                {/* TODO: map 내 타입을 할당하지 않도록 수정 필요 */}
                <button
                  onClick={() => {
                    const newSearchedTexts = searchedTexts.filter(
                      (targetText: string) => {
                        if (targetText === text) {
                          return false;
                        }

                        return true;
                      }
                    );

                    setSearchedTexts(newSearchedTexts);
                  }}
                >
                  <Remove fill={colors.grey["03"]} />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="center grow text-body3 text-grey-04">
          최근 검색어가 없습니다.
        </div>
      )}
    </>
  );
}
