import { createContext, useContext, useState } from "react";
import { login } from "../services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  async function signIn(email, password) {
    const data = await login(email, password);
    setUser(data.user);
    setToken(data.access);
    localStorage.setItem("token", data.access);
    localStorage.setItem("refresh", data.refresh); // optional
  }

  function signOut() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
  }

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
