interface PageProps {
  params: {
    idx: string;
  };
}

export default function Page({ params: { idx } }: PageProps) {
  return <div>{idx} 페이지입니다. 개발중</div>;
}
