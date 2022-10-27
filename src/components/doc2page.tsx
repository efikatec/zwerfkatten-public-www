import { PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Typography,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  IChaptersContent,
  IChapterTitle,
  IContentTable,
  IParagraph,
} from "../models/doc";

const BaseList = ({
  icon,
  items,
  pl,
  pb,
}: {
  icon: JSX.Element;
  items: JSX.Element[];
  pl: number;
  pb: number;
}) => {
  return (
    <List dense sx={{ pl, pb, pt: 0 }}>
      {items.map((one, index) => (
        <ListItem key={index} dense>
          <ListItemIcon sx={{ minWidth: 0 }}>{icon}</ListItemIcon>
          {one}
        </ListItem>
      ))}
    </List>
  );
};

export const DocPrimaryList = ({ items }: { items: JSX.Element[] }) => (
  <BaseList icon={<KeyboardArrowRightIcon />} items={items} pl={0} pb={1} />
);

export const DocSecondaryList = ({ items }: { items: JSX.Element[] }) => (
  <BaseList
    icon={<KeyboardDoubleArrowRightIcon />}
    items={items}
    pl={6}
    pb={0}
  />
);

export const Paragraph = ({ children }: PropsWithChildren<IParagraph>) => {
  return (
    <Typography variant="body1" component="span">
      {children}
    </Typography>
  );
};

interface IRtChapter extends IChapterTitle {
  hash?: string;
}

export const Chapter = ({
  id,
  title,
  children,
  hash,
}: PropsWithChildren<IRtChapter>) => {
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
  const location = useLocation();
  const [, hash] = location.hash.split("#");

  const chapters = (
    <>
      {contentTable.chapterTitles.map((one) => (
        <Chapter key={one.id} id={one.id} title={one.title} hash={hash}>
          {captersContent[one.id] ?? <></>}
        </Chapter>
      ))}
    </>
  );

  useEffect(() => {
    if (hash) {
      const chapter = document.getElementById(hash);
      chapter && chapter.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

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
