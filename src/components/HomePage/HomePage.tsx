import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDonateURL } from "../../helpers";
import { UserSession } from "../../types";
import Hero from "../Hero";
import QRCode from "../QRCode";

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

  return (
    <div className="home-page">
      <Hero />
      <div className="tabs is-toggle is-fullwidth">
        <ul>
          <li className="is-active">
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
        {session.service_name ? (
          <>
            <h2 className="subtitle">Принимайте платежи, сканируя QR-код</h2>
            <div>
              <QRCode text={getDonateURL(session.service_name)} />
            </div>
          </>
        ) : (
          <>
            <h2 className="subtitle">
              Вы еще не создали QR-код для приема платежей, нажмите{" "}
              <Link to="/donation/create">сюда для создания.</Link>
            </h2>
          </>
        )}
      </section>
    </div>
  );
};
HomePage.displayName = "HomePage";

export default HomePage;
