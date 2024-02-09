"use client";

import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";
import KaKaoMap from "@/components/KaKaoMap";
import { useState } from "react";
import { classNames } from "@/utils/helpers";
import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomBottomSheet from "@/components/BottomSheet";
import MapBottomSheetCard, {
  CONTENT_CARDS_DUMMY,
} from "@/components/Card/MapBottomSheetCard";
import FilterFilled from "@/icons/filter-filled-36.svg";
import Filter from "@/icons/filter-36.svg";
import ButtonGroup from "@/components/ButtonGroup";
import { AGES, GENRES, STYLES } from "@/utils/const";
import Chip from "@/components/Chip";

export default function MapPage() {
  const searchParams = useSearchParams();
  const isTownSelectionModalOpen = searchParams.get("isTownSelectionModalOpen");
  const isFilterModalOpen = searchParams.get("isFilterModalOpen");
  const [appliedFilters, setAppliedFilters] = useState(false);
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

  const onCloseTownSelection = () => {
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

  const onClickCity = (city: (typeof CITYS)[number]) => {
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

  const onClickInitialize = () => {
    setAppliedFilters(false);
  };
  const onClickSettingFilter = () => {
    router.back();
    setAppliedFilters(true);
  };

  const onCloseFilterSelectionModal = () => router.back();
  const onClickOptions = () => {};

  return (
    <>
      {isFilterModalOpen && (
        <>
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
          <main className="z-[5] px-[24px]">
            <div className="flex flex-col grow h-[0] bg-white gap-[48px] mt-[16px]">
              {(["장르", "지역", "연령대", "스타일"] as const).map((option) => {
                return (
                  <div key={option} className="">
                    <div className="text-h2 mb-[15px]">{option}</div>
                    <ul
                      onClick={() => onClickOptions}
                      className="flex flex-wrap gap-[8px]"
                    >
                      {FILTER_OPTIONS[option].map((item) => {
                        return (
                          <li key={item}>
                            <Chip isSelected={false}>{item}</Chip>
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
                  설정하기
                </Button>
              </ButtonGroup>
            </BottomButtonTabWrapper>
          </main>
        </>
      )}
      {isTownSelectionModalOpen && (
        <>
          <Header>
            <Header.LeftOption
              option={{
                close: {
                  onClick: onCloseTownSelection,
                },
              }}
            />
            <Header.MiddleText text="지역설정" />
          </Header>
          <main className="z-[5]">
            <div className="flex grow h-[0]">
              <div className="h-[100%] w-[50%] bg-grey-01">
                <ul className="flex flex-col w-[100%] grow">
                  {CITYS.map((CITY, index) => {
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
                        <button onClick={() => onClickCity(CITY)}>
                          {CITY}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="grow w-[50%] bg-white">
                <ul className="flex flex-col w-[100%] h-[100%] overflow-y-scroll">
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
            <BottomButtonTabWrapper>
              <Button height={48} onClick={onClickSettingNeighbor} fullWidth>
                설정하기
              </Button>
            </BottomButtonTabWrapper>
          </main>
        </>
      )}
      <main
        className={classNames(
          !isTownSelectionModalOpen && !isFilterModalOpen ? "" : "hidden"
        )}
      >
        <Header>
          <Header.LeftOption
            townName={currentSelectedGu}
            onClickTownSelection={onClickTownSelection}
          />
          <Header.RightOption option={{ search: true, like: true }} />
        </Header>
        <KaKaoMap>
          <button
            className="absolute top-0 left-0 z-[2]"
            onClick={onClickFilter}
          >
            {appliedFilters ? <FilterFilled /> : <Filter />}
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
        <LinkableTab />
      </main>
    </>
  );
}

const SEOUL_GU_DUMMY = [
  "동대문구1",
  "도봉구2",
  "동작구3",
  "서대문구4",
  "마포구5",
  "서초구6",
  "동작구7",
  "서대문구8",
  "마포구9",
  "서초구10",
  "동작구11",
  "서대문구12",
  "마포구1",
  "서초구2",
  "동작구3",
  "서대문구4",
  "마포구5",
  "서초구6",
  "마포구23",
  "서초구22",
  "동작구31",
  "서대문구24",
  "마포구53",
  "서초구61",
  "서대문구234",
  "마포구532",
  "서초구61",
  "마포구223",
  "서초구212",
  "동작구331",
  "서대문구224",
  "마포구532",
  "서초구631",
];

const INCHENON_GU_DUMMY = ["미추홀구", "부평구"];

const GYEONGGI_GU_DUMMY = ["아모르겠구", "이세구"];

const CITY_GU_MAP = {
  서울광역시: SEOUL_GU_DUMMY,
  인천광역시: INCHENON_GU_DUMMY,
  경기도: GYEONGGI_GU_DUMMY,
} as const;

const CITYS = Object.keys(CITY_GU_MAP) as Array<keyof typeof CITY_GU_MAP>;

const INITIAL_CITY_AND_GU_SELECTION = {
  currentSelectedCity: CITYS[0],
  currentSelectedGu: CITY_GU_MAP[CITYS[0]][0],
  newSelectedCity: CITYS[0],
  newSelectedGu: CITY_GU_MAP[CITYS[0]][0],
};

const FILTER_OPTIONS = {
  장르: GENRES,
  지역: CITYS,
  연령대: AGES,
  스타일: STYLES,
} as const;
