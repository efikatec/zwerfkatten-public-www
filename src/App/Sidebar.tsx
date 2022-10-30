import { Drawer, IconButton, Box, styled } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  useHambugerMode,
  useSidebarOpen,
  useSetSidebarOpen,
} from "../contexts/Theme2NavContent";
import Nav from "./Nav";

const SlidingSidebar = () => {
  const sidebarOpen = useSidebarOpen();
  const setSidebarOpen = useSetSidebarOpen();

  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={sidebarOpen}
      sx={{
        flexShrink: 0,
        height: "100%",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          backgroundColor: "sbBgColor",
        },
      }}
    >
      <DrawerHeader>
        <IconButton
          onClick={() => setSidebarOpen(false)}
          color="default"
          size="large"
        >
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Nav />
    </Drawer>
  );
};

const FixedSidebar = () => {
  return (
    <Box
      sx={{
        mr: "16px",
        height: "100%",
        backgroundColor: "sbBgColor",
      }}
    >
      <Nav />
    </Box>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = () => {
  const hambugerMode = useHambugerMode();

  return (
    <Box sx={{ flexGrow: 0, flexShrink: 0 }}>
      {hambugerMode ? <SlidingSidebar /> : <FixedSidebar />}
    </Box>
  );
};

export default Sidebar;
