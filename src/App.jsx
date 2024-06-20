// eslint-disable-next-line no-unused-vars
import React from "react";
import LandingPage from "./app/pages/LandingPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
