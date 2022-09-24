import React from "react";
import { useState } from "react";
import { login as loginAction } from "../../actions/session";

export interface Props {
  doLogin: typeof loginAction;
}

const LoginPage: React.FC<Props> = ({ doLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const errors: string[] = [];
        if (!login || !password) {
          errors.push("Заполните логин и пароль");
        }
        setErrors(errors);
        if (errors.length === 0) {
          doLogin({ login, password });
        }
      }}
    >
      login:
      <input
        type="text"
        name="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      pw:{" "}
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.map((err) => (
        <div key={err}>{err}</div>
      ))}
      <button type="submit">Login</button>
    </form>
  );
};
LoginPage.displayName = "LoginPage";

export default LoginPage;
