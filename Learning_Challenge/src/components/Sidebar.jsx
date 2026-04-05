import { useNavigate, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // helper for active menu
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-[#0b1220] text-white">
      
      {/* SIDEBAR */}
      <aside className="w-56 bg-[#0f172a] p-5 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Lumi</h2>

        <ul className="space-y-3">
          <li
            onClick={() => navigate("/dashboard")}
            className={`cursor-pointer p-2 rounded ${
              isActive("/dashboard") ? "bg-[#1e293b]" : "hover:bg-[#1e293b]"
            }`}
          >
            Dashboard
          </li>

          <li
            onClick={() => navigate("/categories")}
            className={`cursor-pointer p-2 rounded ${
              isActive("/categories") || isActive("/")
                ? "bg-[#1e293b]"
                : "hover:bg-[#1e293b]"
            }`}
          >
            Categories
          </li>

          <li className="p-2">Leaderboard</li>
          <li className="p-2">Challenges</li>
          <li className="p-2">Notifications</li>
          <li className="p-2">Profile</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}