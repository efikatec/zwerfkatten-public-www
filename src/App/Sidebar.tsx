import { Drawer, IconButton, styled } from "@mui/material";
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
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          backgroundColor: "sbBgColor"
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={() => setSidebarOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Nav />
    </Drawer>
  );
  return <Nav />;
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

  return hambugerMode ? <SlidingSidebar /> : <Nav />;
};

//   return (
//     <Drawer
//       anchor="left"
//       variant="temporary"
//       open
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//     >
//       <DrawerHeader>
//         <IconButton onClick={() => setSidebarOpen(false)}>
//           <ChevronLeftIcon />
//         </IconButton>
//       </DrawerHeader>
//       <Nav />
//     </Drawer>
//   );
// };

export default Sidebar;
