import axios, { type AxiosError } from "axios";

const BASE_URL = "https://internship-test-backend-cou0.onrender.com/api";
// const BASE_URL = "http://localhost:5000/api";

export { type AxiosError };

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
