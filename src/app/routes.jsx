import { Routes, Route } from "react-router-dom";
import App from "./App";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import Leaderboard from "../pages/Leaderboard";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ModuleDetail from "../pages/ModuleDetail";
import CategoryDetail from "../pages/CategoryDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="categories" element={<Categories />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route path="modules/:id" element={<ModuleDetail />} />
      <Route path="categories/:id" element={<CategoryDetail />} />
    </Routes>
  );
}
