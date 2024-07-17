import { useState } from "react";
import { MouseEvent } from "react";
import Chip from ".";
import { GENRES } from "@/utils/const";

export default {
  title: "components/Chip",
};

const GENDER = ["남자", "여자"] as const;

export const SingleSelectionChips = {
  render: function Render() {
    const [selectedGender, setSelcetedGender] = useState<
      (typeof GENDER)[number]
    >(GENDER[0]);
    const onClickChip = (e: MouseEvent<HTMLUListElement>) => {
      const target = e.target as HTMLUListElement;

      if (target.tagName === "BUTTON") {
        setSelcetedGender(target.textContent as (typeof GENDER)[number]);
      }
    };

    return (
      <ul
        className="flex flex-wrap gap-[8px] w-[100%]"
        onClick={(e) => onClickChip(e)}
      >
        {GENDER.map((gender) => {
          return (
            <li key={gender}>
              <Chip isSelected={selectedGender === gender} onClick={() => {}}>
                {gender}
              </Chip>
            </li>
          );
        })}
      </ul>
    );
  },
};

export const MultipleSelectionChips = {
  render: function Render() {
    const [selectedGenres, setSelectedGenres] = useState<
      (typeof GENRES)[number][]
    >([]);
    const onClickChip = (e: MouseEvent<HTMLUListElement>) => {
      const target = e.target as HTMLUListElement;

      if (target.tagName === "BUTTON") {
        setSelectedGenres([
          ...selectedGenres,
          target.textContent as (typeof GENRES)[number],
        ]);
      }
    };

    return (
      <ul
        className="flex flex-wrap gap-[8px] w-[100%]"
        onClick={(e) => onClickChip(e)}
      >
        {GENRES.map((genre: (typeof GENRES)[number]) => {
          return (
            <li key={genre}>
              <Chip
                isSelected={selectedGenres.includes(genre)}
                onClick={() => {}}
              >
                {genre}
              </Chip>
            </li>
          );
        })}
      </ul>
    );
  },
};
