import React from 'react';
import MainNavBar from '../Component/MainNavBAr/MainNavBar';
import { Outlet } from 'react-router-dom';
// import { Container } from '@mui/material';

// const Main = () => {
//     return (
//         <Container>
//             <MainNavBar />
//             <Outlet />
//         </Container>
//     );
// };

// export default Main;

import {
    Avatar,
    Box,
    CardHeader,
    CardMedia,
    Container,
    IconButton,
    Typography,
  } from "@mui/material";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import EditCalendarIcon from "@mui/icons-material/EditCalendar";

//   import RightSideNav from "../../Component/RightSideNav/RightSideNav";
//   import PostCard from "../../Component/PostCard/PostCard";
//   import CreatePost from "../../Component/CreatePost/CreatePost";
//   import FeturePostCard from "../../Component/FeturePostCard/FeturePostCard";
import UserCard from '../Component/UserCard/UserCard';
import RightSideNav from '../Component/RightSideNav/RightSideNav';

  
  const Main = () => {
    return (
      <Container >
        <MainNavBar />
        <Box
          sx={{ display: "flex",  my: 5 }}
        >
          <Box
            sx={{
              display: { lg: "block", xs: "none" },
              minWidth: "240px",
              padding: "5px",
              borderRadius: "15px",
              height: "80vh",
            }}
          >
            <UserCard name={"Rakibul Islam"} email={"rakibul9bd@gmail.com"} />
            <RightSideNav />
          </Box>
          <Outlet></Outlet>
          {/* <Box
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
            </Box>
            <CreatePost />
            <PostCard />
            <Box sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
              <nav aria-label="Page navigation"></nav>
            </Box>
          </Box> */}
          {/* <Box
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
              <Box
                sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
              >
                <Typography>Message</Typography>
                <EditCalendarIcon />
              </Box>
  
              <Box
                sx={{
                  width: "100%",
                  overflowY: "scroll",
                  height: "73vh",
                  "& > *": { marginTop: "1.25rem", marginBottom: "1.25rem" },
                }}
              >
                <UserCard name={"Rakibul Islam"} />
                <UserCard name={"Rakibul Islam"} />
                <UserCard name={"Rakibul Islam"} />
                <UserCard name={"Rakibul Islam"} />
                <UserCard name={"Rakibul Islam"} />
                <UserCard name={"Rakibul Islam"} />
                <UserCard name={"Rakibul Islam"} />
                <UserCard name={"Rakibul Islam"} />
                <UserCard name={"Rakibul Islam"} />
                <UserCard name={"Rakibul Islam"} />
              </Box>
            </Box>
          </Box> */}
        </Box>
      </Container>
    );
  };
  
  export default Main;
  