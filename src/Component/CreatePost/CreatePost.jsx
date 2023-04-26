import { Avatar, Box, Button, Input, TextField, Typography } from '@mui/material';
import React from 'react';

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
            <Button size='small' sx={{ borderRadius: 40, px: 3, py: 1}}>
              Post
            </Button>
        </Box>
    );
};

export default CreatePost;