import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme, createTheme } from "@mui/material/styles";
import { useUpdateTheme } from "../contexts/ThemeContent";

const ToggleThemeMode = () => {
  const updateTheme = useUpdateTheme();
  const theme = useTheme();
  const toggleThemeMode = () =>
    updateTheme(
      createTheme({
        palette: {
          mode: theme.palette.mode === "light" ? "dark" : "light",
        },
      })
    );

  return (
    <Stack direction="row" spacing={0} alignItems="center">
      <DarkModeIcon fontSize="small" />
      <Switch
        color="secondary"
        size="small"
        checked={theme.palette.mode === "light"}
        inputProps={{ "aria-label": "Theme selector" }}
        onChange={toggleThemeMode}
      />
      <LightModeIcon fontSize="small" />
    </Stack>
  );
};

export default ToggleThemeMode;
