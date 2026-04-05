import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children, showSearch = true }) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen bg-[#0b1220] text-white">
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <Topbar
          search={search}
          setSearch={setSearch}
          showSearch={showSearch}
        />

        {/* SUPPORT BOTH TYPES */}
        {typeof children === "function"
          ? children({ search })
          : children}
      </div>
    </div>
  );
}