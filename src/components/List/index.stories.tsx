import HotPlaceItem, { HOT_PLACE_DUMMY_1 } from "./Hotplace";

export default {
  title: "components/List",
};

export const HotPlaceIndex = {
  render: () => {
    return (
      <>
        {HOT_PLACE_DUMMY_1.map((data, index) => (
          <HotPlaceItem {...data} key={index} />
        ))}
      </>
    );
  },
};
