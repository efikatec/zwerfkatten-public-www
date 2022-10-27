import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { CssBaseline, Box, Container } from "@mui/material";
import {
  ThemeProvider,
  Theme2NavProvider,
  LazyRoutesProvider,
} from "../contexts";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const HomePage = lazy(() => import("../pages/HomePage"));
const CastrationPage = lazy(() => import("../pages/CastrationPage"));
const StrayCatsPage = lazy(() => import("../pages/StrayCatsPage"));
const Error404Page = lazy(() => import("../pages/Error404Page"));
const RedirectToHome = () => <Navigate to="/home" />;

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
      path: "/home",
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
      path: "/",
      Page: RedirectToHome,
    },
    {
      path: "*",
      Page: Error404Page,
    },
  ];

  return (
    <LazyRoutesProvider lazyRoutes={lazyRoutes}>
      <ThemeProvider>
        <Theme2NavProvider>
          <CssBaseline />
          <Content />
        </Theme2NavProvider>
      </ThemeProvider>
    </LazyRoutesProvider>
  );
};

export default App;
