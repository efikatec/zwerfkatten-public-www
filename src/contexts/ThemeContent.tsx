import { createContext, useState, useContext, ReactNode } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  Theme,
  createTheme,
} from "@mui/material/styles";

const systemMode =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
const ThemeUpdateContext = createContext((t: Theme) => {});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(
    createTheme({
      palette: {
        mode: systemMode,
      },
    })
  );

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </MuiThemeProvider>
  );
};

export const useUpdateTheme = () => useContext(ThemeUpdateContext);
