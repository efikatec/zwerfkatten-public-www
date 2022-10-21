import {
  Typography,
  AppBar,
  Toolbar,
  Stack,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleThemeMode from "../components/ToggleThemeMode";
import {
  useHambugerMode,
  useSetSidebarOpen,
  useSidebarOpen,
} from "../contexts/Theme2NavContent";

const Header = () => {
  const hambugerMode = useHambugerMode();
  const sidebarOpen = useSidebarOpen();
  const setSidebarOpen = useSetSidebarOpen();

  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4" component="span" sx={{ flexGrow: 1 }}>
            Operatie Zwerfkatten
          </Typography>
          <Stack direction="row" spacing={4}>
            <ToggleThemeMode />
            {hambugerMode && (
              <IconButton
                color="inherit"
                onClick={toggleSidebarOpen}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
