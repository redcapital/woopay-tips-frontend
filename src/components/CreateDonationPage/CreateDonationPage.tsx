import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { createDonation } from "../../actions/donation";
import { getDonateURL } from "../../helpers";
import QRCode from "../QRCode";

export interface Props {
  createdServiceName?: string;
  create: typeof createDonation;
}

const CreateDonationPage: React.FC<Props> = ({
  createdServiceName,
  create,
}) => {
  const [name, setName] = useState("Чаевые!");
  const [description, setDescription] = useState("Порадовать официанта");
  const [errors, setErrors] = useState<string[]>([]);
  const { done } = useParams();

  if (done === "1" && createdServiceName) {
    return (
      <div>
        Услуга успешно создана. Чтобы принимать платежи покажите ваш QR-code
        посетителю:
        <br />
        <QRCode text={getDonateURL(createdServiceName)} />
      </div>
    );
  }

  return (
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
      name:{" "}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      desc:{" "}
      <input
        type="textarea"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.map((err) => (
        <div key={err}>{err}</div>
      ))}
      <button type="submit">Create service</button>
    </form>
  );
};
CreateDonationPage.displayName = "CreateDonationPage";

export default CreateDonationPage;
