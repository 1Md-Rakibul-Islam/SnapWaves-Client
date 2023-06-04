import React, { useEffect } from "react";
import { getIdUser } from "../../features/users/userIdSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Typography } from "@mui/material";
import ProgressLoading from "../Loadings/Progress";

const UserComment = ({ comment }) => {
  const dispatch = useDispatch();
  const userById = useSelector((state) => state.userById.user);
  const loading = useSelector((state) => state.userById.loading);

  useEffect(() => {
    dispatch(getIdUser(comment?.userId));
  }, [comment?.userId]);

  if (loading) {
    return <ProgressLoading />;
  }
  // console.log(userById);
  return (
    <Box display="flex" alignItems="center" mb={1.5}>
      <Avatar sx={{width: 50, height: 50}} src={userById?.profileImg} alt="User Avatar" />
      <Box ml={2} bgcolor="#ebccff" borderRadius={5} p={1.5}>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          {userById?.name}
        </Typography>
        <Typography variant="body1">{comment?.comment}</Typography>
      </Box>
    </Box>
  );
};

export default UserComment;
