import * as authService from "../../services/authService";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { UserDataContext } from "../../context/UserData";

export const Register = () => {

    const { userLogin } = useContext(UserDataContext);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();


        const { username, email, password, confirmPassword } = Object.fromEntries(new FormData(e.target));

        if (!(username && email && password && confirmPassword)) {
            alert("Field all fields")
        } else if (password != confirmPassword) {
            alert("Password mismatch")
        }
        else {

            authService.register(email, password)
                .then(userData => {
                  
                    if (userData.message) {
                       
                    } else {
                        userLogin(userData);
                        localStorage.setItem("user", JSON.stringify(userData));
                        navigate('/');
                    }

                });


        }
    }

    return (
        <div className="register">
            <form className="form-register" onSubmit={submitHandler}>
                <div className="title">Register</div>

                <div className="input-container ic1">
                    <input id="username" name="username" className="input" type="text" placeholder=" " />
                    <div className="cut cut-medium" />
                    <label htmlFor="username" className="placeholder">
                        Username
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="email" name="email" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short" />
                    <label htmlFor="email" className="placeholder">
                        Email
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="password" name="password" className="input" type="password" placeholder=" " />
                    <div className="cut cut-medium" />
                    <label htmlFor="password" className="placeholder">
                        Password
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="confirm-password" name="confirmPassword" className="input" type="password" placeholder=" " />
                    <div className="cut" />
                    <label htmlFor="confirm-password" className="placeholder">
                        Repeat Password
                    </label>
                </div>
                <button type="text" className="submit">
                    submit
                </button>
            </form>
        </div>
    );

};