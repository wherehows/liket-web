import { GENRES } from "@/utils/const";
import CategoryTab from ".";
import { useState } from "react";

const meta = {
  title: "components/CategoryTab",
};

export default meta;

export const Index = {
  render: function Render() {
    const [selectedTab, setSelectedTab] = useState("전체");

    return (
      <CategoryTab
        list={["전체", ...GENRES]}
        selectedTab={selectedTab}
        onClickTab={(tab) => {
          setSelectedTab(tab);
        }}
      />
    );
  },
};
