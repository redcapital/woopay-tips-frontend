import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "../SignupPage";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import NotFoundPage from "../NotFoundPage";
import CreateDonationPage from "../CreateDonationPage";

import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-donation" element={<CreateDonationPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
App.displayName = "App";

export default App;
