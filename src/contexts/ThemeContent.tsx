import { createContext, useState, useContext, ReactNode } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  Theme,
  createTheme,
} from "@mui/material/styles";
import { PaletteMode, colors } from "@mui/material";

const SetPaletteModeContext = createContext((mode: PaletteMode) => {});
const lightTheme = (() => {
  const primaryPalette = (t: Theme) => {
    return createTheme(t, {
      palette: {
        primary: {
          light: colors.amber[200],
          main: colors.amber[300],
          dark: colors.amber[500],
          contrastText: "#222",
        },
      },
    });
  };
  const secondaryPalette = (t: Theme) => {
    return createTheme(t, {
      palette: {
        secondary: {
          light: colors.lightBlue[300],
          main: colors.lightBlue[500],
          dark: colors.lightBlue[700],
          contrastText: "#222",
        },
      },
    });
  };
  const backgroundPalette = (t: Theme) => {
    return createTheme(t, {
      palette: {
        background: {
          //          default: colors.grey[600],
          default: colors.amber[200],
        },
      },
    });
  };

  // const changeBgOfDrawer = (t: Theme) => {
  //   return createTheme(t, {
  //     components: {
  //       MuiDrawer: {
  //         styleOverrides: {
  //           paper: {
  //             bgcolor: t.palette.primary.dark,
  //           },
  //         },
  //       },
  //     },
  //   });
  // };

  const sbBgColor = (t: Theme) => {
    return createTheme(t, {
      palette: {
        sbBgColor: t.palette.primary.dark,
      },
    });
  };

  const hoverMuiListItemButton = (t: Theme) => {
    return createTheme(t, {
      components: {
        MuiListItem: {
          styleOverrides: {
            root: {
              "&.MuiListItem-button:hover": {
                backgroundColor: t.palette.grey[500],
              },
            },
          },
        },
      },
    });
  };

  return [
    primaryPalette,
    secondaryPalette,
    backgroundPalette,
    sbBgColor,
    hoverMuiListItemButton,
  ].reduce(
    (rc, one) => one(rc),
    createTheme({
      palette: {
        mode: "light",
      },
    })
  );
})();

const darkTheme = (() => {
  const primaryPalette = (t: Theme) => {
    return createTheme(t, {
      palette: {
        primary: {
          main: colors.blueGrey[700],
          light: colors.blueGrey[500],
          dark: colors.blueGrey[900],
          contrastText: "#111",
        },
      },
    });
  };

  const background = (t: Theme) => {
    return createTheme(t, {
      palette: {
        background: {
          default: colors.indigo[900],
        },
      },
    });
  };

  const sbBgColor = (t: Theme) => {
    return createTheme(t, {
      palette: {
        sbBgColor: colors.indigo[700],
      },
    });
  };

  const hoverMuiListItemButton = (t: Theme) => {
    return createTheme(t, {
      components: {
        MuiListItem: {
          styleOverrides: {
            root: {
              "&.MuiListItem-button:hover": {
                backgroundColor: t.palette.grey[800],
              },
            },
          },
        },
      },
    });
  };

  const rc = [
    primaryPalette,
    background,
    sbBgColor,
    hoverMuiListItemButton,
  ].reduce(
    (rc, one) => one(rc),
    createTheme({
      palette: {
        mode: "dark",
      },
    })
  );

  return rc;
})();

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [paletteMode, setPaletteMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  return (
    <MuiThemeProvider theme={paletteMode === "dark" ? darkTheme : lightTheme}>
      <SetPaletteModeContext.Provider value={setPaletteMode}>
        {children}
      </SetPaletteModeContext.Provider>
    </MuiThemeProvider>
  );
};

export const useSetPaletteMode = () => useContext(SetPaletteModeContext);
