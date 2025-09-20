import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../../routes/AppRoutes"; // mantén el path que ya usas si funciona
import "../css/custom.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("react-app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
