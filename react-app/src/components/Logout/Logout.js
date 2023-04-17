import { useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { UserDataContext } from "../../context/UserData";
import * as authService from "../../services/authService";


export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(UserDataContext);

    useEffect(() => {
        authService.logout(user?.accessToken)
            .then(() => {
                userLogout();
                localStorage.removeItem('user');
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    });

    return null;
}