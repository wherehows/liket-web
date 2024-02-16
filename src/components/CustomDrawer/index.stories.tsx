import { GENRES } from "@/utils/const";
import "react-spring-bottom-sheet/dist/style.css";
import CustomDrawer from "../CustomDrawer";

export const Index = {
  render: () => {
    return (
      <CustomDrawer open anchor="bottom">
        <div className="center text-h2">지역</div>
        <ul className="mb-[48px]">
          {GENRES.map((GENRE) => {
            return (
              <li key={GENRE} className="bottom-sheet-list">
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
  title: "components/Drawer",
};

export default meta;
