import { createContext, useContext, useState } from "react";
import { login, signup, logout, getProfile } from "../services/authService";
import { requestPasswordReset } from "../services/authResetPassword";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [status, setStatus] = useState(null); // for reset password feedback

  // Login
  const signIn = async (email, password) => {
    const data = await login(email, password);
    setUser(data.user);
    setToken(data.access);
    localStorage.setItem("token", data.access);
    localStorage.setItem("refresh", data.refresh);
    return data;
  };

  // Signup
  const signUp = async (fullName, email, password) => {
    const data = await signup(fullName, email, password);
    setUser(data.user);
    setToken(data.access);
    localStorage.setItem("token", data.access);
    return data;
  };

  // Logout
  const signOut = () => {
    logout();
    setUser(null);
    setToken(null);
  };

  // Fetch profile
  const fetchProfile = async () => {
    if (!token) return null;
    const profile = await getProfile(token);
    setUser(profile);
    return profile;
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      const result = await requestPasswordReset(email);
      setStatus(result.message || "Reset link sent.");
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, status, signIn, signUp, signOut, fetchProfile, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
