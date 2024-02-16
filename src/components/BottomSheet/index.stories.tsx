import { GENRES } from "@/utils/const";
import CustomBottomSheet from ".";
import "react-spring-bottom-sheet/dist/style.css";
import { Drawer } from "@mui/material";
import CustomDrawer from "../CustomDrawer";

export const Index = {
  render: () => {
    return (
      <CustomBottomSheet title="장르" open={true}>
        <div className="flex flex-col">
          {GENRES.map((genre) => {
            return (
              <button
                key={genre}
                className="text-start text-body3 h-[48px] pl-[24px] pt-[14px] pb-[14px]"
              >
                {genre}
              </button>
            );
          })}
        </div>
      </CustomBottomSheet>
    );
  },
};

export const DrawerIndex = {
  render: () => {
    return (
      <CustomDrawer open anchor="bottom">
        <div className="center text-h2">지역</div>
        <ul className="mb-[48px]">
          {GENRES.map((GENRE) => {
            return (
              <li className="bottom-sheet-list">
                <button className="bottom-sheet-button">{GENRE}</button>
              </li>
            );
          })}
        </ul>
      </CustomDrawer>
    );
  },
};

const meta = {
  title: "components/BottomSheet",
};

export default meta;
