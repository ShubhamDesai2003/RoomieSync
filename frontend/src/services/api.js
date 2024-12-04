import axios from 'axios';

// Define the backend API URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';  // Adjust the backend URL as per your setup

// Function to handle login
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}api/auth/login`, credentials, {
      withCredentials: true  // Ensures cookies (like session cookies) are sent
    });
    return response;
  } catch (error) {
    throw error;
  }
};
    