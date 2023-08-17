import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(email, password, name);
  }

  return (
    <form className="signup-form" onSubmit={onSubmitHandler}>
      <h2>Signup</h2>
      <p>Do you have an account? Login</p>
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
      <button className="login-form__button button">Login</button>
    </form>
  );
}
