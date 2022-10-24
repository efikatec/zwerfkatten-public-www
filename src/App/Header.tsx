import { Typography, AppBar, Toolbar, Stack, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleThemeMode from "../components/ToggleThemeMode";
import {
  useHambugerMode,
  useSetSidebarOpen,
  useSidebarOpen,
} from "../contexts/Theme2NavContent";

const Header = () => {
  const hambugerMode = useHambugerMode();
  const setSidebarOpen = useSetSidebarOpen();

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar color="transparent">
        <Typography variant="h4" component="span" sx={{ flexGrow: 1 }}>
          Operatie Zwerfkatten
        </Typography>
        <Stack direction="row" spacing={4}>
          <ToggleThemeMode />
          {hambugerMode && (
            <IconButton
              color="inherit"
              onClick={() => setSidebarOpen(true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
