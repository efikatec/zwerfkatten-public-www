import { PropsWithChildren } from "react";

export type IParagraph = PropsWithChildren<{}>;

export interface IChapterTitle {
  id: string;
  title?: string;
}

export interface IContentTable {
  title: string;
  chapterTitles: IChapterTitle[];
}

export interface IChaptersContent {
  [id: string]: JSX.Element;
}
