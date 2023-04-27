import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const UserCard = ({userCardStyles, email}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: 1,
        backgroundColor: "white",
        p: 1.5,
        borderRadius: 5,
      }}
    >
      <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe"></Avatar>
      <Box>
        <Typography fontWeight={10} fontSize={16} sx={{ fontStyle: "bold" }}>
          Rakibul Islam
        </Typography>
        <Typography fontSize={14}>{email}</Typography>
      </Box>
    </Box>
  );
};

export default UserCard;
