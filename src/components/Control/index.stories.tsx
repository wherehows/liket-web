import Control from ".";
import Carousel from ".";

const meta = {
  title: "components/Control",
};

export default meta;

export const Index = {
  render: function Render() {
    return (
      <div className="flex gap-[8px]">
        {[0, 1, 2, 3, 4].map((number) => {
          return <Control onClick={() => {}} isSelected={number === 0} />;
        })}
      </div>
    );
  },
};
