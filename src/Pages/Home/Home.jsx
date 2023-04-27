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

import React from "react";
import RightSideNav from "../../Component/RightSideNav/RightSideNav";
import PostCard from "../../Component/PostCard/PostCard";
import CreatePost from "../../Component/CreatePost/CreatePost";
import FeturePostCard from "../../Component/FeturePostCard/FeturePostCard";
import UserCard from "../../Component/UserCard/UserCard";
import ActiveFriends from "../../Component/ActiveFriends/ActiveFriends";

// const Home = () => {
//   return (
//     <Container sx={{ my: 5 }}>
//       <Box
//         sx={{ display: "flex", alignItems: "stretch", columnGap: 3.5, my: 5 }}
//       >
//         <Box
//           sx={{
//             display: { lg: "block", xs: "none" },
//             minWidth: "240px",
//             padding: "5px",
//             borderRadius: "15px",
//             height: "80vh",
//           }}
//         >
//           <UserCard name={"Rakibul Islam"} email={"rakibul9bd@gmail.com"} />
//           <RightSideNav />
//         </Box>
//         <Box
//           sx={{
//             width: "100%",
//             overflowY: "scroll",
//             height: "80vh",
//             "& > *": { marginTop: "1.25rem", marginBottom: "1.25rem" },
//           }}
//         >
//           <Box sx={{ display: "flex", columnGap: 2, overflowY: "scroll" }}>
//             <FeturePostCard></FeturePostCard>
//             <FeturePostCard></FeturePostCard>
//             <FeturePostCard></FeturePostCard>
//             <FeturePostCard></FeturePostCard>
//             <FeturePostCard></FeturePostCard>
//           </Box>
//           <CreatePost />
//           <PostCard />
//           <Box sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
//             <nav aria-label="Page navigation"></nav>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             display: { sm: "block", xs: "none" },
//             minWidth: "240px",
//             padding: "5px",
//             borderRadius: "15px",
//             height: "80vh",
//           }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "white",
//               padding: "5px",
//               borderRadius: "15px",
//             }}
//           >
//             <Box
//               sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
//             >
//               <Typography>Message</Typography>
//               <EditCalendarIcon />
//             </Box>

//             <Box
//               sx={{
//                 width: "100%",
//                 overflowY: "scroll",
//                 height: "73vh",
//                 "& > *": { marginTop: "1.25rem", marginBottom: "1.25rem" },
//               }}
//             >
//               <UserCard name={"Rakibul Islam"} />
//               <UserCard name={"Rakibul Islam"} />
//               <UserCard name={"Rakibul Islam"} />
//               <UserCard name={"Rakibul Islam"} />
//               <UserCard name={"Rakibul Islam"} />
//               <UserCard name={"Rakibul Islam"} />
//               <UserCard name={"Rakibul Islam"} />
//               <UserCard name={"Rakibul Islam"} />
//               <UserCard name={"Rakibul Islam"} />
//               <UserCard name={"Rakibul Islam"} />
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Home;

const Home = () => {
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
        <PostCard />
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

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
          <Typography>Message</Typography>
          <EditCalendarIcon />
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            padding: "5px",
            borderRadius: "15px",
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
    </Container>
  );
};

export default Home;
