import React, { useContext, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import RightSideNav from "../RightSideNav/RightSideNav";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../features/users/userSlice";
import ProgressLoading from "../Loadings/Progress";

const drawerWidth = 260;

const MainNavBar = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.user);
  const loading = useSelector((state) => state.currentUser.loading);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut().then().catch();
  };

  // console.log(user?.email);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    dispatch(getCurrentUser(user?.email));
  }, [user?.email]);

  if (loading) {
    return <ProgressLoading />;
  }

  // console.log(currentUser);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    color: "white",
    backgroundColor: alpha(theme.palette.primary.light, 0.75),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.light, 1),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SnapWaves
      </Typography>
      <Divider />
      <RightSideNav />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "primary.main",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 1,
            }}
          >
            <IconButton
              color="white"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              // sx={{ mr: 1, display: { sm: 'none' } }}
              sx={{ display: { lg: "none", xs: "block" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link to={"/"}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "white",
                  display: { md: "block", xs: "none" },
                }}
              >
                SnapWaves
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search
              style={{
                width: "260px",
                borderRadius: 50,
                marginRight: 10,
                // bgcolor: 'primary.light'
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ display: { sm: "block", xs: "none" } }}>
              <IconButton>
                <Link to={"/"}>
                  <HomeIcon sx={{ fontSize: 31, mx: 0.5, color: "white" }} />
                </Link>
              </IconButton>
              <IconButton>
                <Link to={"/notifications"}>
                  <NotificationsIcon
                    sx={{ fontSize: 30, mx: 0.5, color: "white" }}
                  />
                </Link>
              </IconButton>
              <IconButton>
                <Link to={"/chat"}>
                  <MailIcon sx={{ fontSize: 28, mx: 0.5, color: "white" }} />
                </Link>
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Tooltip title="Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src={`${currentUser?.profileImg}`} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "55px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to={"/profile"}>
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to={"/settings"}>
                  <Typography textAlign="center">Settings</Typography>
                </Link>
              </MenuItem>

              {user?.email ? (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={handelLogOut} textAlign="center">
                    Logout
                  </Typography>
                </MenuItem>
              ) : (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to={"/signup"}>
                      <Typography textAlign="center">Register</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to={"/login"}>
                      <Typography textAlign="center">Login</Typography>
                    </Link>
                  </MenuItem>
                </>
              )}

              {/* ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },
            display: { lg: "none", xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
};

MainNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainNavBar;
