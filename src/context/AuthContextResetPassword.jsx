import { createContext, useState } from "react";
import { requestPasswordReset } from "../services/authResetPassword";


export const AuthContextResetPassword = createContext();

export function AuthResetPasswordProvider({ children }) {
  const [status, setStatus] = useState(null);

  async function resetPassword(email) {
    try {
      const result = await requestPasswordReset(email);
      setStatus(result.message || "Reset link sent.");
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  }

  return (
    <AuthContextResetPassword.Provider value={{ resetPassword, status }}>
      {children}
    </AuthContextResetPassword.Provider>
  );
}
