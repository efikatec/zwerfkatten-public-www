import { CssBaseline, Box, Stack, Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, Theme2NavProvider } from "../contexts";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Main from "./Main";

const Content = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "primary.main",
      }}
    >
      <Stack direction="column" spacing={2}>
        <Header />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <Container maxWidth="xl">
            <Stack direction="row" spacing={2}>
              <Sidebar />
              <Main />
            </Stack>
          </Container>
        </Box>
      </Stack>
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
