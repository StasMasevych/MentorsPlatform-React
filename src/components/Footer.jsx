import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const footerYear = new Date().getFullYear();

  const location = useLocation();
  /*  console.log(location); */

  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/application"
  )
    return;

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#about">about us</a>
              </li>
              {/*  <li>
                <a href="#">our story</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>categories</h4>
            <ul>
              <li>
                {/* <a href="#">web development</a> */}
                <Link to="/mentors">web development</Link>
              </li>
              <li>
                {/* <a href="#">javascript</a> */}
                <Link to="/mentors">javascript</Link>
              </li>
              <li>
                {/* <a href="#">phyton</a> */}
                <Link to="/mentors">phyton</Link>
              </li>
              <li>
                {/* <a href="#">QA</a> */}
                <Link to="/mentors">UX/UI design</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>learning</h4>
            <ul>
              <li>{/* <a href="#">FAQ</a> */}</li>
              <li>
                {/* <a href="#">mentors</a> */}
                <Link to="/mentors">mentors</Link>
              </li>
              <li>
                {/* <a href="#">live classes</a> */}
                <Link to="/live-classes">live-classes</Link>
              </li>
              {/* <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <h5 id="contact">skillbuddy@gmail.com</h5>
          </div>
        </div>
        <div className="footer__content content-footer">
          <h4 className="content-footer__message">Made with ❤️ in Kyiv 🇺🇦</h4>
          <p className="content-footer__year">
            Copyright &copy; {footerYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
