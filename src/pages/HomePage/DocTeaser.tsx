import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { IContentTable } from "../../models/doc";

interface IDocTeaser {
  docUrl: string;
  contentTable: IContentTable;
}

export const DocTeaser = ({
  docUrl,
  contentTable,
  children,
}: React.PropsWithChildren<IDocTeaser>) => {
  const navigate = useNavigate();

  const listItems = contentTable.chapterTitles
    .filter((one) => one.title)
    .map((one) => (
      <ListItem
        component="li"
        key={one.id}
        button
        dense
        disableGutters
        disablePadding
        onClick={() => navigate([docUrl, one.id].join("#"))}
      >
        <ListItemIcon>
          <ReadMoreIcon />
        </ListItemIcon>
        <ListItemText primary={one.title} />
      </ListItem>
    ));

  return (
    <>
      <Typography variant="body1" component="p" gutterBottom>
        {children}
      </Typography>
      <List>{listItems}</List>
    </>
  );
};

export default DocTeaser;
