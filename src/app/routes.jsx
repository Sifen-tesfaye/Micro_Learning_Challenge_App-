import { Routes, Route } from "react-router-dom";
import App from "./App";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import Leaderboard from "../pages/Leaderboard";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="categories" element={<Categories />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
