import Link from "next/link";
import RightArrow from "@/icons/right-arrow.svg";

interface Props {
  text: string;
  href: string;
}

export default function ({ text, href }: Props) {
  return (
    <Link
      href={href}
      className="flex justify-between items-center w-[100%] h-[48px] px-[24px]"
    >
      <div className="text-h2">{text}</div>
      <RightArrow />
    </Link>
  );
}
