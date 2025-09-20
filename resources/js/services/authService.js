import axiosClient from "./axiosClient";

const authService = {
  async getUser() {
    return axiosClient.get("/api/user");
  },
  async login(email, password) {
    const response = await axiosClient.post("/api/login", { email, password });
    
    // Guardar el token en localStorage
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
      // Configurar el token en axios para futuras peticiones
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }
    
    return response;
  },
  async logout() {
    try {
      await axiosClient.post("/api/logout");
    } finally {
      // Limpiar el token del localStorage y axios
      localStorage.removeItem('auth_token');
      delete axiosClient.defaults.headers.common['Authorization'];
    }
  },
  // Función para inicializar el token desde localStorage
  initAuth() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },
  // Función para verificar si hay un token
  isAuthenticated() {
    return !!localStorage.getItem('auth_token');
  }
};

export default authService;
