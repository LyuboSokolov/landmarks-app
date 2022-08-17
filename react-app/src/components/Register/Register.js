export const Register = () => {
    return (
        <div className="register">
            <form className="form-register">
                <div className="title">Register</div>

                <div className="input-container ic1">
                    <input id="username" className="input" type="text" placeholder=" " />
                    <div className="cut cut-medium" />
                    <label htmlFor="username" className="placeholder">
                        Username
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short" />
                    <label htmlFor="email" className="placeholder">
                        Email
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="password" className="input" type="text" placeholder=" " />
                    <div className="cut cut-medium" />
                    <label htmlFor="password" className="placeholder">
                        Password
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="confirm-password" className="input" type="text" placeholder=" " />
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