import React from "react";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import history from "../../history";
import SignupPage from "../SignupPage";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import NotFoundPage from "../NotFoundPage";
import CreateDonationPage from "../CreateDonationPage";
import CreateDonationDonePage from "../CreateDonationDonePage";
import DonatePage from "../DonatePage";
import TodoPage from "../TodoPage";
import HistoryPage from "../HistoryPage";

import "./bulma.css";

const App: React.FC = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/donation/create-done"
          element={<CreateDonationDonePage />}
        />
        <Route path="/donation/create" element={<CreateDonationPage />} />
        <Route path="/tip" element={<DonatePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/withdraw" element={<TodoPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
};
App.displayName = "App";

export default App;
