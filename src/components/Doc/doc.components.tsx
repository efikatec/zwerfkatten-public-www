import React from "react";
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
import { IDoc, IChapterTitle, IChapterContent, IParagraph } from ".";

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
    <Stack direction="column" spacing={0}>
      <Typography
        id={id}
        variant="h4"
        component="h2"
        gutterBottom
        color={id === hash ? "secondary" : "primary"}
      >
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export const Doc = ({
  title,
  chapterTitles,
  chapterContents,
}: React.PropsWithChildren<IDoc>) => {
  const chapters = (
    <>
      {chapterTitles.map((one) => (
        <Chapter key={one.id} id={one.id} title={one.title}>
          {chapterContents[one.id] ?? <></>}
        </Chapter>
      ))}
    </>
  );

  return (
    <Paper sx={{padding: "36px"}}>
      <Typography variant="h2" component="h4" color="secondary" gutterBottom>
        {title}
      </Typography>
      <Stack direction="column" spacing={4}>
        {chapters}
      </Stack>
    </Paper>
  );
};
