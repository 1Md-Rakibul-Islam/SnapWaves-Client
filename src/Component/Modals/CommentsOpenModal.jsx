import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserComment from "../UserComment/UserComment";

const CommentsOpenModal = ({ post }) => {
  const { createdAt, desc, image, likes, comments, updatedAt, userId, _id } =
    post;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 480,
    borderRadius: 3,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 50,
    p: 4,
    overflowY: "scroll",
    overflowX: "hidden",
  };

  return (
    <div>
      <Typography onClick={handleOpen} sx={{ cursor: "pointer" }}>
        <Link underline="hover">View all {comments?.length} comments</Link>
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {comments?.map(comment => <UserComment key={comment?._id} comment={comment}></UserComment>)}
        </Box>
      </Modal>
    </div>
  );
};

export default CommentsOpenModal;
