import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  useHambugerMode,
  useSidebarOpen,
  useSetSidebarOpen,
} from "../contexts/Theme2NavContent";
import Nav from "./Nav";

const Sidebar = () => {
  const hambugerMode = useHambugerMode();
  const sidebarOpen = useSidebarOpen();
  const setSidebarOpen = useSetSidebarOpen();

  return hambugerMode ? (
    <Drawer anchor="left" variant="temporary" open={sidebarOpen}>
      <IconButton
        color="inherit"
        onClick={() => setSidebarOpen(false)}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Nav />
    </Drawer>
  ) : (
    <Nav />
  );
};

export default Sidebar;
