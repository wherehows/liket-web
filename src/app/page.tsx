import Carousel from "@/components/Carousel";
import Header from "@/components/Header";

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
    </>
  );
}
