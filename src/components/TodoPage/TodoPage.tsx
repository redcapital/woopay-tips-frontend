import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero";

export interface Props {}

const TodoPage: React.FC<Props> = () => {
  return (
    <div className="home-page">
      <Hero />
      <div className="tabs is-toggle is-fullwidth">
        <ul>
          <li>
            <Link to="/">
              <span className="icon is-small">
                <i className="fas fa-user" aria-hidden="true"></i>
              </span>
              <span>Профиль</span>
            </Link>
          </li>
          <li>
            <Link to="/history">
              <span className="icon is-small">
                <i className="fas fa-dollar-sign" aria-hidden="true"></i>
              </span>
              <span>История донатов</span>
            </Link>
          </li>
          <li className="is-active">
            <Link to="/withdraw">
              <span className="icon is-small">
                <i
                  className="fas fa-money-bill-transfer"
                  aria-hidden="true"
                ></i>
              </span>
              <span>Вывод средств</span>
            </Link>
          </li>
        </ul>
      </div>

      <section className="section">
        <h2 className="subtitle">Этот раздел мы скоро добавим!</h2>
      </section>
    </div>
  );
};
TodoPage.displayName = "TodoPage";

export default TodoPage;
