import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { UserDataContext } from '../../context/UserData';


export const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserDataContext);

    if (!user?._id) {
        return <Navigate to="/login" replace />
    }
    return <>{children}</>;
}

