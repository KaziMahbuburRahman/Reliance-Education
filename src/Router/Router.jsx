import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Account/Login";
import NavContact from "../Pages/Contact/NavContact";
import Student_Service_Nav from "../Pages/Student_Service_Nav/Student_Service_Nav";
import About_US from "../Pages/About_us/About_US";
import Associates from "../Pages/Associates/Associates";
import Scholarships from "../Pages/Scholarships/Scholarships";
import ScholarshipsDetails from "../Pages/Scholarships/ScholarshipsDetails/ScholarshipsDetails";

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
        path: "/about",
        element: <About_US />,
      },
      {
        path: "/courses",
        element: <Home />,
      },
      {
        path: "/universitys",
        element: <Home />,
      },
      {
        path: "/scholarships",
        element: <Scholarships />,
      },
      {
        path: "/scholarships-details",
        element: <ScholarshipsDetails />,
      },
      {
        path: "/associates",
        element: <Associates />,
      },
      {
        path: "/student_service",
        element: <Student_Service_Nav />,
      },
      {
        path: "/contact",
        element: <NavContact />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
