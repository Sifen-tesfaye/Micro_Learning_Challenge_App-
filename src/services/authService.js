import axios from "axios";

const API_URL = "/api/auth/";

// Signup (Register new learner)
// Method: POST
// Auth Required: No
export const signup = async (fullName, email, password) => {
  try {
    const response = await axios.post(`${API_URL}register/`, {
      username: fullName, // backend expects "username"
      email,
      password,
    });
    return response.data; // contains user + tokens
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Login
// Method: POST
// Auth Required: No
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}login/`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Example of protected endpoint (Profile)
// Method: GET or PATCH
// Auth Required: Yes (JWT Bearer token)
export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}profile/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
