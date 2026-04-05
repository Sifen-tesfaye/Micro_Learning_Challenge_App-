import React from 'react';
import { 
  FiHome, 
  FiBook, 
  FiBarChart2, 
  FiAward, 
  FiBell, 
  FiUser, 
  FiShare2, 
  FiEdit3 
} from 'react-icons/fi';
import { 
  FaBolt, 
  FaFire, 
  FaBookOpen, 
  FaMedal 
} from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white font-sans">
      {/* Top Navigation */}
      <nav className="bg-[#0F1629] border-b border-[#1E2A4A] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center text-xl font-bold">
              ✨
            </div>
            <span className="text-2xl font-semibold tracking-tight">Luminescent Scholar</span>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Challenges</a>
            <a href="#" className="text-cyan-400 font-medium border-b-2 border-cyan-400 pb-1">Profile</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-white transition-colors">
            <FiBell size={22} />
          </button>
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full overflow-hidden border-2 border-[#1E2A4A]">
            <img 
              src="https://picsum.photos/id/1015/128/128" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-[#0F1629] border-r border-[#1E2A4A] min-h-[calc(100vh-73px)] p-6 flex flex-col">
          <div className="mb-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-cyan-400">
                <img 
                  src="https://picsum.photos/id/1015/128/128" 
                  alt="Elias Thorne" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">The Scholar</div>
                <div className="text-xs text-cyan-400 font-medium">Grand Master</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            {[
              { icon: <FiHome size={20} />, label: "Dashboard" },
              { icon: <FiBook size={20} />, label: "Categories" },
              { icon: <FiBarChart2 size={20} />, label: "Leaderboard" },
              { icon: <FiAward size={20} />, label: "Challenges" },
              { icon: <FiBell size={20} />, label: "Notifications" },
              { icon: <FiUser size={20} />, label: "Profile", active: true },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  item.active 
                    ? 'bg-[#1E2A4A] text-cyan-400' 
                    : 'hover:bg-[#1A2339] text-gray-300'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <button className="mt-8 w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium py-3.5 rounded-2xl transition-all active:scale-95">
            New Challenge
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {/* Profile Header */}
            <div className="flex gap-10 mb-12">
              <div className="relative flex-shrink-0">
                <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
                  <img 
                    src="https://picsum.photos/id/1015/400/400" 
                    alt="Elias Thorne" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0F1629] border border-cyan-400 text-cyan-400 text-xs font-bold px-6 py-1 rounded-full">
                  GRAND MASTER
                </div>
              </div>

              <div className="flex-1 pt-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-5xl font-bold tracking-tight">Elias Thorne</h1>
                  <div className="bg-[#1E2A4A] text-cyan-400 text-sm font-medium px-4 py-1 rounded-full mt-2">
                    Lv. 84
                  </div>
                </div>
                
                <p className="mt-4 text-lg text-gray-300 max-w-md">
                  Polymath in training. Dedicated to the pursuit of linguistic mastery and cognitive expansion through daily bite-sized challenges.
                </p>

                <button className="mt-8 flex items-center gap-2 bg-[#1E2A4A] hover:bg-[#2A3A5A] border border-gray-600 px-8 py-3 rounded-2xl text-sm font-medium transition-all">
                  <FiShare2 size={18} />
                  Share Profile
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6 mb-12">
              {[
                { label: "TOTAL XP", value: "142,850", sub: "+1,200 today", icon: <FaBolt size={32} className="text-yellow-400" /> },
                { label: "DAY STREAK", value: "142", sub: "Personal best", icon: <FaFire size={32} className="text-orange-400" /> },
                { label: "MODULES", value: "894", sub: "87% completion", icon: <FaBookOpen size={32} className="text-cyan-400" /> },
                { label: "BADGES", value: "24", sub: "Rare Tier 6", icon: <FaMedal size={32} className="text-purple-400" /> },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-6 hover:border-cyan-400/30 transition-all">
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* Knowledge Momentum */}
              <div className="col-span-8 bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-xl font-semibold">Knowledge Momentum</div>
                    <div className="text-sm text-gray-400">Daily activity over the last 12 months</div>
                  </div>
                  <div className="text-xs bg-[#1E2A4A] px-4 py-1 rounded-full">Year 2024</div>
                </div>

                {/* Activity Heatmap */}
                <div className="grid grid-cols-53 gap-1 mb-6" style={{ gridTemplateRows: 'repeat(7, 14px)' }}>
                  {Array.from({ length: 371 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm transition-all hover:scale-125 ${
                        Math.random() > 0.65 ? 'bg-cyan-400' : 
                        Math.random() > 0.35 ? 'bg-cyan-500/70' : 'bg-[#1E2A4A]'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-end gap-4 text-xs text-gray-400">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-[#1E2A4A] rounded-sm"></div>
                    <div className="w-3 h-3 bg-cyan-500/60 rounded-sm"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-sm"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>

              {/* Badge Gallery */}
              <div className="col-span-4 bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-8">
                <div className="flex justify-between mb-6">
                  <div className="font-semibold">Badge Gallery</div>
                  <div className="text-xs text-cyan-400 cursor-pointer hover:underline">View All</div>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { name: "Century Club" },
                    { name: "Thespian" },
                    { name: "Daily Grind" },
                    { name: "Bite Master" },
                    { name: "Zenith" },
                    { name: "Locked", locked: true },
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-lg border border-gray-700 transition-all
                        ${badge.locked 
                          ? 'bg-gray-800 text-gray-500' 
                          : 'bg-gradient-to-br from-[#1E2A4A] to-[#2A3A5A] text-white'}`}
                      >
                        {badge.locked ? '🔒' : '🏆'}
                      </div>
                      <div className="text-[10px] text-center text-gray-400 font-medium">
                        {badge.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Milestone */}
              <div className="col-span-4 bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-8">
                <div className="font-semibold mb-4">Next Milestone</div>
                <div className="text-sm text-gray-400 mb-6">
                  Complete 6 more topic challenges to unlock the "Zenith Mind" badge.
                </div>
                
                <div className="mb-3 flex justify-between text-xs">
                  <span>18 / 24 MODULES</span>
                  <span className="text-cyan-400 font-medium">75%</span>
                </div>
                <div className="h-2 bg-[#1E2A4A] rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Profile Configuration */}
              <div className="col-span-8 bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-8">
                <div className="text-xl font-semibold mb-8">Profile Configuration</div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs text-gray-400 block mb-2">DISPLAY NAME</label>
                    <input 
                      type="text" 
                      value="Elias Thorne" 
                      className="w-full bg-[#1E2A4A] border border-transparent focus:border-cyan-400 rounded-2xl px-5 py-4 text-sm outline-none"
                      readOnly 
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-2">TITLE PREFIX</label>
                    <input 
                      type="text" 
                      value="The Grand Master" 
                      className="w-full bg-[#1E2A4A] border border-transparent focus:border-cyan-400 rounded-2xl px-5 py-4 text-sm outline-none"
                      readOnly 
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label className="text-xs text-gray-400 block mb-2">MENTAL BIO</label>
                  <textarea 
                    className="w-full h-32 bg-[#1E2A4A] border border-transparent focus:border-cyan-400 rounded-3xl px-5 py-5 text-sm outline-none resize-none"
                    defaultValue="Polymath in training. Dedicated to the pursuit of linguistic mastery and cognitive expansion through daily bite-sized challenges."
                  />
                </div>

                <button className="mt-8 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:brightness-110 px-10 py-4 rounded-2xl text-sm font-semibold transition-all">
                  <FiEdit3 size={18} />
                  Update Persona
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A0F1C] border-t border-[#1E2A4A] text-xs text-gray-500 py-6 px-10 flex justify-between items-center">
        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-300">PRIVACY POLICY</a>
          <a href="#" className="hover:text-gray-300">TERMS OF SERVICE</a>
          <a href="#" className="hover:text-gray-300">HELP CENTER</a>
          <a href="#" className="hover:text-gray-300">API</a>
        </div>
        <div>© 2024 LUMINESCENT SCHOLAR</div>
      </footer>
    </div>
  );
};

export default rProfile;
