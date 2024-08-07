"use client";

import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";
import KaKaoMap from "@/components/KaKaoMap";
import { useState, MouseEvent } from "react";
import { classNames } from "@/utils/helpers";
import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomBottomSheet from "@/components/BottomSheet";
import MapBottomSheetCard, {
  CONTENT_CARDS_DUMMY,
} from "@/components/Card/MapBottomSheetCard";
import FilterFilled from "@/icons/filter-filled.svg";
import Filter from "@/icons/filter.svg";
import ButtonGroup from "@/components/ButtonGroup";
import { AGES, GENRES, STYLES } from "@/utils/const";
import Chip from "@/components/Chip";
import { AgeType, CityType, GenreType, StyleType } from "@/types/const";

export default function MapPage() {
  const searchParams = useSearchParams();
  const isTownSelectionModalOpen = searchParams.get("isTownSelectionModalOpen");
  const isFilterModalOpen = searchParams.get("isFilterModalOpen");
  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersType>({
    currentAges: [],
    currentGenres: [],
    currentStyles: [],
    currentCities: [],
    newGenres: [],
    newCities: [],
    newAges: [],
    newStyles: [],
  });

  const [cityAndGuSelection, setCityAndGuSelection] = useState(
    INITIAL_CITY_AND_GU_SELECTION
  );

  const { currentSelectedGu, newSelectedCity, newSelectedGu } =
    cityAndGuSelection;

  const router = useRouter();
  const pathname = usePathname();

  const onClickTownSelection = () => {
    router.push(`${pathname}?isTownSelectionModalOpen=true`);
  };
  const onClickFilter = () => {
    router.push(`${pathname}?isFilterModalOpen=true`);
  };

  const onCloseTownSelectionModal = () => {
    router.back();
    setCityAndGuSelection({
      ...cityAndGuSelection,
      newSelectedCity: cityAndGuSelection.currentSelectedCity,
      newSelectedGu: cityAndGuSelection.currentSelectedGu,
    });
  };

  const onClickGu = (gu: string) => {
    const newCityAndGuSelection = { ...cityAndGuSelection };
    newCityAndGuSelection.newSelectedGu = gu;
    setCityAndGuSelection(newCityAndGuSelection);
  };

  const onClickCity = (city: (typeof CITIES)[number]) => {
    const newCityAndGuSelection = { ...cityAndGuSelection };
    newCityAndGuSelection.newSelectedCity = city;
    newCityAndGuSelection.newSelectedGu = CITY_GU_MAP[city][0];
    setCityAndGuSelection(newCityAndGuSelection);
  };

  const onClickSettingNeighbor = () =>
    setCityAndGuSelection({
      ...cityAndGuSelection,
      currentSelectedCity: cityAndGuSelection.newSelectedCity,
      currentSelectedGu: cityAndGuSelection.newSelectedGu,
    });

  const onClickInitialize = () =>
    setAppliedFilters({
      ...appliedFilters,
      newAges: [],
      newCities: [],
      newGenres: [],
      newStyles: [],
    });

  const onClickSettingFilter = () => {
    router.back();
    const { currentAges, currentCities, currentGenres, currentStyles } =
      appliedFilters;

    setAppliedFilters({
      ...appliedFilters,
      newAges: currentAges,
      newCities: currentCities,
      newGenres: currentGenres,
      newStyles: currentStyles,
    });
  };

  const onCloseFilterSelectionModal = () => {
    router.back();

    const { currentAges, currentCities, currentGenres, currentStyles } =
      appliedFilters;

    setAppliedFilters({
      ...appliedFilters,
      newAges: currentAges,
      newCities: currentCities,
      newGenres: currentGenres,
      newStyles: currentStyles,
    });
  };
  const onClickOption = (
    e: MouseEvent<HTMLUListElement>,
    option: "장르" | "스타일" | "연령대" | "지역"
  ) => {
    const target = e.target as HTMLUListElement;

    const textContent = target.textContent;

    if (target.tagName !== "BUTTON" || !textContent) {
      return;
    }

    const { newGenres, newCities, newAges, newStyles } = appliedFilters;

    if (option === "장르") {
      setAppliedFilters({
        ...appliedFilters,
        newGenres: getAppliedOptionList(
          newGenres,
          textContent
        ) as AppliedFiltersType["newGenres"],
      });
    } else if (option === "스타일") {
      setAppliedFilters({
        ...appliedFilters,
        newStyles: getAppliedOptionList(
          newStyles,
          textContent
        ) as AppliedFiltersType["newStyles"],
      });
    } else if (option === "연령대") {
      setAppliedFilters({
        ...appliedFilters,
        newAges: getAppliedOptionList(
          newAges,
          textContent
        ) as AppliedFiltersType["newAges"],
      });
    } else if (option === "지역") {
      setAppliedFilters({
        ...appliedFilters,
        newCities: getAppliedOptionList(
          newCities,
          textContent
        ) as AppliedFiltersType["newCities"],
      });
    }
  };

  return (
    <>
      <Header>
        <Header.LeftOption
          townName={currentSelectedGu}
          onClickTownSelection={onClickTownSelection}
        />
        <Header.RightOption option={{ search: true, like: true }} />
      </Header>
      <main>
        <KaKaoMap>
          <button
            className="absolute top-0 left-0 z-[2]"
            onClick={onClickFilter}
          >
            {isAppliedFilterExist(appliedFilters) ? (
              <FilterFilled />
            ) : (
              <Filter />
            )}
          </button>
        </KaKaoMap>
        <CustomBottomSheet
          open={true}
          defaultSnap={20}
          snapPoints={({ maxHeight }) => [
            20,
            maxHeight / 2 - 45,
            maxHeight - 68 - 48 - 74,
          ]}
        >
          <ul>
            {CONTENT_CARDS_DUMMY.map((cardItem, index) => {
              return (
                <li key={index}>
                  <MapBottomSheetCard {...cardItem} />
                </li>
              );
            })}
          </ul>
        </CustomBottomSheet>
      </main>
      <LinkableTab />
      <div
        className="full-modal transform translate-y-full"
        style={{
          transform: !!isFilterModalOpen ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <Header>
          <Header.LeftOption
            option={{
              close: {
                onClick: onCloseFilterSelectionModal,
              },
            }}
          />
          <Header.MiddleText text="필터" />
        </Header>
        <div className="full-modal-main px-[24px] py-[16px] gap-[48px]">
          {(["장르", "지역", "연령대", "스타일"] as const).map((option) => {
            return (
              <div key={option}>
                <div className="text-h2 mb-[15px]">{option}</div>
                <ul
                  onClick={(e) => onClickOption(e, option)}
                  className="flex flex-wrap gap-[8px]"
                >
                  {FILTER_OPTIONS[option].map((item) => {
                    const { newGenres, newCities, newAges, newStyles } =
                      appliedFilters;

                    let isSelected = false;
                    if (option === "장르") {
                      isSelected = newGenres.includes(item as GenreType);
                    } else if (option === "스타일") {
                      isSelected = newStyles.includes(item as StyleType);
                    } else if (option === "연령대") {
                      isSelected = newAges.includes(item as AgeType);
                    } else if (option === "지역") {
                      isSelected = newCities.includes(item as CityType);
                    }

                    return (
                      <li key={item}>
                        <Chip isSelected={isSelected} onClick={() => {}}>
                          {item}
                        </Chip>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <BottomButtonTabWrapper>
          <ButtonGroup gap={16}>
            <Button
              height={48}
              onClick={onClickInitialize}
              variant="ghost"
              fullWidth
            >
              초기화
            </Button>
            <Button height={48} onClick={onClickSettingFilter} fullWidth>
              적용하기
            </Button>
          </ButtonGroup>
        </BottomButtonTabWrapper>
      </div>
      <div
        className="full-modal transform translate-y-full"
        style={{
          transform: !!isTownSelectionModalOpen
            ? "translateY(0)"
            : "translateY(100%)",
        }}
      >
        <Header>
          <Header.LeftOption
            option={{
              close: {
                onClick: onCloseTownSelectionModal,
              },
            }}
          />
          <Header.MiddleText text="지역설정" />
        </Header>
        <div className="full-modal-main">
          <div className="flex grow h-[100%]">
            <div className="h-[100%] w-[50%] bg-grey-01">
              <ul className="flex flex-col w-[100%]">
                {CITIES.map((CITY, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(
                        "center h-[48px]",
                        newSelectedCity === CITY
                          ? "bg-white text-skyblue-01"
                          : "bg-grey-01 text-grey-04"
                      )}
                    >
                      <button onClick={() => onClickCity(CITY)}>{CITY}</button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-[50%]">
              <ul className="flex flex-col w-[100%] h-[100%] overflow-y-auto">
                {CITY_GU_MAP[newSelectedCity].map((GU, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(
                        "center h-[48px] shrink-0",
                        newSelectedGu === GU && "text-skyblue-01"
                      )}
                    >
                      <button onClick={() => onClickGu(GU)}>{GU}</button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <BottomButtonTabWrapper shadow>
          <Button height={48} onClick={onClickSettingNeighbor} fullWidth>
            설정하기
          </Button>
        </BottomButtonTabWrapper>
      </div>
    </>
  );
}

const SEOUL_GU_DUMMY = [
  "동대문구",
  "도봉구",
  "동작구",
  "서대문구",
  "마포구",
  "서초구",
  "은평구",
  "용산구",
  "영등포구",
  "양천구",
  "성북구",
  "송파구",
  "노원구",
  "강서구",
  "관악구",
  "강북구",
  "도봉구",
  "광진구",
  "구로구",
  "금천구",
];

const INCHENON_GU_DUMMY = ["미추홀구", "부평구"];

const GYEONGGI_GU_DUMMY = [
  "권선구",
  "기흥구",
  "수정구",
  "수지구",
  "영통구",
  "오정구",
];

const CITY_GU_MAP = {
  서울광역시: SEOUL_GU_DUMMY,
  인천광역시: INCHENON_GU_DUMMY,
  경기도: GYEONGGI_GU_DUMMY,
} as const;

const CITIES = Object.keys(CITY_GU_MAP) as Array<keyof typeof CITY_GU_MAP>;

const INITIAL_CITY_AND_GU_SELECTION = {
  currentSelectedCity: CITIES[0],
  currentSelectedGu: CITY_GU_MAP[CITIES[0]][0],
  newSelectedCity: CITIES[0],
  newSelectedGu: CITY_GU_MAP[CITIES[0]][0],
};

const FILTER_OPTIONS = {
  장르: GENRES,
  지역: CITIES,
  연령대: AGES,
  스타일: STYLES,
} as const;

const isAppliedFilterExist = ({
  currentAges,
  currentCities,
  currentGenres,
  currentStyles,
}: AppliedFiltersType) => {
  return (
    currentAges.length !== 0 ||
    currentCities.length !== 0 ||
    currentGenres.length !== 0 ||
    currentStyles.length !== 0
  );
};

const getAppliedOptionList = (
  prevOptionList: string[],
  targetOption: string
) => {
  if (prevOptionList.some((option) => option === targetOption)) {
    return prevOptionList.filter((option) => option !== targetOption);
  }

  return [...prevOptionList, targetOption];
};

interface AppliedFiltersType {
  currentGenres: GenreType[];
  currentAges: AgeType[];
  currentStyles: StyleType[];
  currentCities: CityType[];
  newGenres: GenreType[];
  newCities: CityType[];
  newAges: AgeType[];
  newStyles: StyleType[];
}
