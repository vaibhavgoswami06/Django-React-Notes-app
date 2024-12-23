import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
const apiUrl =
  "https://ab745d8f-611d-41f5-9ca3-f5999c336492-dev.e1-us-east-azure.choreoapis.dev/djangoreactproject/backend/v1";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (errror) => {
    return Promise.reject(errror);
  }
);

export default api;
