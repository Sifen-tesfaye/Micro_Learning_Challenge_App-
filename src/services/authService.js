import axios from "axios";

const API_URL = "/api/auth/";

// Login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}login/`, { email, password });
    return response.data; // { access, refresh, user }
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Signup
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

// Logout (local only, unless backend has endpoint)
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh");
};

// Profile
export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}profile/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
