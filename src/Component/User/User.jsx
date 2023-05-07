import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const User = () => {
    return (
        <Box
        sx={{
          width: 231,
          display: "flex",
          alignItems: "center",
          columnGap: 1,
          backgroundColor: "white",
          p: 1.5,
          borderRadius: 5,
        }}
      >
        <Avatar src={""} sx={{ bgcolor: "" }} aria-label="recipe" />
        <Box>
          <Typography
            fontWeight={10}
            fontSize={16}
            sx={{ fontStyle: "bold" }}
          >
            {"Raisul Islam"}
          </Typography>
          {/* <Typography fontSize={14}>{currentUser?.email}</Typography> */}
        </Box>
      </Box>
    );
};

export default User;