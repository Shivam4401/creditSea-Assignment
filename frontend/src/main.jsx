import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ServerContext from "./context/serverContex.jsx";

createRoot(document.getElementById("root")).render(
  <ServerContext>
    <App />
  </ServerContext>
);
