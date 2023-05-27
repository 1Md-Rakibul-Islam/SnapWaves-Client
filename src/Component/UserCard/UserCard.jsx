import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Lnk from "@mui/material/Link";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const currentUser = useSelector((state) => state.currentUser.user)

  return (
    <Box
      sx={{
        width: 231,
        maxHeight: 231,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        columnGap: 1,
        backgroundColor: "white",
        p: 1.5,
        borderRadius: 5,
      }}
    >
      <Avatar
        src={user?.profileImg}
        sx={{ width: 80, height: 80, mb: 1, bgcolor: "", border: "2px solid blue" }}
        aria-label="recipe"
      />

      <Typography fontWeight={10} fontSize={20} sx={{ fontStyle: "bold" }}>
        {user?.name}
      </Typography>
      {/* <Typography fontSize={14}>{user?.email}</Typography> */}
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Typography fontSize={14}>
          Followers {user?.followers?.length}
        </Typography>
        <Typography fontSize={14}>
          Following {user?.following?.length}
        </Typography>
      </Box>
      <Link to={'/profile'}><Lnk>Profile</Lnk></Link>
      { user?._id !== currentUser?._id && <Button size="small" sx={{mt: 2, }} fullWidth color="info">Follow</Button>}
    </Box>
  );
};

export default UserCard;