import { Avatar, Box, Button, Input, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import PostCreateModal from '../Modals/PostCreateModal';
import { useSelector } from 'react-redux';

const CreatePost = () => {
    const currentUser = useSelector((state) => state.currentUser.user);

return (
        <Paper elevation={4} sx={{display: 'flex', justifyContent: 'space-between', justifyItems: 'center', bgcolor: 'white', p: 1, borderRadius: 50}}>
            <Box
                sx={{display: 'flex', justifyItems: 'center', columnGap: 2 }}
                >
                <Avatar src={currentUser?.profileImg} />
                <Typography sx={{mt: 1.2}}>What's on your mind?</Typography>
            </Box>
            <PostCreateModal ButtonName={'Create'} />
        </Paper>
    );
};

export default CreatePost;