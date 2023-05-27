import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Chat from "../Pages/Chat/Chat";
import Friends from "../Pages/Friends/Friends";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";
import Notifications from "../Pages/Notifications/Notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },

      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
