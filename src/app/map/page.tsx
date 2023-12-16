import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";

export default function Map() {
  return (
    <>
      <Header>
        <Header.LeftOption townSelection />
        <Header.RightOption option={{ search: true, like: true }} />
      </Header>
      <LinkableTab />
    </>
  );
}
