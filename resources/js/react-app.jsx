import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";   // 👈 ya corregido
import { AuthProvider } from "./context/AuthContext";
import "./css/custom.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("react-app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
