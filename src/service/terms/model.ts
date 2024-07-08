export interface TosListItem {
  idx: number;
  title: string;
  isEssential: boolean;
}

export interface TosDetailInformation extends TosListItem {
  contents: string;
}
