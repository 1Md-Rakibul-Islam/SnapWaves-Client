import React from 'react';
import MainNavBar from '../Component/MainNavBAr/MainNavBar';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const Main = () => {
    return (
        <Container>
            <MainNavBar />
            <Outlet />
        </Container>
    );
};

export default Main;