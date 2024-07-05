import Carousel from ".";

const meta = {
  title: "components/Carousel",
};

export default meta;

export const Index = {
  render: function Render() {
    const imgs = [
      "https://picsum.photos/id/237/390/280",
      "https://picsum.photos/id/238/390/280",
      "https://picsum.photos/id/239/390/280",
      "https://picsum.photos/id/240/390/280",
    ];

    return (
      <div className="w-[390px]">
        <Carousel list={imgs} />
      </div>
    );
  },
};
