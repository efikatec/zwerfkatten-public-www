import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useLazyRoutes } from "../contexts";

const Main = () => {
  const lazyRoutes = useLazyRoutes();

  return (
    <main>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Suspense
          fallback={
            <div>
              <CircularProgress color="secondary" />
            </div>
          }
        >
          <Routes>
            {lazyRoutes.map((one, index) => {
              const Page = one.Page;

              return <Route key={index} path={one.path} element={<Page />} />;
            })}
          </Routes>
        </Suspense>
      </Box>
    </main>
  );
};

export default Main;
