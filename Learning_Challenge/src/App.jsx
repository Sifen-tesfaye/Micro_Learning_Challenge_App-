// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* Redirect root to categories */}
        <Route path="/" element={<Navigate to="/categories" />} />

        {/* Categories list */}
        <Route path="/categories" element={<Categories />} />

        {/* ✅ Dynamic category detail (MATCHES navigation) */}
        <Route path="/categories/:id" element={<CategoryDetail />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional: 404 fallback */}
        <Route path="*" element={<h1 className="text-white p-10">404 - Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;