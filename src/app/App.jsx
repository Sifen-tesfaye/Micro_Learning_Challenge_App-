import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import { useAuth } from "../context/AuthContext";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;



