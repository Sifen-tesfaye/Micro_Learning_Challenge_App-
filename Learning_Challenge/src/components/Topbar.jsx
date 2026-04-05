import { useState } from "react";
import { Upload } from "lucide-react";

export default function Topbar({ search, setSearch, showSearch }) {
  const [image, setImage] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const userName = "Sifen";

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-between items-center mb-6 relative">

      {/* ✅ SEARCH (CONDITIONAL) */}
      {showSearch ? (
        <input
          type="text"
          placeholder="Search categories..."
          className="w-72 px-4 py-2 rounded-full bg-[#1e293b] outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      ) : (
        <div /> // keeps spacing when search is hidden
      )}

      {/* PROFILE */}
      <div className="relative">
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center cursor-pointer hover:bg-[#2a3a5a]"
        >
          {image ? (
            <img
              src={image}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <span className="text-white font-bold">
              {getInitials(userName)}
            </span>
          )}
        </div>

        {/* DROPDOWN */}
        {showMenu && (
          <div className="absolute right-0 mt-2 w-40 bg-[#1e293b] rounded-lg shadow-lg p-2">
            
            <label className="flex items-center gap-2 p-2 hover:bg-[#2a3a5a] rounded cursor-pointer">
              <Upload size={16} />
              Upload Photo
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>

            <button
              onClick={() => setImage(null)}
              className="w-full text-left p-2 hover:bg-[#2a3a5a] rounded"
            >
              Remove Photo
            </button>

            <button className="w-full text-left p-2 hover:bg-[#2a3a5a] rounded">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}