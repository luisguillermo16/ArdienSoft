import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../resources/js/layout/MainLayout";
import AuthLayout from "../resources/js/layout/AuthLayout";

import Home from "../resources/js/pages/Home";
import Servicios from "../resources/js/pages/Servicios";
import Login from "../resources/js/pages/auth/Login";


export default function AppRoutes() {
  return (
    <Routes>
      {/* Layout principal (con navbar + footer) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
      </Route>

      {/* Layout de autenticación (sin navbar ni footer) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
    
      </Route>
    </Routes>
  );
}
