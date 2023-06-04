// import React, { useEffect, useState } from "react";
// import { fetchUser } from "../../api/UsersRequests";

// const Conversation = ({ data, currentUser }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const userId = data.members.find((id) => id !== currentUser);
//     console.log(userId);
//     const getUserData = async () => {
//       try {
//         const { data } = await fetchUser(userId);
//         setUserData(data?.result);
//         console.log(data?.result);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getUserData();
//   }, []);

//   return (
//     <div>

//     </div>
//   )
// };

// export default Conversation;

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../api/UsersRequests";
import { Avatar, Box, Typography } from "@mui/material";
const Conversation = ({ data, currentUser, online }) => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = data?.members?.find((id) => id !== currentUser);
    console.log(userId);
    const getUserData = async () => {
      try {
        const { data } = await fetchUser(userId);
        setUserData(data?.result);
        // console.log(data?.result);
        // dispatch({type:"SAVE_USER", data:data})
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  
  return (
    <>
      <div className="follower conversation">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: {md: 'start', sm: 'center'},gap: 1 }}>
          {/* {online && <div className="online-dot"></div>} */}
          <Avatar
            src={userData?.profileImg}
            alt="Profile"
            className="followerImage"
            sx={{
              // width: "50px",
              // height: "50px",
              backgroundColor: online ? "green" : "red",
            }}
          />
          
          <div className="name" style={{ fontSize: "0.8rem" }}>
            <Typography>{userData?.name}</Typography>
            <p style={{ color: online ? "#51e200" : "red" }}>
              {online ? "Online" : "Offline"}
            </p>
          </div>
        </Box>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
