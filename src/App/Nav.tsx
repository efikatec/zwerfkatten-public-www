import { useNavigate } from "react-router-dom";
import { Typography, List, ListItem } from "@mui/material";
import { useSetSidebarOpen } from "../contexts/Theme2NavContent";

interface ILinkBtnProps {
  text: string;
  onNavigate: () => void;
}

const LinkBtn = ({ text, onNavigate }: ILinkBtnProps) => (
  <ListItem>
    <Typography
      variant="h6"
      component="button"
      sx={{
        "&": { bgcolor: "primary.main" },
        "&:hover": { textDecoration: "underline", cursor: "pointer" },
      }}
      onClick={onNavigate}
    >
      {text}
    </Typography>
  </ListItem>
);

const Nav = () => {
  const navigate = useNavigate();
  const setSidebarOpen = useSetSidebarOpen();

  const links = [
    {
      text: "Home",
      to: "/home",
    },
    {
      text: "Mijn eigen kat",
      to: "/own-cat",
    },
    {
      text: "Mijn eigen kat",
      to: "/own-cat",
    },
    {
      text: "Mijn eigen kat",
      to: "/own-cat",
    },
    {
      text: "Mijn eigen kat",
      to: "/own-catxx",
    },
  ];

  return (
    <List sx={{ bgcolor: "sbBgColor", flexGrow: 0, flexShrink: 0 }}>
      {links.map((one, index) => (
        <LinkBtn
          key={index}
          text={one.text}
          onNavigate={() => {
            navigate(one.to);
            setSidebarOpen(false);
          }}
        />
      ))}
    </List>
  );
};

export default Nav;
