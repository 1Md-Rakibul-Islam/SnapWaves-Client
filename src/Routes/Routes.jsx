import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

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
                path: "/signup",
                element: <SignUp />,
            },
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "*",
              element: <Error />,
            }
        ]
    }
])