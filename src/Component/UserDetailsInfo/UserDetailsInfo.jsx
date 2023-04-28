import React from "react";
import { Box, Typography } from "@mui/material";
import { School, LocationOn, Public, Work } from "@mui/icons-material";

const UserDetailsInfo = () => {
  return (
    <Box sx={{ p: 2, bgcolor: 'white' }}>
      <Typography variant="h6" gutterBottom>
        Intro
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Work sx={{ mr: 1 }} />
        <Typography variant="subtitle1">TechonoSoft LTD</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <School sx={{ mr: 1 }} />
        <Typography variant="subtitle1">
          Shariatpur Polytechnic Institute
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <School sx={{ mr: 1 }} />
        <Typography variant="subtitle1">Jonail M L High School</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <School sx={{ mr: 1 }} />
        <Typography variant="subtitle1">H.S Kinder Garden</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <LocationOn sx={{ mr: 1 }} />
        <Typography variant="subtitle1">Dhaka, Bangladesh</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <LocationOn sx={{ mr: 1 }} />
        <Typography variant="subtitle1">Natore</Typography>
      </Box>
    </Box>
  );
};

export default UserDetailsInfo;
