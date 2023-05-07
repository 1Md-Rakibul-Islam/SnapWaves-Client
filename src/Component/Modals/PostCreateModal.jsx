import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import React, { useContext, useState } from "react";
import UserCard from "../UserCard/UserCard";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { AuthContext } from "../../Context/AuthProvider";
import { savePost } from "../../Hook/useSavePost";
import { useSelector } from "react-redux";

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [desc, setDesc] = useState("");
  const currentUser = useSelector((state) => state.currentUser.user);

  // emoji
  //  const [isPickerVisible, setPickerVisible] = useState(false);
  //  const [emoji, setEmoji] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(emoji);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(desc, selectedFile);

    //new
    const formData = new FormData();
    formData.append("image", selectedFile);

    const url = `https://api.imgbb.com/1/upload?key=06ce6f925ad5f14c1f00b8790294f2a5`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.status) {
          savePost(currentUser?._id, desc, imageData.data.url);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={style}>
              <Typography
                id="transition-modal-title"
                textAlign={"center"}
                variant="h6"
                component="h2"
              >
                Create Post
              </Typography>

              <Box
                sx={{
                  width: 231,
                  display: "flex",
                  alignItems: "center",
                  columnGap: 1,
                  backgroundColor: "white",
                  p: 1.5,
                  borderRadius: 5,
                }}
              >
                <Avatar src={currentUser?.profileImg} sx={{ bgcolor: "" }} aria-label="recipe" />
                <Box>
                  <Typography
                    fontWeight={10}
                    fontSize={16}
                    sx={{ fontStyle: "bold" }}
                  >
                    {currentUser?.name}
                  </Typography>
                  {/* <Typography fontSize={14}>{currentUser?.email}</Typography> */}
                </Box>
              </Box>
              <TextField
                id="desc"
                label="What is your mind?"
                name="desc"
                multiline
                rows={3}
                // defaultValue={emoji}
                variant="standard"
                sx={{ width: "100%", fontSize: 50 }}
                fullWidth
                onChange={(event) => setDesc(event.target.value)}
              />
              <label htmlFor="uploadImg" className="text-center">
                <InsertPhotoIcon
                  sx={{
                    color: "primary.green",
                    fontSize: 30,
                    cursor: "pointer",
                  }}
                ></InsertPhotoIcon>
              </label>

              {/* <EmojiEmotionsIcon sx={{color: 'black', fontSize: 30, cursor: "pointer"}} onClick={ () => setPickerVisible(!isPickerVisible)} />

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
            </Box> */}

              <TextField
                id="uploadImg"
                type="file"
                name="image"
                onChange={handleFileChange}
                sx={{ width: "100%", mt: 2, display: "none" }}
              />
              <Button onClick={handleSubmit} type="submit" fullWidth>
                Post
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PostCreateModal;
