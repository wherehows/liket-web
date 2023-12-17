import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";
import Map from "@/components/Map";

export default function MapPage() {
  return (
    <>
      <Header>
        <Header.LeftOption townSelection />
        <Header.RightOption option={{ search: true, like: true }} />
      </Header>
      <Map width="100%" height="calc(100% - 48px - 74px)" />
      <LinkableTab />
    </>
  );
}
