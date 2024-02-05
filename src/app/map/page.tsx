"use client";

import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";
import Map from "@/components/KaKaoMap";
import { useState } from "react";
import { classNames } from "@/utils/helpers";
import BottomButtonTabWrapper from "@/components/BottomButtonTabWrapper";
import Button from "@/components/Button";
import { usePathname, useRouter } from "next/navigation";

export default function MapPage() {
  const [isTownSelectionModalOpen, setIsTownSelectionModalOpen] =
    useState(false);
  const [citySelection, setCitySelection] = useState("서울");
  const [guSelection, setGuSelection] = useState("동대문구1");

  const router = useRouter();
  const pathname = usePathname();

  const onClickTownSelection = () => {
    setIsTownSelectionModalOpen(true);
    router.push(`${pathname}?isSelectingModal=true`);
  };

  const CITYS = ["서울", "인천", "경기"];
  const GUS = [
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

  return (
    <>
      {isTownSelectionModalOpen ? (
        <>
          <Header>
            <Header.LeftOption
              option={{
                close: true,
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
                        <button>{CITY}</button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="grow w-[50%]">
                <ul className="flex flex-col w-[100%] h-[100%] overflow-y-scroll">
                  {GUS.map((GU, index) => {
                    return (
                      <li
                        key={index}
                        className={classNames(
                          "center h-[48px] shrink-0",
                          guSelection === GU && "text-skyblue-01"
                        )}
                      >
                        {GU}
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
              townSelection
              onClickTownSelection={onClickTownSelection}
            />
            <Header.RightOption option={{ search: true, like: true }} />
          </Header>
          <main>
            <Map width="100%" height="calc(100% - 48px - 74px)" />
          </main>
          <LinkableTab />
        </>
      )}
    </>
  );
}
