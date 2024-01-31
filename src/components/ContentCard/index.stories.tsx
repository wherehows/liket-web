import { StoryObj } from "@storybook/react";
import ContentCard from ".";
import { CONTENT_STATUS, GENRES } from "@/utils/const";
import ReviewCard from "./ReviewCard";

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
      options: CONTENT_STATUS,
      control: "select",
    },
  },
  args: {
    genre: "팝업 스토어",
    status: "inactive",
    title: "성수 디올 팝업 스토어",
    location: "서울 성동구",
    startDate: "2023.08.01",
    endDate: "2023.09.10",
    isLike: false,
  },
};

export const ReviewCardIndex = {
  render: () => {
    return (
      <ReviewCard
        index="1"
        title="성수 디올 팝업 스토어"
        profileImgPath="https://picsum.photos/seed/picsum/390/280"
        nickname="yhkim.dev"
        description="엄청나게 긴 문자열을 쓰는 경우에 어떻게 되는가에 대해서 궁금합니다."
        thumbnail="https://picsum.photos/seed/picsum/390/280"
      />
    );
  },
};
