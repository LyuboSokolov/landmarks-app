import { Navigate, Outlet } from "react-router-dom";

import { useContext } from "react";
import { UserDataContext } from '../../context/UserData';


export const PublicRoute = () => {
    const { user } = useContext(UserDataContext);

    if (user?._id) {
        return <Navigate to="/" replace />
    }
    return <Outlet />;
}
