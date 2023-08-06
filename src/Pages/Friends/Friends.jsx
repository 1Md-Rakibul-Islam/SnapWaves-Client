import React, { useEffect } from "react";
import UserCard from "../../Component/UserCard/UserCard";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/users/usersSlice";

const Friends = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.user);
  const users = useSelector((state) => state.getUsers.users);
  const loadin = useSelector((state) => state.getUsers.loading);

  useEffect(() => {
    dispatch(getUsers());
  }, [users]);

  return (
    <Grid
      container
      sx={{
        justifyContent: { lg: "flex-start", xs: "center" },
        alignContent: "start",
        gap: {lg: 5, xs: 2},
        mx: 5,
        mt: 2,
      }}
    >
      {users?.result
        ?.filter((user) => user?._id !== currentUser?._id)
        ?.map((user) => (
          <UserCard key={user?._id} user={user} />
        ))}
    </Grid>
  );
};

export default Friends;
