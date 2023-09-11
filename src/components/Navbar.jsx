import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLogut } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  //

  const { logout } = useLogut();
  /* console.log(logout); */
  const { user } = useAuthContext();
  /* console.log(user); */

  const location = useLocation();
  /* console.log(location); */

  console.log(user);
  const navigate = useNavigate();

  /* if (location.pathname === "/login") return; */

  return (
    <header className="header" id="open">
      <div className="header__container" id="close">
        <Link to="/" className="header__logo">
          Builders
        </Link>
        <div className="header__menu menu">
          <nav
            className={`menu__body${navbarOpen ? " show-menu" : ""}`}
            id="menu"
          >
            {/* <nav className="menu__body" id="menu"> */}
            <ul className="menu__list">
              <li className="menu__item">
                <Link
                  onClick={() => setNavbarOpen(false)}
                  to="/about"
                  className="menu__link"
                >
                  About us
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  onClick={() => setNavbarOpen(false)}
                  to="/mentors"
                  className="menu__link"
                >
                  Find a mentor
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  onClick={() => setNavbarOpen(false)}
                  to="/live-classes"
                  className="menu__link"
                >
                  Find live classes
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  onClick={() => setNavbarOpen(false)}
                  to="/become-mentor"
                  className="menu__link"
                >
                  Become a mentor
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  onClick={() => setNavbarOpen(false)}
                  to="/contact"
                  className="menu__link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__buttons buttons-header">
          {!user && (
            <>
              <button
                className="buttons-header__login login-buttons-header__button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="login-buttons-header__button button"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
              <button
                className="toggle"
                onClick={() => setNavbarOpen((prev) => !prev)}
              >
                {navbarOpen ? (
                  <MdClose
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#fff",
                    }}
                  />
                ) : (
                  <FiMenu
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#fff",
                    }}
                  />
                )}
              </button>
            </>
          )}
          {user && (
            <>
              <button className="button" onClick={logout}>
                Logout
              </button>
              <div
                className="buttons-header__google-auth"
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  alignItems: "center",
                  /* flex: "0 1 60%", */
                  /*  justifyContent: "space-between", */
                }}
              >
                {user.photoURL && (
                  <div
                    className="header__userPhoto"
                    style={
                      {
                        /* flex: "0 1 20%", */
                        /* height: "6vh", */
                      }
                    }
                  >
                    <img
                      src={user.photoURL}
                      alt="go"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50px",
                        referrerPolicy: "no-referrer",
                      }}
                    />
                  </div>
                )}

                <div
                  className="userAuth-textblock"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    /* flex: "0 1 80%", */
                  }}
                >
                  <p
                    className="userAuth-textblock__welcome"
                    style={{ fontSize: "12px" }}
                  >
                    Welcome{" "}
                  </p>
                  <p
                    className="userAuth-textblock__burger-welcome"
                    style={{ fontSize: "12px" }}
                  >
                    Welcome 👋
                  </p>
                  <p
                    className="userAuth-textblock__name"
                    style={{ fontSize: "12px" }}
                  >
                    {user.displayName} 👋
                  </p>
                </div>
              </div>
              <button
                className="toggle"
                onClick={() => setNavbarOpen((prev) => !prev)}
              >
                {navbarOpen ? (
                  <MdClose
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#fff",
                    }}
                  />
                ) : (
                  <FiMenu
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#fff",
                    }}
                  />
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
