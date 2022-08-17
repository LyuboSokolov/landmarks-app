import { Link } from 'react-router-dom';

import { useContext } from 'react';

import { UserDataContext } from '../../context/UserData';

export const Nav = () => {

  const { user } = useContext(UserDataContext);

  return (

    <nav className="navbar" role="navigation">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="menu-container js_nav-item">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".nav-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="toggle-icon" />
          </button>
          {/* Logo */}
          <div className="logo">
            <Link className="logo-wrap" to="/">
              <span><i className="fa-solid fa-person-hiking" /></span>
              <span className="titleLogo">Landmarks</span>
            </Link>
          </div>
          {/* End Logo */}
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse nav-collapse">
          <div className="menu-container">
            <ul className="nav navbar-nav navbar-nav-right">
              <li className="js_nav-item nav-item">
                <Link className="nav-item-child nav-item-hover" to="/">
                  Home
                </Link>
              </li>
              <li className="js_nav-item nav-item">
                <Link className="nav-item-child nav-item-hover" to="/landmarks">
                  Landmarks
                </Link>
              </li>

              {user.email
                ? <>
                  <li className="js_nav-item nav-item">
                    <Link className="nav-item-child nav-item-hover" to="/add">
                      Add Landmark
                    </Link>
                  </li>
                  <li className="js_nav-item nav-item">
                    <Link className="nav-item-child nav-item-hover" to="/logout">
                      Logout
                    </Link>
                  </li>
                </>
                : <>
                  <li className="js_nav-item nav-item">
                    <Link className="nav-item-child nav-item-hover" to="/login">
                      Login
                    </Link>
                  </li>

                  <li className="js_nav-item nav-item">
                    <Link className="nav-item-child nav-item-hover" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              }



            </ul>
          </div>
        </div>
        {/* End Navbar Collapse */}
      </div>
    </nav>
  );
}