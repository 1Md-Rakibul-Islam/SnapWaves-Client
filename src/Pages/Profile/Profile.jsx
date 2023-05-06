import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import UserDetailsInfo from "../../Component/UserDetailsInfo/UserDetailsInfo";
import CreatePost from "../../Component/CreatePost/CreatePost";
import { useSelector } from "react-redux";

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);

  const currentUser = useSelector((state) => state.currentUser.user);
  const loading = useSelector((state) => state.currentUser.loading);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const StyledDivider = styled(Divider)(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }));

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        overflowY: "scroll",
        height: "100vh",
        borderRadius: 2
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Paper>
            <Box sx={{ width: '100%', height: 180, bgcolor: 'primary.main'}}></Box>
            <Box
              textAlign={"center"}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: -12
              }}
            >
              <Avatar src={currentUser?.profileImg} sx={{ width: 140, height: 140 }} />
              <Typography variant="h5">
                {currentUser?.name}
              </Typography>
              <Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">
                    {currentUser?.about}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <UserDetailsInfo currentUser={currentUser} />

          {/* <CreatePost /> */}

          <Paper sx={{ p: 2, mt: 2, Width: "100%" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="Profile Tabs"
            >
              <Tab label="Posts" />
              <Tab label="Photos" />
              <Tab label="Friends" />
              <Tab label="About" />
            </Tabs>
            {tabValue === 0 && (
              <Box sx={{ mt: 2 }}>
                <CreatePost />
                <Typography sx={{mt: 5}} variant="h6" gutterBottom>
                  Recent Posts
                </Typography>
                <StyledDivider />
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse nec magna fermentum, dapibus purus et, hendrerit
                  urna. Vivamus eu elit id nibh volutpat fringilla.
                </Typography>
              </Box>
            )}
            {tabValue === 1 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Photos
                </Typography>
                <StyledDivider />
                <Box sx={{ display: "flex", justifyContent: 'center', flexWrap: "wrap", gap: 2 }}>
                  <img
                    src="https://via.placeholder.com/180"
                    alt="placeholder"
                  />
                  <img
                    src="https://via.placeholder.com/180"
                    alt="placeholder"
                  />
                  <img
                    src="https://via.placeholder.com/180"
                    alt="placeholder"
                  />
                  <img
                    src="https://via.placeholder.com/180"
                    alt="placeholder"
                  />
                </Box>
              </Box>
            )}
            {tabValue === 2 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Friends
                </Typography>
                <StyledDivider />
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <Avatar sx={{ width: 48, height: 48, margin: 1 }} />
                  <Avatar sx={{ width: 48, height: 48, margin: 1 }} />
                  <Avatar sx={{ width: 48, height: 48, margin: 1 }} />
                  <Avatar sx={{ width: 48, height: 48, margin: 1 }} />
                  <Avatar sx={{ width: 48, height: 48, margin: 1 }} />
                </Box>
              </Box>
            )}
            {tabValue === 3 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <StyledDivider />
                <Typography variant="body1" gutterBottom>
                  {currentUser?.about}
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
