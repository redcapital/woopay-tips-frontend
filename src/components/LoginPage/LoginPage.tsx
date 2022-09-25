import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login as loginAction } from "../../actions/session";
import "./LoginPage.scss";

export interface Props {
  doLogin: typeof loginAction;
}

const LoginPage: React.FC<Props> = ({ doLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <div className="login-page">
      <section className="container">
        <div className="columns is-multiline">
          <div className="column is-8 is-offset-2 register">
            <div className="columns">
              <div className="column left">
                <h1 className="title is-4">Выполнить вход</h1>
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
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Пароль"
                        onChange={(e) => setPassword(e.target.value)}
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
                    Вход
                  </button>

                  <div className="field">
                    <div className="control">
                      <p className="mt-4">
                        Еще нет аккаунта?{" "}
                        <Link to="/signup">Создать аккаунт</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="column right has-text-centered">
                <h1 className="title is-1">Рахмет.KZ</h1>
                <h2 className="subtitle colored is-4">
                  Принимайте чаевые или донаты
                </h2>
                <p>С нашим сервисом это сделать очень легко</p>
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
                  &copy; Рахмет.KZ. Все права защищены.
                </small>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};
LoginPage.displayName = "LoginPage";

export default LoginPage;
