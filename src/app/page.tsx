import Carousel from "@/components/Carousel";
import Divider from "@/components/Divider";
import Header from "@/components/Header";
import LinkableTab from "@/components/LinkableTab";

export default function Home() {
  const imgs = [
    "https://picsum.photos/seed/picsum/390/280",
    "https://picsum.photos/seed/picsum/390/280",
    "https://picsum.photos/seed/picsum/390/280",
    "https://picsum.photos/seed/picsum/390/280",
  ];

  return (
    <>
      <Header>
        <Header.LeftOption logo />
        <Header.RightOption option={{ search: true, like: true }} />
      </Header>
      <Carousel imgs={imgs} />
      <Divider height="8px" width="100%" />
      <LinkableTab />
    </>
  );
}
