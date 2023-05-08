import React, { useEffect } from 'react';
import UserCard from '../../Component/UserCard/UserCard';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/users/usersSlice';

const Friends = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser.user);
    const users = useSelector((state) => state.getUsers.users);
    const loadin = useSelector((state) => state.getUsers.loading);
  
    useEffect(() => {
      dispatch(getUsers());
    }, [users]);

    console.log(users);


    return (
        <Grid container justifyContent={"center"} gap={2}>
            {
                users?.result?.filter(user => user?._id !== currentUser?._id)?.map( user => <UserCard key={user?._id} user={user} />)
            }
        </Grid>
    );
};

export default Friends;