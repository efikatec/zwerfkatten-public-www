import { CssBaseline, Box, Stack, Container } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <CssBaseline />
      <Header />
      <Box
        sx={{
          padding: "24px",
          width: "100%",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Sidebar />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
            }}
          >
            <Container maxWidth="lg">
              <Main />
            </Container>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default App;
