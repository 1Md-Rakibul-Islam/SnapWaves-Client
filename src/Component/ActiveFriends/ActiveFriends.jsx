import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

const ActiveFriends = () => {
  return (
    <AvatarGroup sx={{justifyContent: 'center'}} total={24}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
  );
};

export default ActiveFriends;
