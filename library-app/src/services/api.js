import axios from "axios";

// Local backend base URL
const BASE_URL = "http://localhost:8000/api/";

// Axios instance for local backend
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper for backend API requests
const api = {
  get: (endpoint, config = {}) => axiosInstance.get(endpoint, config).then((res) => res.data),
  post: (endpoint, data, config = {}) => axiosInstance.post(endpoint, data, config).then((res) => res.data),
  put: (endpoint, data, config = {}) => axiosInstance.put(endpoint, data, config).then((res) => res.data),
  delete: (endpoint, config = {}) => axiosInstance.delete(endpoint, config).then((res) => res.data),
};

// Fetch books from your Django backend
export const fetchBooksFromBackend = async (params = {}, signal) => {
  const config = {
    params,
    signal,
  };
  return api.get("books/", config);
};

// Fetch books directly from Google Books API
export const fetchBooksFromGoogle = async (query, signal) => {
  const maxResults = 10;

  const response = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      q: query,
      maxResults,
    },
    signal,
  });

  // Format the response for frontend compatibility
  const results = response.data.items?.map(item => {
    const info = item.volumeInfo;
    return {
      id: item.id,
      title: info.title || "No title",
      authors: info.authors || ["Unknown Author"],
      categories: info.categories || ["Uncategorized"],
      description: info.description || "No description available.",
      image:
        info.imageLinks?.thumbnail ||
        info.imageLinks?.smallThumbnail ||
        "https://via.placeholder.com/100x150?text=No+Image",
    };
  }) || [];

  return results;
};

export default api;
