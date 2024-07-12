import { getTosItem } from "@/apis/terms";
import Header from "@/components/Header";

interface PageProps {
  params: {
    idx: number;
  };
}

export default async function Page({ params: { idx } }: PageProps) {
  const { title, contents } = await getTosItem(idx);
  return (
    <>
      <Header>
        <Header.MiddleText text={title} />
      </Header>
      <main>{contents}</main>
    </>
  );
}
