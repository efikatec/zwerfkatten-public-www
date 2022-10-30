import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import { useSetPaletteMode } from "../contexts/ThemeContent";

const ToggleThemeMode = () => {
  const setPaletteMode = useSetPaletteMode();
  const theme = useTheme();
  const toggleThemeMode = () =>
    setPaletteMode(theme.palette.mode === "light" ? "dark" : "light");

  return (
    <Stack direction="row" spacing={0} alignItems="center">
      <DarkModeIcon fontSize="small" />
      <Tooltip title={"Donker of Licht uiterlijk"}>
        <Switch
          color="secondary"
          size="small"
          checked={theme.palette.mode === "light"}
          inputProps={{ "aria-label": "Theme selector" }}
          onChange={toggleThemeMode}
        />
      </Tooltip>
      <LightModeIcon fontSize="small" />
    </Stack>
  );
};

export default ToggleThemeMode;
