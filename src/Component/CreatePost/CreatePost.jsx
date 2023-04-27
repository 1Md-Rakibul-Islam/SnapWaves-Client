import { Avatar, Box, Button, Input, TextField, Typography } from '@mui/material';
import React from 'react';
import PostCreateModal from '../Modals/PostCreateModal';

const CreatePost = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', justifyItems: 'center', bgcolor: 'white', p: 1, borderRadius: 50}}>
            <Box
                sx={{display: 'flex', justifyItems: 'center', columnGap: 2 }}
                >
                <Avatar>
                    <img src='' alt='' />
                </Avatar>
                <Typography sx={{mt: 1.2}}>What's on your mind?</Typography>
            </Box>
            <PostCreateModal ButtonName={'Create'} />
        </Box>
    );
};

export default CreatePost;