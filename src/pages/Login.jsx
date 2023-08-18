import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

// make later 2 cols - 1 col form, 2 col - image

import GoogleIcon from "../assets/icons/google-logo_icon.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  function onSubmitHandler(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <form className="login-form" onSubmit={onSubmitHandler}>
      <h2>Login</h2>
      <p>
        Don’t have an account?{" "}
        <Link to="/signup">
          <span style={{ color: "#616161", textDecoration: "underline" }}>
            Sign up
          </span>
        </Link>
      </p>
      <label>
        <span>email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && (
        <>
          <button className="login-form__button button">Login</button>
          <div className="login-form__separator">
            <p>or continue with</p>
            <hr style={{ border: "1px solid #e3e3e3" }} />
          </div>
          <div>
            <button className="login-form__google-button  google-button-login-form">
              <div className="google-button-login-form__image">
                <img src={GoogleIcon} alt="go" />
              </div>
              <p className="google-button-login-form__text">
                Login with Google
              </p>
            </button>
          </div>
        </>
      )}
      {isPending && (
        <button className="login-form__button button" disabled>
          Loading
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
