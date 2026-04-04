import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login";
import { useAuth } from "../context/AuthContext";

function App() {
  return (
    <Routes>
      {/* Login route */}
      <Route path="/login" element={<Login />} />

      {/* Signup route */}
      <Route path="/signup" element={<Signup />} />

      {/* Default redirect to login */}
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
