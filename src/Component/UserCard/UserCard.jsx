import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const UserCard = ({userCardStyles, name, email, image}) => {
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
      <Avatar sx={{ bgcolor: "" }} aria-label="recipe">
        <img src="" alt="Img" />
      </Avatar>
      <Box>
        <Typography fontWeight={10} fontSize={16} sx={{ fontStyle: "bold" }}>{name}</Typography>
        <Typography fontSize={14}>{email}</Typography>
      </Box>
    </Box>
  );
};

export default UserCard;
