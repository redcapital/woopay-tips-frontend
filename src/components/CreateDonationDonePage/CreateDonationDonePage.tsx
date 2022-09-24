import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getDonateURL } from "../../helpers";
import QRCode from "../QRCode";
import "./CreateDonationDonePage.scss";

export interface Props {
  created_service_name: string;
}

const CreateDonationDonePage: React.FC<Props> = ({ created_service_name }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!created_service_name) {
      navigate("/404");
    }
  }, [created_service_name, navigate]);

  return (
    <div className="create-donation-done-page">
      <section className="container">
        <div className="columns">
          <div className="column left">
            <h1 className="title is-4">
              Услуга успешно создана. Чтобы принимать платежи покажите ваш
              QR-code посетителю:
            </h1>
            <Link to="/">Вернуться в профиль</Link>
            <br />
            <br />
            <QRCode text={getDonateURL(created_service_name)} />
          </div>
        </div>
      </section>
    </div>
  );
};
CreateDonationDonePage.displayName = "CreateDonationDonePage";

export default CreateDonationDonePage;
