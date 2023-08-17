import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form className="login-form" onSubmit={onSubmitHandler}>
      <h2>Login</h2>
      <p>Don’t have an account? Sign up</p>
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
      <button className="login-form__button button">Login</button>
    </form>
  );
}
