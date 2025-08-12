import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
// import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/technologies", element: <Technologies /> },
      // { path: "/certificates", element: <Certificates /> },
      { path: "/contact", element: <Contact /> },

    ],
  },
]);

export default routes;
