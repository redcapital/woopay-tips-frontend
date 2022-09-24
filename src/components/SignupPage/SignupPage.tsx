import React from "react";
import { useState } from "react";
import {
  signup as signupAction,
  activate as activateAction,
} from "../../actions/session";
import "./SignupPage.scss";

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

  let form: React.ReactNode;

  if (signupLogin) {
    // First step of signup is done, show the activation form
    form = (
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
        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Телефон"
              name="login"
              value={login}
              disabled
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Код активации"
              name="activation_code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="password"
              placeholder="Пароль"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="password"
              placeholder="Пароль еще раз"
              name="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          {errors.map((err) => (
            <p className="help is-danger" key={err}>
              {err}
            </p>
          ))}
        </div>

        <button
          className="button is-block is-primary is-fullwidth is-medium"
          type="submit"
        >
          Активировать
        </button>
      </form>
    );
  } else {
    // Show the first signup step
    form = (
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
        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Телефон"
              name="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.map((err) => (
            <p className="help is-danger" key={err}>
              {err}
            </p>
          ))}
        </div>
        <button
          className="button is-block is-primary is-fullwidth is-medium"
          type="submit"
        >
          Создать аккаунт
        </button>
      </form>
    );
  }

  return (
    <div className="signup-page">
      <section className="container">
        <div className="columns is-multiline">
          <div className="column is-8 is-offset-2 register">
            <div className="columns">
              <div className="column left">
                <h1 className="title is-4">Создать аккаунт</h1>
                {form}
              </div>
              <div className="column right has-text-centered">
                <h1 className="title is-1">Super Cool Website</h1>
                <h2 className="subtitle colored is-4">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis ex deleniti aliquam tempora libero excepturi vero
                  soluta odio optio sed.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-8 is-offset-2">
            <br />
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span>{" "}
                  &emsp;
                  <span className="icon">
                    <i className="fab fa-facebook"></i>
                  </span>{" "}
                  &emsp;
                  <span className="icon">
                    <i className="fab fa-instagram"></i>
                  </span>{" "}
                  &emsp;
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>{" "}
                  &emsp;
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="level-right">
                <small
                  className="level-item"
                  style={{ color: "var(--textLight)" }}
                >
                  &copy; Super Cool Website. All Rights Reserved.
                </small>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};
SignupPage.displayName = "SignupPage";

export default SignupPage;
