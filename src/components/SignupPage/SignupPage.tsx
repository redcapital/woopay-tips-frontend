import React from "react";
import { useState } from "react";
import {
  signup as signupAction,
  activate as activateAction,
} from "../../actions/session";

export interface Props {
  signupLogin?: string;
  signup: typeof signupAction;
  activate: typeof activateAction;
}

const SignupPage: React.FC<Props> = ({ signup, activate, signupLogin }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  if (signupLogin) {
    // First step of signup is done, show the activation form
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const errors: string[] = [];
          if (!password || !code) {
            errors.push("Заполните пароль и код активации");
          }
          if (password && password !== password2) {
            errors.push("Пароли не совпадают");
          }
          setErrors(errors);
          if (errors.length === 0) {
            activate({ login: signupLogin, password, activation_code: code });
          }
        }}
      >
        <input type="text" name="login" disabled value={signupLogin} />
        activation code:
        <input
          type="text"
          name="activation_code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        pw:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        pw2:
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        {errors.map((err) => (
          <div key={err}>{err}</div>
        ))}
        <button type="submit">Activate</button>
      </form>
    );
  }

  // Show the first signup step
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const errors: string[] = [];
        if (!login || !email) {
          errors.push("Заполните логин и e-mail");
        }
        setErrors(errors);
        if (errors.length === 0) {
          signup({ login, email });
        }
      }}
    >
      login:{" "}
      <input
        type="text"
        name="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      email:{" "}
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.map((err) => (
        <div key={err}>{err}</div>
      ))}
      <button type="submit">Signup</button>
    </form>
  );
};
SignupPage.displayName = "SignupPage";

export default SignupPage;
