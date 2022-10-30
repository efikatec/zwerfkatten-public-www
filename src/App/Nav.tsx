import { useNavigate } from "react-router-dom";
import { Typography, List, ListItem } from "@mui/material";
import { useSetSidebarOpen } from "../contexts/Theme2NavContent";
import { useLazyRoutes } from "../contexts";

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
        "&": { bgcolor: "primary.secondary" },
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
  const lazyRoutes = useLazyRoutes();

  return (
    <List
      sx={{
        backgroundColor: "transparent",
        flexGrow: 0,
        flexShrink: 0,
      }}
    >
      {lazyRoutes
        .filter((one) => !!one.text)
        .map((one, index) => (
          <LinkBtn
            key={index}
            text={one.text ?? ""}
            onNavigate={() => {
              navigate(one.path);
              setSidebarOpen(false);
            }}
          />
        ))}
    </List>
  );
};

export default Nav;
