import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="auth-layout">
      <Outlet /> {/* aquí se renderiza el login/register */}
    </main>
  );
}
