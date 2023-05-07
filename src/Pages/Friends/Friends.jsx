import React from 'react';
import UserCard from '../../Component/UserCard/UserCard';
import { Container, Grid } from '@mui/material';

const Friends = () => {
    const currentUser = {
        "name": "Rakib"
    }
    return (
        <Grid container justifyContent={"center"} gap={2}>
            <UserCard currentUser={currentUser} />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </Grid>
    );
};

export default Friends;