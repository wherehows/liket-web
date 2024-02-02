"use client";

import BackIcon from "@/icons/back.svg";
import SearchIcon from "@/icons/search.svg";
import RemoveIcon from "@/icons/remove.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { EmptyFunction } from "@/types/common";

interface SearchHeaderProps {
  placeholder: "검색어를 입력해주세요." | "원하는 컨텐츠를 검색해보세요.";
  onSearch: (text: string) => void;
  onInput: (text: string) => void;
  onRemove: EmptyFunction;
}

const SearchHeader = ({
  placeholder,
  onInput,
  onRemove,
  onSearch,
}: SearchHeaderProps) => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleClickBackButton = () => {
    router.back();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    onInput(e.target.value);
  };

  const handleClickRemoveButton = () => {
    setSearchText("");
    onRemove();
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText.length) {
      return;
    }

    onSearch(searchText);
  };

  return (
    <div className="header">
      <button onClick={handleClickBackButton}>
        <BackIcon />
      </button>
      <div className="flex-1 border-solid border-b-[1px] ml-[16px] pl-[8px] pb-[12px] pt-[16px]">
        <form className="flex" role="search" onSubmit={handleSubmitForm}>
          <input
            type="search"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder={placeholder}
            className="w-[100%] text-body3 placeholder:text-body3 placeholder-grey-02"
            value={searchText}
            onChange={handleChangeInput}
          />
          {searchText.length >= 1 ? (
            <button type="reset" onClick={handleClickRemoveButton}>
              <RemoveIcon />
            </button>
          ) : (
            <button type="submit">
              <SearchIcon />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchHeader;
