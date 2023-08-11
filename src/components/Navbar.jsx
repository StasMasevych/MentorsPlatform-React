import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
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
        <div>
          <button className="button" onClick={() => navigate("/mentors")}>
            Explore mentors
          </button>
        </div>
      </div>
    </header>
  );
}
