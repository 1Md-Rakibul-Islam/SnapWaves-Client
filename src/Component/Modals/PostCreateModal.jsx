import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import React, { useState } from "react";
import UserCard from "../UserCard/UserCard";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 3,
};

const PostCreateModal = ({ ButtonName }) => {

    
   // emoji
   const [isPickerVisible, setPickerVisible] = useState(false);
   const [emoji, setEmoji] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(emoji);

  return (
    <div>
      <Button
        size="small"
        sx={{ borderRadius: 40, px: 3, py: 1 }}
        onClick={handleOpen}
      >
        {ButtonName}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 600,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              textAlign={"center"}
              variant="h6"
              component="h2"
            >
              Create Post
            </Typography>
            <UserCard />
            <TextField
              id="standard-multiline-static"
              label="What is your mind?"
              multiline
              rows={3}
              defaultValue={emoji}
              variant="standard"
              sx={{ width: "100%", fontSize: 50 }}
            />
            <label htmlFor="uploadImg" className="text-center">
              <InsertPhotoIcon
                sx={{ color: "primary.green", fontSize: 30, cursor: "pointer" }}
              ></InsertPhotoIcon>
            </label>

            <EmojiEmotionsIcon sx={{color: 'black', fontSize: 30, cursor: "pointer"}} onClick={ () => setPickerVisible(!isPickerVisible)} />

            <Box className={`${isPickerVisible ? 'block': 'hidden'}`}>
                <Picker
                data={data}
                previewPosition={'none'}
                onEmojiSelect={(emoji) => {
                    setEmoji(emoji.native)
                    setPickerVisible(!isPickerVisible)
                }}
                theme={'auto'}
                dynamicWidth={false}
                
                />
            </Box>

            <TextField
              id="uploadImg"
              type="file"
              //   onChange={handleFileChange}
              sx={{ width: "100%", mt: 2, display: "none" }}
            />
            <Button sx={{ width: "100%", mt: 2 }}>Post</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PostCreateModal;
