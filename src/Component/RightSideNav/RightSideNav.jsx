import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React from "react";
import PostCreateModal from "../Modals/PostCreateModal";
import {
  GradeOutlined,
  GroupAddRounded,
  GroupAddSharp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const RightSideNav = () => {

  return (
    <List
      sx={{
        backgroundColor: "white",
        p: 1.5,
        borderRadius: 5,
        // mt: 2,
        width: 231,
        // height: "50vh",
        position: 'fixed',
        mt: {sx: 0, md: 26}
      }}
    >
      <ListItem disablePadding>
        <ListItemButton sx={{ width: "100%", my: .5 }}>
          <Link to={"/"}>
            <Box
              sx={{
                display: "flex",
                ":hover": { color: "primary.main" },
                p: .5,
                alignItems: "center",
              }}
            >
              <HomeIcon sx={{ mr: 2, fontSize: 32 }}></HomeIcon>{" "}
              <ListItemText primary={"Home"} />
            </Box>
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ width: "100%", my: .5 }}>
          <Link to={"/notifications"}>
            <Box
              sx={{
                display: "flex",
                ":hover": { color: "primary.main" },
                p: .5,
                alignItems: "center",
              }}
            >
            <NotificationsIcon sx={{ mr: 2, fontSize: 32 }}></NotificationsIcon>{" "}
            <ListItemText primary={"Notifications"} />
            </Box>
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ width: "100%", my: .5 }}>
          <Link to={"/chat"}>
            <Box
              sx={{
                display: "flex",
                ":hover": { color: "primary.main" },
                p: .5,
                alignItems: "center",
              }}
            >
            <MailIcon sx={{ mr: 2, fontSize: 32 }}></MailIcon>{" "}
            <ListItemText primary={"Message"} />
            </Box>
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ width: "100%", my: .5 }}>
          <Link to={"/friends"}>
            <Box
              sx={{
                display: "flex",
                ":hover": { color: "primary.main" },
                p: .5,
                alignItems: "center",
              }}
            >
            <GroupAddSharp sx={{ mr: 2, fontSize: 32 }}></GroupAddSharp>{" "}
            <ListItemText primary={"Friends"} />
            </Box>
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ width: "100%", my: .5 }}>
          <Link to={"/profile"}>
            <Box
              sx={{
                display: "flex",
                ":hover": { color: "primary.main" },
                p: .5,
                alignItems: "center",
              }}
            >
            <AccountCircleRoundedIcon
              sx={{ mr: 2, fontSize: 32 }}
            ></AccountCircleRoundedIcon>{" "}
            <ListItemText primary={"Profile"} />
            </Box>
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem
        sx={{ my: 1, display: "flex", justifyContent: "center" }}
        disablePadding
      >
        <PostCreateModal ButtonName={"Create"} />
      </ListItem>
    </List>
  );
};

export default RightSideNav;
