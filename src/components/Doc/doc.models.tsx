import { ReactNode } from "react";

export interface IParagraph {
  children?: ReactNode;
}

export interface IChapterTitle {
  id: string;
  title: string;
}

export interface IChapterContent {[id: string]: JSX.Element };

export interface IDoc {
  title: string;
  chapterTitles: IChapterTitle[],
  chapterContents: IChapterContent,
}
