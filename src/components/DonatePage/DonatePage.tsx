import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { makeDonation as makeDonationAction } from "../../actions/donation";
import PaymentFrame from "./PaymentFrame";

import "./DonatePage.scss";

export interface Props {
  frame_url?: string;
  makeDonation: typeof makeDonationAction;
}

const DonatePage: React.FC<Props> = ({ frame_url, makeDonation }) => {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get("service_name")) {
      navigate("/404");
    }
  }, [searchParams, navigate]);

  if (done || 1) {
    return (
      <div className="donate-page">
        <section className="container">
          <div className="columns">
            <div className="column left">
              <h1 className="title is-4">Оплата успешно завершена!</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (frame_url) {
    return <PaymentFrame url={frame_url} onSuccess={() => setDone(true)} />;
  }

  return (
    <div className="donate-page">
      <section className="container">
        <div className="columns">
          <div className="column left">
            <h1 className="title is-4">Оплата</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const errors: string[] = [];
                if (!login || !amount) {
                  errors.push("Укажите ваш номер телефона и сумму чаевых");
                }
                setErrors(errors);
                if (errors.length === 0) {
                  setLoading(true);
                  makeDonation({
                    login,
                    amount: parseInt(amount),
                    service_name: searchParams.get("service_name")!,
                  });
                }
              }}
            >
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Ваш телефон"
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
                    type="number"
                    min="1"
                    max="100000"
                    name="amount"
                    placeholder="Сумма в тенге"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
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
                Оплата
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
DonatePage.displayName = "DonatePage";

export default DonatePage;
