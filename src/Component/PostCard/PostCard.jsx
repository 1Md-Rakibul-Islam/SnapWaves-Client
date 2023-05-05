import React from "react";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  AspectRatio,
  AspectRatioOutlined,
  Face,
  FavoriteBorder,
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

const PostCard = ({ post }) => {
  const { createdAt, desc, image, likes, updatedAt, userId, _id } = post;

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
            size="md"
            src="/static/logo.png"
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
          <Typography fontWeight="lg">Rakibul Islam</Typography>
          <Typography
            underline="none"
            fontSize="12px"
            sx={{ color: "text.tertiary", my: 0.5 }}
          >
            {createdAt?.length > 10  && createdAt.slice(0, 10)}
          </Typography>
        </Box>
        <IconButton variant="plain" size="sm" sx={{ ml: "auto" }}>
          <MoreHoriz />
        </IconButton>
      </Box>
      <Typography mb={1.5} fontSize="sm">
        {desc}
      </Typography>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          mx: -3,
          borderRadius: 0,
        }}
      >
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              style={{ cursor: "pointer" }}
              src={image}
              alt=""
              loading="lazy"
            />
          </PhotoView>
        </PhotoProvider>
      </Card>
      <Box sx={{ display: "flex", alignItems: "center", mx: -1, my: 1 }}>
        <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
          <IconButton variant="plain" size="sm">
            <FavoriteBorder />
          </IconButton>
          <IconButton variant="plain" size="sm">
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box
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
        </Box>
        <Box sx={{ width: 0, display: "flex", flexDirection: "row-reverse" }}>
          <IconButton variant="plain" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <Link
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
      >
        {likes?.length} Likes
      </Link>
      <Card sx={{ p: "var(--Card-padding)", display: "flex" }}>
        <IconButton size="sm" variant="plain" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input
          variant="outlined"
          placeholder="Add a comment…"
          sx={{ flexGrow: 1, mr: 1 }}
        />
        <Button variant="text" color="primary" sx={{ borderRadius: 40 }}>
          Submit
        </Button>
      </Card>
    </Card>
  );
};

export default PostCard;
