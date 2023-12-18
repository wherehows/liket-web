import Header from "../Header";
import KaKaoMap from "@/components/KaKaoMap";
import LinkableTab from "../LinkableTab";

const meta = {
  title: "pages/Map",
};

export default meta;

export const Map = {
  render: () => {
    return (
      <div className="max-w-[490px] h-[100%] mx-[auto]">
        <Header>
          <Header.LeftOption townSelection />
          <Header.RightOption option={{ search: true, like: true }} />
        </Header>
        <KaKaoMap width="100%" height="calc(100% - 48px - 74px)" />
        <LinkableTab />
      </div>
    );
  },
};
