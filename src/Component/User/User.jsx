import { Avatar, Box, Button, Typography } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import React from "react";

const User = ({ user }) => {

  

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: 3,
        // justifyContent: "",
        backgroundColor: "white",
        p: 1,
        borderRadius: 5,
      }}
    >
      <Avatar
        src={user?.profileImg}
        sx={{ width: 50, height: 50, border: "1px solid blue", bgcolor: "" }}
        aria-label="recipe"
      />

      <Box sx={{ mt: -0.7 }}>
        <Typography mb={0.5}>{user?.name}</Typography>
        <Button sx={{ py: 0.1, bgcolor: purple[900] }}>Follow</Button>
      </Box>
    </Box>
  );
};

export default User;
