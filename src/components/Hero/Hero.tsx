import React from "react";
import useBalance from "../../hooks/useBalance";
import { UserSession } from "../../types";

export interface Props {
  session: UserSession;
}

const Hero: React.FC<Props> = ({ session }) => {
  const balance = useBalance();

  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <p className="title">Привет!</p>
        <p className="subtitle">{session.login}</p>
        <p className="subtitle">
          {balance !== undefined && <>Ваш баланс: {balance}&#8376;</>}&nbsp;
        </p>
      </div>
    </section>
  );
};
Hero.displayName = "Hero";

export default Hero;
