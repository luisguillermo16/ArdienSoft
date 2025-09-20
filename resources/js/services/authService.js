import axiosClient from "./axiosClient";

const authService = {
  async getUser() {
    return axiosClient.get("/api/user");
  },
  async login(email, password) {
    await axiosClient.get("/sanctum/csrf-cookie");
    return axiosClient.post("/api/login", { email, password });
  },
  async logout() {
    return axiosClient.post("/api/logout");
  },
};

export default authService;
