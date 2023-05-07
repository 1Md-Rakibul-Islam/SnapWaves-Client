import { Avatar, Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

const User = ({user}) => {
  return (
    <Box
      sx={{

        display: "flex",
        alignItems: "center",
        columnGap: 3,
        justifyContent: "center",
        backgroundColor: "white",
        p: 1,
        borderRadius: 5,
      }}
>
      <Avatar src={""} sx={{ width: 50, height: 50, border: "1px solid blue",  bgcolor: "" }} aria-label="recipe" />
      
      <Box sx={{ mt: -.7 }}>
        <Typography mb={.5} >Rakibul Islam</Typography>
        <Button color="info" sx={{py: .1, }}>Follow</Button>
        {/* <Button size="small">Inbox</Button> */}
      </Box>
    </Box>
  );
};

export default User;
