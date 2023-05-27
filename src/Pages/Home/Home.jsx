import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostCard from "../../Component/PostCard/PostCard";
import CreatePost from "../../Component/CreatePost/CreatePost";
import FeturePostCard from "../../Component/FeturePostCard/FeturePostCard";
import ActiveFriends from "../../Component/ActiveFriends/ActiveFriends";
import User from "../../Component/User/User";
import { PeopleAltRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/users/usersSlice";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const currentUser = useSelector((state) => state.currentUser.user);
  const currentUsers = useSelector((state) => state.currentUser.user);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUsers.users);
  const loadin = useSelector((state) => state.getUsers.loading);

  useEffect(() => {
    dispatch(getUsers());
  }, [users]);

  // console.log(users);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://snapwave.vercel.app/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, [posts]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://snapwave.vercel.app/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, [posts]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 3,
        overflowY: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          overflowY: "scroll",
          height: "80vh",
          "& > *": { marginTop: "1.25rem", marginBottom: "1.25rem" },
        }}
      >
        <Box sx={{ display: "flex", columnGap: 2, overflowY: "scroll" }}>
          <FeturePostCard></FeturePostCard>
          <FeturePostCard></FeturePostCard>
          <FeturePostCard></FeturePostCard>
          <FeturePostCard></FeturePostCard>
          <FeturePostCard></FeturePostCard>
          <FeturePostCard></FeturePostCard>
          <FeturePostCard></FeturePostCard>
        </Box>
        <CreatePost />
        {posts?.map((post) => (
          <PostCard post={post} />
        ))}
        <Box sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
          <nav aria-label="Page navigation"></nav>
        </Box>
      </Box>
      <Box
        sx={{
          display: { sm: "block", xs: "none" },
          minWidth: "240px",
          padding: "5px",
          borderRadius: "15px",
          height: "80vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ p: 1, my: 1.5 }}>
            <Typography sx={{ mb: 1, alignItems: "center" }}>
              Active Friends
            </Typography>
            <ActiveFriends />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "5px",
            mt: 2.2,
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "space-between", p: 1.5 }}
          >
            <Typography>Suggestion</Typography>
            <PeopleAltRounded />
          </Box>

          <Box
            sx={{
              width: "100%",
              overflowY: "scroll",
              height: "73vh",
            }}
          >
            <Box
              sx={{
                width: "100%",
                overflowY: "scroll",
                overflowX: "hidden",
                height: "73vh",
              }}
            >
              {users?.result
                ?.filter((user) => user?._id !== currentUser?._id)
                ?.map((user) => (
                  <User key={user?._id} user={user} />
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
