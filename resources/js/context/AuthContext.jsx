import { createContext, useContext, useState, useEffect } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Inicializar autenticación al cargar la app
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Inicializar el token en axios
        authService.initAuth();
        
        // Si hay token, verificar si es válido obteniendo el usuario
        if (authService.isAuthenticated()) {
          const response = await authService.getUser();
          setUser(response.data);
        }
      } catch (error) {
        // Si hay error, limpiar el token (puede estar expirado)
        localStorage.removeItem('auth_token');
        delete authService.defaults?.headers?.common?.['Authorization'];
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
    }
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
