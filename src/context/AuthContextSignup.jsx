import { createContext, useState, useContext } from "react";
import { signup } from "../services/authService";

const AuthContextSignup = createContext();

export const AuthProviderSignup = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Signup uses POST /api/auth/register/ (no auth required)
  const handleSignup = async (fullName, email, password) => {
    const data = await signup(fullName, email, password);
    setUser(data.user);
    setToken(data.access);
    localStorage.setItem("token", data.access);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContextSignup.Provider
      value={{ user, token, signup: handleSignup, logout }}
    >
      {children}
    </AuthContextSignup.Provider>
  );
};

export const useAuthSignup = () => useContext(AuthContextSignup);
