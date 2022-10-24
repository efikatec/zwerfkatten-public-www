import { CssBaseline, Box, Stack, Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, Theme2NavProvider } from "../contexts";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

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
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Theme2NavProvider>
          <CssBaseline />
          <Content />
        </Theme2NavProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
