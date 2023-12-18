import { GENRES } from "@/utils/const";
import CustomBottomSheet from ".";
import "react-spring-bottom-sheet/dist/style.css";

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

const meta = {
  title: "components/BottomSheet",
};

export default meta;
