import "@fortawesome/fontawesome-free/css/all.min.css";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/index.js";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
  </StrictMode>
);
