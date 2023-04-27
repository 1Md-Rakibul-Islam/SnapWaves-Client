import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React from "react";
import PostCreateModal from "../Modals/PostCreateModal";

const RightSideNav = () => {
  const navItems = ["Home", "About", "Contact"];

  return (
    <List
      sx={{
        backgroundColor: "white",
        p: 1.5,
        borderRadius: 5,
        mt: 2,
        height: "68vh",
      }}
    >
      <ListItem disablePadding>
        <ListItemButton sx={{ ":hover": { color: "primary.main" }, my: 1 }}>
          <HomeIcon sx={{ mr: 2, fontSize: 32 }}></HomeIcon>{" "}
          <ListItemText primary={"Home"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ ":hover": { color: "primary.main" }, my: 1 }}>
          <NotificationsIcon sx={{ mr: 2, fontSize: 32 }}></NotificationsIcon>{" "}
          <ListItemText primary={"Notifications"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ ":hover": { color: "primary.main" }, my: 1 }}>
          <MailIcon sx={{ mr: 2, fontSize: 32 }}></MailIcon>{" "}
          <ListItemText primary={"Messagese"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ ":hover": { color: "primary.main" }, my: 1 }}>
          <AccountCircleRoundedIcon
            sx={{ mr: 2, fontSize: 32 }}
          ></AccountCircleRoundedIcon>{" "}
          <ListItemText primary={"Profile"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ ":hover": { color: "primary.main" }, my: 1 }}>
          <SettingsIcon sx={{ mr: 2, fontSize: 32 }}></SettingsIcon>{" "}
          <ListItemText primary={"Settings"} />
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
