import { StoryObj } from "@storybook/react";
import ContentCard from ".";
import { CONTENT_STATUS, GENRES } from "@/utils/const";

const meta = {
  title: "components/Content Card",
};

export default meta;

type IndexType = StoryObj<typeof ContentCard>;

export const Index: IndexType = {
  render: ({ genre, status, title, isLike, location, startDate, endDate }) => {
    return (
      <ContentCard
        status={status}
        genre={genre}
        title={title}
        location={location}
        startDate={startDate}
        endDate={endDate}
        isLike={isLike}
      />
    );
  },
  argTypes: {
    genre: {
      options: GENRES,
      control: "select",
    },
    status: {
      option: CONTENT_STATUS,
      control: "select",
    },
  },
  args: {
    genre: "팝업 스토어",
    status: "active",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.08.01",
    endDate: "2023.09.10",
    isLike: false,
  },
};
