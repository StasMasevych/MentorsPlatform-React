export default function NavBar() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="link" className="header__logo">
          Builders
        </a>
        <nav className="header__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="link">
                  About us
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="link">
                  Find a mentor
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="link">
                  Find live classes
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="link">
                  Become a mentor
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </nav>
        <div>
          <button className="button">Explore mentors</button>
        </div>
      </div>
    </header>
  );
}
