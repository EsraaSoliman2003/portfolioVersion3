import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default routes;
