import { lazy } from "react";
import { CssBaseline, Box, Container, colors } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  Theme,
  createTheme,
} from "@mui/material/styles";
import { HamburgerProvider, LazyRoutesProvider } from "../contexts";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const HomePage = lazy(() => import("../pages/HomePage"));

const CastrationPage = lazy(() => import("../pages/CastrationPage"));
const StrayCatsPage = lazy(() => import("../pages/StrayCatsPage"));
const IntroducingCatsPage = lazy(() => import("../pages/IntroducingCatsPage"));

const Error404Page = lazy(() => import("../pages/Error404Page"));

const lightTheme = (() => {
  const primaryFamily = colors.amber;
  const secondaryFamily = colors.lightBlue;
  const backgroundFamily = colors.amber;

  const cardActionsOnBottom = (t: Theme) => {
    return createTheme(t, {
      components: {
        MuiCard: {
          styleOverrides: {
            root: {
              display: "flex",
              flexDirection: "column",
            },
          },
        },
        MuiCardContent: {
          styleOverrides: {
            root: {
              flexGrow: 1,
            },
          },
        },
      },
    });
  };

  const primaryPalette = (t: Theme) => {
    return createTheme(t, {
      palette: {
        primary: {
          light: primaryFamily[200],
          main: primaryFamily[300],
          dark: primaryFamily[500],
          contrastText: "#222",
        },
      },
    });
  };
  const secondaryPalette = (t: Theme) => {
    return createTheme(t, {
      palette: {
        secondary: {
          light: secondaryFamily[300],
          main: secondaryFamily[500],
          dark: secondaryFamily[700],
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
          default: backgroundFamily[200],
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
    cardActionsOnBottom,
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

const Content = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Sidebar />
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            mt: "20px",
          }}
        >
          <Main />
        </Container>
      </Box>
    </Box>
  );
};

const App = () => {
  const lazyRoutes = [
    {
      text: "Home",
      path: "/",
      Page: HomePage,
    },
    {
      text: "Castratie",
      path: "/castration",
      Page: CastrationPage,
    },
    {
      text: "Zwerfkatten",
      path: "/stray-cats",
      Page: StrayCatsPage,
    },
    {
      text: "Katten Introduceren",
      path: "/introducing-cats",
      Page: IntroducingCatsPage,
    },
    {
      path: "*",
      Page: Error404Page,
    },
  ];

  return (
    <LazyRoutesProvider lazyRoutes={lazyRoutes}>
      <MuiThemeProvider theme={lightTheme}>
        <HamburgerProvider>
          <CssBaseline />
          <Content />
        </HamburgerProvider>
      </MuiThemeProvider>
    </LazyRoutesProvider>
  );
};

export default App;
