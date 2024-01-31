import { GENRES } from "@/utils/const";
import GenreTile from ".";

export default {
  title: "components/GenreTile",
};

export const Index = {
  render: () => {
    return (
      <div className="flex flex-row gap-[8px]">
        {(["전체", ...GENRES] as const).map((genre) => {
          return <GenreTile key={genre} genre={genre} />;
        })}
      </div>
    );
  },
};
