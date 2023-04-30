// import React from 'react';
// import { Avatar, Box, Button, Grid, Paper, Typography } from '@mui/material';

// const Profile = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
//             <Avatar sx={{ width: 100, height: 100 }} />
//             <Box sx={{ ml: 2 }}>
//               <Typography variant="h6" gutterBottom>
//                 John Doe
//               </Typography>
//               <Typography variant="subtitle1" gutterBottom>
//                 Web Developer
//               </Typography>
//               <Button variant="outlined" color="primary">
//                 Edit Profile
//               </Button>
//             </Box>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper sx={{ p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               About Me
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec magna fermentum, dapibus purus et, hendrerit urna. Vivamus eu elit id nibh volutpat fringilla.
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12}>
//           <Paper sx={{ p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               Skills
//             </Typography>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Typography variant="subtitle1" gutterBottom>
//                 React:
//               </Typography>
//               <Box sx={{ mx: 1 }} />
//               <Typography variant="body1" gutterBottom>
//                 Advanced
//               </Typography>
//             </Box>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Typography variant="subtitle1" gutterBottom>
//                 Node.js:
//               </Typography>
//               <Box sx={{ mx: 1 }} />
//               <Typography variant="body1" gutterBottom>
//                 Intermediate
//               </Typography>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Profile;

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

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);

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
        height: "80vh"
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
              <Avatar sx={{ width: 140, height: 140 }} />
              <Typography variant="h5">
                Rakibul Islam
              </Typography>
              <Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse nec magna fermentum, dapibus purus et, hendrerit
                    urna. Vivamus eu elit id nibh volutpat fringilla.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <UserDetailsInfo />
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
                <Typography variant="h6" gutterBottom>
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
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="placeholder"
                    style={{ margin: 5 }}
                  />
                  <img
                    src="https://via.placeholder.com/150"
                    alt="placeholder"
                    style={{ margin: 5 }}
                  />
                  <img
                    src="https://via.placeholder.com/150"
                    alt="placeholder"
                    style={{ margin: 5 }}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse nec magna fermentum, dapibus purus et, hendrerit
                  urna. Vivamus eu elit id nibh volutpat fringilla.
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
