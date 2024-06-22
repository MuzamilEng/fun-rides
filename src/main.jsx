import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { GlobalState } from "./context/GlobalState.jsx";
import MobileDrawer from "./components/MobileDrawer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalState>
        <Header />

        <App />

        <MobileDrawer />
        <Footer />
      </GlobalState>
    </BrowserRouter>
  </React.StrictMode>
);
