"use client";

import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";
import Map from "@/components/KaKaoMap";
import { useState } from "react";
import { classNames } from "@/utils/helpers";
import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomBottomSheet from "@/components/BottomSheet";
import MapBottomSheetCard, {
  CONTENT_CARDS_DUMMY,
} from "@/components/Card/MapBottomSheetCard";

export default function MapPage() {
  const searchParams = useSearchParams();
  const isTownSelectionModalOpen = searchParams.get("isTownSelectionModalOpen");
  const [citySelection, setCitySelection] = useState(CITYS[0]);
  const [guList, setGuList] = useState(CITY_GU_MAP[citySelection]);
  const [guSelection, setGuSelection] = useState("동대문구1");

  const router = useRouter();
  const pathname = usePathname();

  const onClickTownSelection = () => {
    router.push(`${pathname}?isTownSelectionModalOpen=true`);
  };

  const onCloseTownSelection = () => {
    router.back();
  };

  const onClickGu = (gu: string) => {
    setGuSelection(gu);
  };

  const onClickCity = (city: (typeof CITYS)[number]) => {
    setCitySelection(city);
    setGuList(CITY_GU_MAP[city]);
  };

  return (
    <>
      {isTownSelectionModalOpen ? (
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
          <main>
            <div className="flex grow h-[0]">
              <div className="h-[100%] w-[50%] bg-grey-01">
                <ul className="flex flex-col w-[100%] grow">
                  {CITYS.map((CITY, index) => {
                    return (
                      <li
                        key={index}
                        className={classNames(
                          "center h-[48px]",
                          citySelection === CITY
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
              <div className="grow w-[50%]">
                <ul className="flex flex-col w-[100%] h-[100%] overflow-y-scroll">
                  {guList.map((GU, index) => {
                    return (
                      <li
                        key={index}
                        className={classNames(
                          "center h-[48px] shrink-0",
                          guSelection === GU && "text-skyblue-01"
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
              <Button height={48} onClick={() => {}} fullWidth>
                설정하기
              </Button>
            </BottomButtonTabWrapper>
          </main>
        </>
      ) : (
        <>
          <Header>
            <Header.LeftOption
              townName={guSelection}
              onClickTownSelection={onClickTownSelection}
            />
            <Header.RightOption option={{ search: true, like: true }} />
          </Header>
          <main>
            <Map />
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
        </>
      )}
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
