import { createContext, useState, useContext, ReactNode } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  Theme,
  createTheme,
  
} from "@mui/material/styles";
import { PaletteMode, colors } from "@mui/material";

const SetPaletteModeContext = createContext((mode: PaletteMode) => {});
const { palette } = createTheme();

const lightTheme = (() => {
  const primaryPalette = (t: Theme) => {
    return createTheme(t, {
      palette: {
        primary: {
          main: colors.lightBlue[500],
        },
      },
    });
  };
  const secondaryPalette = (t: Theme) => {
    return createTheme(t, {
      palette: {
        secondary: {
          main: colors.purple[500]
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

  // const customProperties = (t: Theme) => {
  //   return createTheme(t, {
  //     custom: {
  //       sbBgColor: "blue",
  //     },
  //   });
  // };

  const customProperties = (t: Theme) => {
    return createTheme(t, {
      palette: {
        sbBgColor: t.palette.primary.dark
      },
    });
  };


  return [primaryPalette, secondaryPalette, customProperties].reduce(
    (rc, one) => one(rc),
    createTheme({
      palette: {
        mode: "light",
      },
    })
  );
})();

const darkTheme = (() => {
  const background = (t: Theme) => {
    return createTheme(t, {
      palette: {
        background: {
          paper: "#000",
          default: "#333"
        },
      },
    });
  };

  const sbBgColor = (t: Theme) => {
    return createTheme(t, {
      palette: {
        sbBgColor: t.palette.primary.dark
      },
    });
  };

  const rc = [background, sbBgColor].reduce(
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
