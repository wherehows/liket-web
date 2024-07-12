import { getTosList } from "@/apis/terms";
import Header from "@/components/Header";
import LinkItem from "@/components/LinkItem";

export default async function Page() {
  const { tosList } = await getTosList();

  return (
    <>
      <Header>
        <Header.MiddleText text="약관/정책" />
      </Header>
      <main>
        {tosList.map(({ idx, title }) => {
          return (
            <LinkItem key={idx} href={`/terms/${idx}`}>
              {title}
            </LinkItem>
          );
        })}
      </main>
    </>
  );
}
