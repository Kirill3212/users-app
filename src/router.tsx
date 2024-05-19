import { createHashRouter } from "react-router-dom";

import { PATH_PAGE } from "./constants";

import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import Users from "./pages/Users";
import MyUsers from "./pages/MyUsers";
import Comments from "./pages/Comments";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: PATH_PAGE.home,
        element: <Home />,
        children: [
          {
            path: PATH_PAGE.users,
            element: <Users />,
          },
          {
            path: PATH_PAGE.adduser,
            element: <AddUser />,
          },
          {
            path: PATH_PAGE.myusers,
            element: <MyUsers />,
          },
          { path: PATH_PAGE.comments, element: <Comments /> },
        ],
      },
    ],
  },
]);
