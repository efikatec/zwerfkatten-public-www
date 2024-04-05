import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import { PropsWithChildren } from "react";

export type IParagraph = PropsWithChildren<{
  sx?: SxProps<Theme>;
}>;

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
