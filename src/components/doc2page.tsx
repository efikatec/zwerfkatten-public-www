import React, { forwardRef, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Typography,
  Paper,
  Stack,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  IChaptersContent,
  IChapterTitle,
  IContentTable,
  IParagraph,
} from "../models/doc";

// https://robinvdvleuten.nl/blog/scroll-a-react-component-into-view/

export const DocListItem = ({ primary }: { primary: string }) => {
  return (
    <ListItem dense>
      <ListItemIcon sx={{ minWidth: 0 }}>
        <ArrowRightIcon />
      </ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export const Paragraph = ({
  children,
}: React.PropsWithChildren<IParagraph>) => {
  return (
    <Typography variant="body1" component="span">
      {children}
    </Typography>
  );
};

export const Chapter = ({
  id,
  title,
  children,
}: React.PropsWithChildren<IChapterTitle>) => {
  const location = useLocation();
  const [, hash] = location.hash.split("#");

  return (
    <Stack direction="column" spacing={0} component="section">
      <Typography
        id={id}
        variant="h4"
        component="h2"
        gutterBottom
        color={id === hash ? "sbBgColor" : "text.primary"}
      >
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

const Doc2Page = ({
  contentTable,
  captersContent,
}: {
  contentTable: IContentTable;
  captersContent: IChaptersContent;
}) => {
  const titleRef = useRef();

  const chapters = (
    <>
      {contentTable.chapterTitles.map((one) => (
        <Chapter key={one.id} id={one.id} title={one.title}>
          {captersContent[one.id] ?? <></>}
        </Chapter>
      ))}
    </>
  );

  return (
    <Paper sx={{ padding: "36px" }}>
      <Typography variant="h2" component="h4" color="text.primary" gutterBottom>
        {contentTable.title}
      </Typography>
      <Stack direction="column" spacing={4}>
        {chapters}
      </Stack>
    </Paper>
  );
};

export default Doc2Page;
