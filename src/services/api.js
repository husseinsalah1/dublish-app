import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/v1/api", // Set the base URL
  timeout: 10000, // Set a timeout limit
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Attach token dynamically if available
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error(
        "Network Error - Please check your internet connection and try again."
      );
      window.location.href = "/error-network";
      return Promise.reject(new Error("Network Error"));
    } else if (error.response?.status === 401) {
      console.error("Unauthorized - Redirecting to login...");
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    } else if (error.response?.status === 500) {
      console.error("Server Error - Try again later.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
