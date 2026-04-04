import { createContext, useContext, useState } from "react";
import { login, signup, logout, getProfile } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Login
  const signIn = async (email, password) => {
    const data = await login(email, password);
    setUser(data.user);
    setToken(data.access);
    localStorage.setItem("token", data.access);
    localStorage.setItem("refresh", data.refresh); // optional
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

  return (
    <AuthContext.Provider
      value={{ user, token, signIn, signUp, signOut, fetchProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
