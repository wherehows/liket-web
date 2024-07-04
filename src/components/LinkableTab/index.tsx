"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import CreateReview from "@/icons/create-review.svg";
import CreateLiket from "@/icons/create-liket.svg";
import CreateRoute from "@/icons/create-route.svg";
import useModalStore from "@/stores/modalStore";
import { classNames } from "@/utils/helpers";
import CustomDrawer from "../CustomDrawer";

interface LinkTabProps {
  isSelected: boolean;
  href: string;
  icon: ReactNode;
  selectedIcon: ReactNode;
  onClickLink: (href: string) => void;
}

const LinkTab = ({
  isSelected,
  href,
  icon,
  selectedIcon,
  onClickLink,
}: LinkTabProps) => {
  return (
    <Link
      role="tab"
      href={href}
      aria-selected={isSelected}
      onClick={() => onClickLink(href)}
    >
      {isSelected ? selectedIcon : icon}
    </Link>
  );
};

interface Props {
  shadow?: boolean;
}

const LinkableTab = ({ shadow = false }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const onClickLink = (href: string) => {
    if (pathname === href) {
      setIsWriteModalOpen(false);
    }
  };

  const isLoggedIn = false;
  const openModal = useModalStore(({ openModal }) => openModal);

  return (
    <>
      <CustomDrawer
        open={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
      >
        <div className="center text-h2">Create</div>
        <ul>
          <li className="bottom-sheet-list">
            {isLoggedIn ? (
              <Link href="/create/review" className="bottom-sheet-button">
                <CreateReview className="mr-[8px]" />
                리뷰 작성
              </Link>
            ) : (
              <button
                onClick={() => {
                  openModal("LoginModal", {
                    onClickPositive: () => {
                      router.push("/create/review");
                    },
                  });
                }}
                className="bottom-sheet-button"
              >
                <CreateReview className="mr-[8px]" />
                리뷰 작성
              </button>
            )}
          </li>
          <li className="bottom-sheet-list">
            {isLoggedIn ? (
              <Link href="/create/liket" className="bottom-sheet-button">
                <CreateLiket className="mr-[8px]" />
                라이켓 제작
              </Link>
            ) : (
              <button
                onClick={() => {
                  openModal("LoginModal", {
                    onClickPositive: () => {
                      router.push("/create/liket");
                    },
                  });
                }}
                className="bottom-sheet-button"
              >
                <CreateLiket className="mr-[8px]" />
                라이켓 제작
              </button>
            )}
          </li>
          <li className="bottom-sheet-list">
            {isLoggedIn ? (
              <Link href="/create/route" className="bottom-sheet-button">
                <CreateRoute className="mr-[8px]" />
                루트 짜기
              </Link>
            ) : (
              <button
                onClick={() => {
                  openModal("LoginModal", {
                    onClickPositive: () => {
                      router.push("/create/route");
                    },
                  });
                }}
                className="bottom-sheet-button"
              >
                <CreateRoute className="mr-[8px]" />
                루트 짜기
              </button>
            )}
          </li>
        </ul>
      </CustomDrawer>
      <div
        role="tablist"
        className={classNames(
          "bottom-tab justify-around h-[var(--bottom-tab-height)] pt-[8px] z-[5]",
          shadow && "shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.04)]"
        )}
      >
        <LinkTab
          href="/"
          isSelected={pathname === "/" && !isWriteModalOpen}
          icon={<HomeIcon color={colors.grey["02"]} />}
          selectedIcon={<FilledHomeIcon color={colors.skyblue["01"]} />}
          onClickLink={onClickLink}
        />
        <LinkTab
          href="/map"
          isSelected={pathname === "/map" && !isWriteModalOpen}
          icon={<MapIcon color={colors.grey["02"]} />}
          selectedIcon={<FilledMapIcon color={colors.skyblue["01"]} />}
          onClickLink={onClickLink}
        />
        <button
          role="tab"
          aria-selected={isWriteModalOpen}
          className="h-fit"
          onClick={() => setIsWriteModalOpen(true)}
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
          onClickLink={onClickLink}
          selectedIcon={<FilledMyPageIcon color={colors.skyblue["01"]} />}
        />
        {/* {isLoggedIn ? (
          <LinkTab
            href="/mypage"
            isSelected={pathname === "/mypage" && !isWriteModalOpen}
            icon={<MyPageIcon color={colors.grey["02"]} />}
            onClickLink={onClickLink}
            selectedIcon={<FilledMyPageIcon color={colors.skyblue["01"]} />}
          />
        ) : (
          <button
            role="tab"
            aria-selected={isWriteModalOpen}
            className="h-fit"
            onClick={() => {
              openModal("LoginModal", {
                onClickPositive: () => {
                  router.push("/login");
                },
              });
            }}
          >
            <MyPageIcon color={colors.grey["02"]} />
          </button>
        )} */}
      </div>
    </>
  );
};

export default LinkableTab;
