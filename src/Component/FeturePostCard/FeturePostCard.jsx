import { Avatar, Box, Card, Paper, Typography } from '@mui/material';
import React from 'react';

const FeturePostCard = () => {
    return (
        <Paper elevation={4} sx={{
            minWidth: '110px',
            minHeight: '180px',
            p: 1.5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '15px',
            bgcolor: 'white'
            }}>
            <Avatar>
                <img src='' alt='' />
            </Avatar>
            <Typography fontSize={13}>
                Rakibul Islam
            </Typography>
        </Paper>
    );
};

export default FeturePostCard;