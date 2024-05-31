import Image from "next/image";
import Link from "next/link";

export interface HotPlaceItemProps {
  idx: number;
  title: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
}

export const HOT_PLACE_DUMMY_1: HotPlaceItemProps[] = [
  {
    idx: 1,
    title: "Lady and the Tramp",
    thumbnail: "https://picsum.photos/48/48?random=4",
    startDate: "2023.02.07",
    endDate: "2023.10.18",
  },
  {
    idx: 2,
    title: "Generation War",
    thumbnail: "https://picsum.photos/48/48?random=1",
    startDate: "2023.02.23",
    endDate: "2023.03.30",
  },
  {
    idx: 3,
    title: "Bootmen",
    thumbnail: "https://picsum.photos/48/48?random=2",
    startDate: "2023.03.21",
    endDate: "2023.04.21",
  },
  {
    idx: 4,
    title: "Revenge",
    thumbnail: "https://picsum.photos/48/48?random=3",
    startDate: "2023.01.21",
    endDate: "2023.05.05",
  },
];

export const HOT_PLACE_DUMMY_2: HotPlaceItemProps[] = [
  {
    idx: 5,
    title: "Darktown Strutters (Get Down and Boogie)",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "14.05.2023",
    endDate: "25.09.2023",
  },
  {
    idx: 6,
    title: "Steep",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "20.10.2023",
    endDate: "26.10.2024",
  },
  {
    idx: 7,
    title: "The Girls",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "02.06.2023",
    endDate: "16.11.2023",
  },
  {
    idx: 8,
    title: "Desperately Seeking Susan",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "17.02.2023",
    endDate: "14.11.2024",
  },
];

export const HOT_PLACE_DUMMY_3: HotPlaceItemProps[] = [
  {
    idx: 9,
    title: "Castle of Cloads, The (Pilvilinna)",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "07.12.2023",
    endDate: "22.09.2023",
  },
  {
    idx: 10,
    title: "Carbon Nation",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "06.03.2023",
    endDate: "01.10.2024",
  },
  {
    idx: 11,
    title: "Curse of the Puppet Master",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "16.12.2023",
    endDate: "08.04.2024",
  },
  {
    idx: 12,
    title: "A Master Builder",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "23.08.2023",
    endDate: "30.08.2024",
  },
];

export const HOT_PLACE_DUMMY_4: HotPlaceItemProps[] = [
  {
    idx: 13,
    title: "Nun, The (La religieuse)",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "30.04.2023",
    endDate: "09.02.2024",
  },
  {
    idx: 14,
    title: "Onechanbara - Zombie Bikini Squad",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "13.07.2023",
    endDate: "30.06.2024",
  },
  {
    idx: 15,
    title: "Dinosaurus!",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "12.02.2023",
    endDate: "18.07.2023",
  },
  {
    idx: 16,
    title: "Don't Go In the Woods",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "03.11.2023",
    endDate: "09.11.2024",
  },
];

export const HOT_PLACE_DUMMY_5: HotPlaceItemProps[] = [
  {
    idx: 17,
    title: "Three Quarter Moon",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "01.03.2024",
    endDate: "25.11.2023",
  },
  {
    idx: 18,
    title: "Return of the King, The",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "26.02.2023",
    endDate: "28.09.2023",
  },
  {
    idx: 19,
    title: "Twilight",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "24.11.2023",
    endDate: "23.05.2024",
  },
  {
    idx: 20,
    title: "Death Wish 2",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "01.07.2023",
    endDate: "20.08.2023",
  },
];

export const HOT_PLACE_DUMMY_6: HotPlaceItemProps[] = [
  {
    idx: 21,
    title: "Burglars, The (Le casse)",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "11.02.2023",
    endDate: "15.12.2023",
  },
  {
    idx: 22,
    title: "The Face Behind the Mask",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "13.03.2023",
    endDate: "20.07.2023",
  },
  {
    idx: 23,
    title: "Metsän tarina",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "12.02.2023",
    endDate: "22.08.2024",
  },
  {
    idx: 24,
    title: "Under the Cherry Moon",
    thumbnail: "https://picsum.photos/48/48?random=",
    startDate: "21.12.2023",
    endDate: "06.11.2023",
  },
];

const HotPlaceItem = ({
  idx,
  title,
  thumbnail,
  startDate,
  endDate,
}: HotPlaceItemProps) => (
  <Link href={`/contents/${idx}`}>
    <div className="flex flex-row">
      <div className="w-[48px] h-[48px] relative">
        <Image src={thumbnail} fill alt={`${title} thumbnail`} />
      </div>
      <div className="flex flex-col justify-around ml-[12px]">
        <div className="text-body2 w-[150px] overflow-hidden truncate">
          {title}
        </div>
        <div className="text-body5 text-grey-04">
          {startDate} ~ {endDate}
        </div>
      </div>
    </div>
  </Link>
);

export default HotPlaceItem;
