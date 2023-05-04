import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Message from "../Pages/Message/Message";
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
                path: '/',
                element: <Home />
            },
            {
                path: '/notifications',
                element: <Notifications />
            },
            {
                path: '/message',
                element: <Message />
            },
            {
                path: '/friends',
                element: <Friends />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/settings',
                element: <Settings />
            },
            {
              path: "*",
              element: <Error />,
            }
        ]
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
])