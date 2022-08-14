export const Login = () => {
    return (
        <div className="login">
        <form className="form-login">
            <div className="title">Login</div>

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
         
            <button type="text" className="submit">
                submit
            </button>
        </form>
    </div>
         
    );
};


