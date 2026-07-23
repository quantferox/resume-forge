import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@assets/scss/reset.scss";
import "./main.scss";
import App from "@app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
