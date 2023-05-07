import { Avatar, Box, Divider, Typography } from "@mui/material";
import Lnk from "@mui/material/Link";
import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ currentUser }) => {
  return (
    <Box
      sx={{
        width: 231,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        columnGap: 1,
        backgroundColor: "white",
        p: 1.5,
        borderRadius: 5,
      }}
    >
      <Avatar
        src={currentUser?.profileImg}
        sx={{ width: 80, height: 80, mb: 1, bgcolor: "", border: "2px solid blue" }}
        aria-label="recipe"
      />

      <Typography fontWeight={10} fontSize={20} sx={{ fontStyle: "bold" }}>
        {currentUser?.name}
      </Typography>
      {/* <Typography fontSize={14}>{currentUser?.email}</Typography> */}
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Typography fontSize={14}>
          Followers {currentUser?.followers?.length}
        </Typography>
        <Typography fontSize={14}>
          Following {currentUser?.following?.length}
        </Typography>
      </Box>
      <Link to={'/profile'}><Lnk>Profile</Lnk></Link>
    </Box>
  );
};

export default UserCard;


// import { Avatar, Box, Typography } from "@mui/material";
// import React from "react";

// const UserCard = ({userCardStyles, name, email, image}) => {
//   return (
//     <Box
//       sx={{
//         width: 231,
//         display: "flex",
//         alignItems: "center",
//         columnGap: 1,
//         backgroundColor: "white",
//         p: 1.5,
//         borderRadius: 5,
//       }}
//     >
//       <Avatar src={image} sx={{ bgcolor: "" }} aria-label="recipe" />
//       <Box>
//         <Typography fontWeight={10} fontSize={16} sx={{ fontStyle: "bold" }}>{name}</Typography>
//         <Typography fontSize={14}>{email}</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default UserCard;
