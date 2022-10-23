import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { chapterTitles } from "../OwnCatPage";

const OwnCatTeaser = () => {
  const navigate = useNavigate();

  const listItems = chapterTitles.map((one) => (
    <ListItem
      key={one.id}
      button
      disableGutters
      disablePadding
      onClick={() => navigate(["/own-cat", one.id].join("#"))}
    >
      <ListItemButton dense>
        <ListItemText primary={one.title} />
      </ListItemButton>
    </ListItem>
  ));

  return (
    <>
      <Typography variant="body1" component="p" gutterBottom>
        Het houden van een kat is zeer belonend. Maar, zoals bij ieder
        intelligent dier, hebben katten ook hun wensen en grillen.
      </Typography>
        <List>{listItems}</List>
    </>
  );
};

export default OwnCatTeaser;
