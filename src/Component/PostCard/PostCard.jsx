import React, { useEffect, useState } from "react";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  AspectRatio,
  AspectRatioOutlined,
  Face,
  Favorite,
  FavoriteBorder,
  ModeComment,
  ModeCommentOutlined,
  MoreHoriz,
  Padding,
  SendOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Input,
  Link,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { commentPost, likePost } from "../../api/PostsRequests";
import { toast } from "react-hot-toast";
import CommentsOpenModal from "../Modals/CommentsOpenModal";
import { fetchUser } from "../../api/UsersRequests";
import { getIdUser } from "../../features/users/userIdSlice";

const PostCard = ({ post }) => {
  const { createdAt, desc, image, likes, comments, updatedAt, userId, _id } =
    post;

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.user);
  // const postedUser = useSelector((state) => state.getIdUser.userId);
  // const loading = useSelector((state) => state.currentUser.loading);

  // useEffect(() => {
  //   dispatch(getIdUser(userId));
  // }, []);

  // console.log(postedUser?.data);
  const [postedUser, setPostedUser] = useState({});

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/users/${userId}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          // authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
        },
      })
        .then(res => res.json()) // fix here
        .then(data => setPostedUser(data.result))
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  // console.log(postedUser);
  

  const [reacted, setReacted] = useState(likes?.includes(currentUser?._id));
  const [reacts, setReacts] = useState(likes?.length);
  const [comment, setComment] = useState();

  const handleLike = () => {
    likePost(_id, currentUser?._id);
    setReacted((prev) => !prev);
    reacted ? setReacts((prev) => prev - 1) : setReacts((prev) => prev + 1);
  };

  const handleComment = () => {
    toast.success("Comment successfully");
    const userComment = {
      userId: currentUser?._id,
      comment,
    };
    // console.log(userComment);
    commentPost(_id, userComment);
    setComment("");
  };

  // const { data } =  fetchUser(userId);
  // console.log(data);

  return (
    <Card
      variant="outlined"
      sx={{
        Width: "100%",
        borderRadius: 2,
        p: 2.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", pb: 1.5, gap: 2 }}>
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: "-2px",
              borderRadius: "50%",
            },
          }}
        >
          <Avatar
            src={postedUser?.profileImg}
            sx={{
              width: 47,
              height: 47,
              p: 0.5,
              border: "2.5px solid",
              borderColor: "primary.main",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography fontWeight="lg">{postedUser?.name}</Typography>
          <Typography
            underline="none"
            fontSize="12px"
            sx={{ color: "text.tertiary", my: 0.5 }}
          >
            {createdAt?.length > 10 && createdAt.slice(0, 10)}
          </Typography>
        </Box>
        <IconButton variant="plain" size="sm" sx={{ ml: "auto" }}>
          <MoreHoriz />
        </IconButton>
      </Box>
      <Typography mb={1.5} fontSize="sm">
        {desc?.length > 20 ? desc.slice(0, 20) + "....." : desc}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mx: -3,
          borderRadius: 0,
          // width: '100%', height: 260, overflow: 'hidden',
        }}
      >
        <PhotoProvider>
          <PhotoView src={image}>
            <img style={{ cursor: "pointer" }} src={image} alt="" />
          </PhotoView>
        </PhotoProvider>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mx: -1, my: 0.4 }}>
        <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
          <IconButton
            color={`${reacted ? "error" : "white"}`}
            onClick={handleLike}
            variant="plain"
            size="sm"
          >
            <Favorite />
          </IconButton>
          <IconButton variant="plain" size="sm">
            <ModeComment />
          </IconButton>
          {/* <IconButton variant="plain" size="sm">
            <SendOutlined />
          </IconButton> */}
        </Box>
        {/* <Box
          sx={{ display: "flex", alignItems: "center", gap: 0.5, mx: "auto" }}
        >
          {[...Array(5)].map((_, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "50%",
                width: `max(${6 - index}px, 3px)`,
                height: `max(${6 - index}px, 3px)`,
                bgcolor: index === 0 ? "primary.solidBg" : "background.level3",
              }}
            />
          ))}
        </Box> */}
        {/* <Box sx={{ width: 0, display: "flex", flexDirection: "row-reverse" }}>
          <IconButton variant="plain" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box> */}
      </Box>
      <Typography
        component="button"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
      >
        {reacts} Likes
      </Typography>
      <CommentsOpenModal post={post} />

      <Card sx={{ p: "var(--Card-padding)", display: "flex" }}>
        <IconButton size="sm" variant="plain" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input
          variant="outlined"
          name="comment"
          placeholder="Add a comment…"
          sx={{ flexGrow: 1, mr: 1 }}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <IconButton
          onClick={handleComment}
          type="submit"
          variant="text"
          sx={{ borderRadius: 40 }}
          size="sm"
        >
          <SendOutlined />
        </IconButton>
      </Card>
    </Card>
  );
};

export default PostCard;
