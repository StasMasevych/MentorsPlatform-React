import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLogut } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function NavBar() {
  const { logout } = useLogut();
  /* console.log(logout); */
  const { user } = useAuthContext();
  /* console.log(user); */

  const location = useLocation();
  console.log(location);

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
              <h5 style={{ display: "flex", alignItems: "center" }}>
                Hello, {user.displayName} 👋
              </h5>
              <button className="button" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
