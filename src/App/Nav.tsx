import { useNavigate } from "react-router-dom";
import { Typography, Stack } from "@mui/material";
import { useSetSidebarOpen } from "../contexts/Theme2NavContent";

interface ILinkBtnProps {
  text: string;
  onNavigate: () => void;
}

const LinkBtn = ({ text, onNavigate }: ILinkBtnProps) => (
  <Typography
    variant="h6"
    component="button"
    sx={{ "&:hover": { textDecoration: "underline", cursor: "pointer" } }}
    onClick={onNavigate}
  >
    {text}
  </Typography>
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
    <Stack direction={"column"} spacing={2} component="nav">
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
    </Stack>
  );
};

export default Nav;
