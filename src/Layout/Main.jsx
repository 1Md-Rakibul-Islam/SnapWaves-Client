import React from "react";
import MainNavBar from "../Component/MainNavBAr/MainNavBar";
import { Outlet } from "react-router-dom";

import {
  Avatar,
  Box,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import UserCard from "../Component/UserCard/UserCard";
import RightSideNav from "../Component/RightSideNav/RightSideNav";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((state) => state.currentUser.user);
  // console.log(user);

  return (
    <Container>
      <MainNavBar />
      <Box sx={{ display: "flex", my: { md: 5, xs: 2 } }}>
        <Box
          sx={{
            display: { lg: "block", xs: "none" },
            minWidth: "240px",
            padding: "5px",
            borderRadius: "15px",
            height: "80vh",
          }}
        >
          <Box sx={{ position: "fixed" }}>
            <UserCard user={user} />
          </Box>
          <RightSideNav />
        </Box>
        <Outlet></Outlet>
      </Box>
    </Container>
  );
};

export default Main;
