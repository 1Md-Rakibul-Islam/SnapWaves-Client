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

const Main = () => {
  return (
    <Container>
      <MainNavBar />
      <Box sx={{ display: "flex", my: 5 }}>
        <Box
          sx={{
            display: { lg: "block", xs: "none" },
            minWidth: "240px",
            padding: "5px",
            borderRadius: "15px",
            height: "80vh",
          }}
        >
          <UserCard name={"Rakibul Islam"} email={"rakibul9bd@gmail.com"} />
          <RightSideNav />
        </Box>
        <Outlet></Outlet>
      </Box>
    </Container>
  );
};

export default Main;
