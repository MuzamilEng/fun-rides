import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from 'react-redux';
import {store} from './app/store/store.js'
import App from "./App.jsx";
import { GlobalStateProvider } from "./app/context/GlobalStateProvider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStateProvider>
        <Provider store={store}>
        <App />
        </Provider>
      </GlobalStateProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
