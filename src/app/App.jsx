import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import { useAuth } from "../context/AuthContext";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Signup route */}
        <Route path="/signup" element={<Signup />} />

        {/* Reset password route */}
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Default redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
