import * as authService from "../../services/authService";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { UserDataContext } from "../../context/UserData";

export const Login = () => {
    const { userLogin } = useContext(UserDataContext);

    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();

        const loginData = Object.fromEntries(new FormData(e.target));

        authService.login(loginData)
            .then(userData => {
                console.log(userData);
                if (userData.code) {
                    alert("Invalid email or password")
                } else {
                    userLogin(userData);
                    localStorage.setItem("user", JSON.stringify(userData));
                    navigate('/');
                }

            });




    }
    return (
        <div className="login">
            <form className="form-login" onSubmit={submitHandler}>
                <div className="title">Login</div>

                <div className="input-container ic2">
                    <input id="email" name="email" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short" />
                    <label htmlFor="email" className="placeholder">
                        Email
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="password" name="password" className="input" type="text" placeholder=" " />
                    <div className="cut cut-medium" />
                    <label htmlFor="password" className="placeholder">
                        Password
                    </label>
                </div>
                <button type="text" className="submit">
                    submit
                </button>
            </form>
        </div>

    );
};


