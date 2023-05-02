import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { School, LocationOn, Public, Work } from "@mui/icons-material";

const UserDetailsInfo = () => {
  return (
    <Box sx={{ bgcolor: 'white', p: 3, mb: 2 }}>
      <Box sx={{display: 'flex', justifyItems: 'center', justifyContent: 'space-between'}}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Button>Edit</Button>
      </Box>
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
        <LocationOn sx={{ mr: 1 }} />
        <Typography variant="subtitle1">Dhaka, Bangladesh</Typography>
      </Box>
    </Box>
  );
};

export default UserDetailsInfo;
