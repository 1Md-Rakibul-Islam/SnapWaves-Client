import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
            {comments?.map(comment => <div>{comment?.comment}</div>)}
        </Box>
      </Modal>
    </div>
  );
};

export default CommentsOpenModal;
