import React from "react";
import { doDebug } from "../../actions/app";
import { UserSession } from "../../types";

export interface Props {
  session: UserSession;
  debug: typeof doDebug;
}

const HomePage: React.FC<Props> = ({ session, debug }) => {
  return (
    <div>
      Logged in as: {session.login}
      <button onClick={(e) => debug(null)}>Debug</button>
    </div>
  );
};
HomePage.displayName = "HomePage";

export default HomePage;
