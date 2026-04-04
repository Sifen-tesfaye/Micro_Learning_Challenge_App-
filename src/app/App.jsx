import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "../pages/ResetPassword";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResetPassword />} />   {/* root shows reset password */}
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}
