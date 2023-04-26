import { Avatar, Box, CardHeader, CardMedia, Container, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React from 'react';
import RightSideNav from '../../Component/RightSideNav/RightSideNav';
import PostCard from '../../Component/PostCard/PostCard';
import CreatePost from '../../Component/CreatePost/CreatePost';
import FeturePostCard from '../../Component/FeturePostCard/FeturePostCard';

const Home = () => {
    return (
        <Container sx={{ minHeight: '100vh', my: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'stretch', columnGap: 3.5, my: 5 }} >
            <Box sx={{ display: { lg: "block", xs: "none" }, backgroundColor: "white", minWidth: "240px", padding: "5px", borderRadius: "15px", height: "80vh" }} >
                <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                </Avatar>
                }
                title="Rakibul Islam"
                subheader="rakibul9bd@gmail.com"
                />

                <RightSideNav />
            </Box>
            <Box sx={{ width: "100%", overflowY: "scroll", height: "80vh", "& > *": { marginTop: "1.25rem", marginBottom: "1.25rem"}}}>
                    <Box sx={{display: 'flex', columnGap: 2, overflowY: "scroll",}}>
                        <FeturePostCard></FeturePostCard>
                        <FeturePostCard></FeturePostCard>
                        <FeturePostCard></FeturePostCard>
                        <FeturePostCard></FeturePostCard>
                        <FeturePostCard></FeturePostCard>
                    </Box>
                    <CreatePost />
                    <PostCard />
                <Box sx={{ display: 'flex', justifyContent: 'end', mt: 4 }} >
                    <nav aria-label="Page navigation">

                    </nav>
                </Box>
            </Box>
            <Box sx={{ display: { sm: "block", xs: "none" }, backgroundColor: "white", minWidth: "240px", padding: "5px", borderRadius: "15px", height: "80vh" }}>
              
            </Box>
        </Box>
    </Container>
    );
};

export default Home;