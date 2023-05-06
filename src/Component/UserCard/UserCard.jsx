import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const UserCard = ({userCardStyles, name, email, image}) => {
  return (
    <Box
      sx={{
        width: 218,
        display: "flex",
        alignItems: "center",
        columnGap: 1,
        backgroundColor: "white",
        p: 1.5,
        borderRadius: 5,
      }}
    >
      <Avatar src={image} sx={{ bgcolor: "" }} aria-label="recipe" />
      <Box>
        <Typography fontWeight={10} fontSize={16} sx={{ fontStyle: "bold" }}>{name}</Typography>
        <Typography fontSize={14}>{email}</Typography>
      </Box>
    </Box>
  );
};

export default UserCard;
