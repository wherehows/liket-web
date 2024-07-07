import { Author } from "./author";
import { ContentDetailInformation } from "./content";

export interface ReviewListItem {
  idx: number;
  visitTime: string;
  thumbnail: string;
  cultureContent: Pick<
    ContentDetailInformation,
    "idx" | "title" | "genre" | "likeCount" | "thumbnail"
  >;
  author: Author;
  createdAt: string;
  likeState: boolean;
  imgList: string[];
  description: string;
  starRating: number;
  likeCount: number;
}
