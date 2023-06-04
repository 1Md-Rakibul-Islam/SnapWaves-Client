import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useSelector } from 'react-redux';
import ProgressLoading from '../../Component/Loadings/Progress';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const currentUser = useSelector((state) => state?.currentUser?.user);
    const userLoading = useSelector((state) => state?.currentUser?.loading);

    if(loading){
        return <ProgressLoading />
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default PrivateRoute;