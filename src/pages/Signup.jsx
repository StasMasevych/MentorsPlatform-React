import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useSignup } from "../hooks/useSignup";

import GoogleIcon from "../assets/icons/google-logo_icon.png";

import GoogleOAuth from "../components/GoogleOAuth";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useAuthContext();

  const { signup, error, isPending } = useSignup();

  function onSubmitHandler(e) {
    e.preventDefault();
    signup(email, password, name);
  }

  return (
    <form className="signup-form" onSubmit={onSubmitHandler}>
      <h2>Signup</h2>
      <p>
        Do you have an account?{" "}
        <Link to="/login">
          <span style={{ color: "#616161", textDecoration: "underline" }}>
            Login
          </span>
        </Link>
      </p>
      <label>
        <span>name:</span>
        <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
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
          <button className="signup-form__button button">Signup</button>
          <div className="signup-form__separator">
            <p>or continue with</p>
            <hr style={{ border: "1px solid #e3e3e3" }} />
          </div>
          <div>
            <GoogleOAuth />
          </div>
        </>
      )}
      {isPending && (
        <button className="signup-form__button button" disabled>
          Loading
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
