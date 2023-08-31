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
    <header className="header" id="open">
      <div className="header__container" id="close">
        <Link to="/" className="header__logo">
          Builders
        </Link>
        <div className="header__menu menu">
          {/* menu__body - бургер меню без JS + нижче кнопка (a) для виклику */}
          <nav class="menu__body" id="menue">
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
        </div>
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
              <a href="#open" className="icon-menu">
                <span></span>
              </a>
              <a href="#close" className="close-icon-menu"></a>
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
                {user.photoURL && (
                  <div>
                    <img
                      src={user.photoURL}
                      alt="go"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "5vh",
                        borderRadius: "50px",
                        referrerPolicy: "no-referrer",
                      }}
                    />
                  </div>
                )}

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Welcome </p>
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
