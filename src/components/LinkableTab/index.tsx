"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import HomeIcon from "@/icons/home.svg";
import FilledHomeIcon from "@/icons/home-filled.svg";
import MapIcon from "@/icons/map.svg";
import FilledMapIcon from "@/icons/map-filled.svg";
import CreateIcon from "@/icons/create.svg";
import FilledCreateIcon from "@/icons/create-filled.svg";
import MyPageIcon from "@/icons/mypage.svg";
import FilledMyPageIcon from "@/icons/mypage-filled.svg";
import { colors } from "@/utils/style";

interface LinkTabProps {
  isSelected: boolean;
  href: string;
  icon: ReactNode;
  selectedIcon: ReactNode;
}

const LinkTab = ({ isSelected, href, icon, selectedIcon }: LinkTabProps) => {
  return (
    <Link role="tab" href={href} aria-selected={isSelected}>
      {isSelected ? selectedIcon : icon}
    </Link>
  );
};

const LinkableTab = () => {
  const pathname = usePathname();
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  return (
    <div role="tablist" className="bottom-tab justify-around pt-[8px]">
      <LinkTab
        href="/"
        isSelected={pathname === "/" && !isWriteModalOpen}
        icon={<HomeIcon color={colors.grey["02"]} />}
        selectedIcon={<FilledHomeIcon color={colors.skyblue["01"]} />}
      />
      <LinkTab
        href="/map"
        isSelected={pathname === "/map" && !isWriteModalOpen}
        icon={<MapIcon color={colors.grey["02"]} />}
        selectedIcon={<FilledMapIcon color={colors.skyblue["01"]} />}
      />
      <button
        role="tab"
        aria-selected={isWriteModalOpen}
        className="h-fit"
        onClick={() => setIsWriteModalOpen(!isWriteModalOpen)}
      >
        {isWriteModalOpen ? (
          <FilledCreateIcon color={colors.skyblue["01"]} />
        ) : (
          <CreateIcon color={colors.grey["02"]} />
        )}
      </button>
      <LinkTab
        href="/mypage"
        isSelected={pathname === "/mypage" && !isWriteModalOpen}
        icon={<MyPageIcon color={colors.grey["02"]} />}
        selectedIcon={<FilledMyPageIcon color={colors.skyblue["01"]} />}
      />
    </div>
  );
};

export default LinkableTab;
