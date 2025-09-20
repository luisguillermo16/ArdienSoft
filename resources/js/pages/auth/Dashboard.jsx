import React, { useEffect } from "react";
import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user, logout, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirigir al login si no está autenticado
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login");
    }
  }, [loading, isAuthenticated, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Cargando...
      </div>
    );
  }

  if (!user) {
    return null; // Se redirigirá automáticamente
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-[#FE5516] text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-bold flex items-center space-x-2">
          <User className="w-5 h-5" />
          <span>{user.name}</span>
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-white text-[#FE5516] px-3 py-1 rounded-lg shadow hover:bg-gray-100"
        >
          <LogOut className="w-4 h-4" />
          <span>Salir</span>
        </button>
      </header>

      {/* Contenido */}
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Bienvenido al Dashboard 🎉
          </h2>
          <p className="text-gray-600">
            Estás logueado como <strong>{user.email}</strong>
          </p>
        </div>
      </main>
    </div>
  );
}
