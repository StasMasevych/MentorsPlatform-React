import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLogut } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function NavBar() {
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
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Builders
        </Link>
        <nav className="header__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="/about" className="menu__link">
                  About us
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/mentors" className="menu__link">
                  Find a mentor
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/live-classes" className="menu__link">
                  Find live classes
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/become-mentor" className="menu__link">
                  Become a mentor
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/contact" className="menu__link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </nav>
        <div className="header__buttons buttons-header">
          {!user && (
            <>
              <button
                className="buttons-header__login"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button className="button" onClick={() => navigate("/signup")}>
                Sign up
              </button>
            </>
          )}
          {user && (
            <>
              <button className="button" onClick={logout}>
                Logout
              </button>
              <div
                style={{ display: "flex", gap: "0.2rem", alignItems: "center" }}
              >
                <div>
                  <img
                    src={user.photoURL}
                    alt="go"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "8vh",
                      borderRadius: "50px",
                      referrerPolicy: "no-referrer",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Hello,</p>
                  <p>{user.displayName} 👋</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
