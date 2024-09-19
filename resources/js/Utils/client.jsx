import axios from "axios";
import { useHistory } from "react-router-dom";

// Utility functions for token management
const getToken = () => {
  return localStorage.getItem("authToken");
};

const deleteToken = () => {
  return localStorage.removeItem("authToken");
};

// Axios instance setup
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use REACT_APP_API_URL for web apps
  headers: {
    'Accept': 'application/json'
  },
  withCredentials: true // Handles cookies if needed
});

// Request interceptor to add token to headers
axiosClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    console.log("Token found:", token);
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Set Content-Type based on request data type
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

// Response interceptor for handling errors
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;

      if (status === 403 || status === 401 || status === 400) {
        deleteToken();
        // Optionally redirect the user to the login page
        // history.push('/login'); // Uncomment if you want to navigate to login
      }

      if ([404, 500, 422, 204].includes(status)) {
        throw data;
      } else {
        throw error;
      }
    } else {
      // Handle network errors or errors without response
      console.error('Network error:', error.message);
      throw error.message;
    }
  }
);

export default axiosClient;
