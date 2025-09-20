import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // tu backend
  withCredentials: true, // 🔑 importante para Sanctum
});

export default api;
