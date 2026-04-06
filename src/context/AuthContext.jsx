import { createContext, useContext, useMemo, useState } from "react";
import {
  getProfile,
  login,
  logout,
  signup,
} from "../services/authService";
import {
  requestPasswordReset,
  confirmPasswordReset,
} from "../services/authResetPassword";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [status, setStatus] = useState("");

  const signIn = async (email, password) => {
    const data = await login(email, password);
    const nextToken = data.access ?? data.token ?? null;

    if (nextToken) {
      localStorage.setItem("token", nextToken);
      setToken(nextToken);
    }

    if (data.refresh) {
      localStorage.setItem("refresh", data.refresh);
    }

    if (data.user) {
      setUser(data.user);
    }

    return data;
  };

  const signUp = async (fullName, email, password) => {
    const data = await signup(fullName, email, password);
    const nextToken = data.access ?? data.token ?? null;

    if (nextToken) {
      localStorage.setItem("token", nextToken);
      setToken(nextToken);
    }

    if (data.refresh) {
      localStorage.setItem("refresh", data.refresh);
    }

    if (data.user) {
      setUser(data.user);
    }

    return data;
  };

  const signOut = () => {
    logout();
    setUser(null);
    setToken(null);
  };

  const fetchUserProfile = async () => {
    if (!token) return null;
    const profile = await getProfile(token);
    setUser(profile);
    return profile;
  };

  // Step 1: Request reset link
  const resetPassword = async (email) => {
    const result = await requestPasswordReset(email);
    setStatus(result.message || "Reset link sent. Check your inbox.");
    return result;
  };

  // Step 2: Confirm reset with uid + token + new password
  const completeResetPassword = async (uid, token, newPassword) => {
    const result = await confirmPasswordReset(uid, token, newPassword);
    setStatus(result.message || "Password reset successful.");
    return result;
  };

  const value = useMemo(
    () => ({
      user,
      token,
      status,
      signIn,
      signUp,
      signOut,
      fetchUserProfile,
      resetPassword,
      completeResetPassword,
      clearStatus: () => setStatus(""),
    }),
    [status, token, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
