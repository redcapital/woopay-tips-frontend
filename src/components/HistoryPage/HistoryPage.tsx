import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useHistory from "../../hooks/useHistory";
import { UserSession } from "../../types";
import Hero from "../Hero";

export interface Props {
  session: UserSession;
}

const HomePage: React.FC<Props> = ({ session }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!session.id) {
      navigate("/login");
    }
  }, [session, navigate]);
  const history = useHistory();

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
          <li className="is-active">
            <Link to="/history">
              <span className="icon is-small">
                <i className="fas fa-dollar-sign" aria-hidden="true"></i>
              </span>
              <span>История донатов</span>
            </Link>
          </li>
          <li>
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
        <h2 className="subtitle">История донатов</h2>
        {history !== undefined && (
          <div>
            {history.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Номер телефона</th>
                    <th>Сумма</th>
                    <th>Дата и время</th>
                    <th>Сервис</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((i) => (
                    <tr>
                      <td>{i.account}</td>
                      <td>{i.amount}&#8376;</td>
                      <td>{new Date(i.donned_at).toLocaleString()}</td>
                      <td>{i.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <>Увы, пока донатов не было :(</>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
HomePage.displayName = "HomePage";

export default HomePage;
