import BackIcon from "@/icons/back.svg";
import SearchIcon from "@/icons/search.svg";
import RemoveIcon from "@/icons/remove.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SearchHeader = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleClickBackButton = () => {
    router.back();
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleClickRemoveButton = () => {
    setSearchText("");
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            placeholder="검색어를 입력해주세요."
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
