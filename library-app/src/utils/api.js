import axios from "axios";

// Base URL
const BASE_URL = "http://localhost:8000/api/";

// Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios-based API helper
const api = {
  get: (endpoint, config = {}) => axiosInstance.get(endpoint, config).then((res) => res.data),
  post: (endpoint, data, config = {}) => axiosInstance.post(endpoint, data, config).then((res) => res.data),
  put: (endpoint, data, config = {}) => axiosInstance.put(endpoint, data, config).then((res) => res.data),
  delete: (endpoint, config = {}) => axiosInstance.delete(endpoint, config).then((res) => res.data),
};

// Named export example (if needed)
export const fetchBooksFromBackend = async (params = {}, signal) => {
  const config = {
    params,
    signal,
  };
  return api.get("books/", config);
};

// 👇 This line is required to fix your import errors
export default api;
