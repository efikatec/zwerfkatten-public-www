import { Routes, Route, RouteProps, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OwnCatPage from "../pages/OwnCatPage";
import Error404Page from "../pages/Error404Page";

const routes: RouteProps[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/own-cat",
    element: <OwnCatPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];

const Main = () => {
  return (
    <main>
      <Routes>
        {routes.map((one, index) => (
          <Route key={index} path={one.path} element={one.element} />
        ))}
      </Routes>
    </main>
  );
};

export default Main;
