import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
]);

export default Router;
