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
      <>
        <Header>
          <Header.LeftOption
            townName="강동구"
            onClickTownSelection={() => {}}
          />
          <Header.RightOption option={{ search: true, like: true }} />
        </Header>
        <KaKaoMap />
        <LinkableTab />
      </>
    );
  },
};
