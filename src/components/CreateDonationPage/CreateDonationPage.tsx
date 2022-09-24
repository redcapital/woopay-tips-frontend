import React from "react";
import { useState } from "react";
import { createDonation } from "../../actions/donation";

import "./CreateDonationPage.scss";

export interface Props {
  create: typeof createDonation;
}

const CreateDonationPage: React.FC<Props> = ({ create }) => {
  const [name, setName] = useState("Чаевые!");
  const [description, setDescription] = useState("Порадовать официанта");
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <div className="create-donation-page">
      <section className="container">
        <div className="columns">
          <div className="column left">
            <h1 className="title is-4">Создать QR-код для приема платежей</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const errors: string[] = [];
                if (!name) {
                  errors.push("Укажите имя услуги");
                }
                setErrors(errors);
                if (errors.length === 0) {
                  create({ name, description });
                }
              }}
            >
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Имя услуги"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    name="description"
                    placeholder="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                Создать
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
CreateDonationPage.displayName = "CreateDonationPage";

export default CreateDonationPage;
