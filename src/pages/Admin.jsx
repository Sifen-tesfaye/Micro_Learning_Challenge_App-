import React from "react";
import {
  Bell,
  BookOpen,
  ChartColumn,
  ChartLine,
  House,
  Plus,
  Trophy,
  User,
  Users,
} from "lucide-react";

const AdminPanel = () => {
  const modules = [
    { 
      name: "Quantum Algorithms", 
      category: "Physics & Logic", 
      completion: 88, 
      status: "Live" 
    },
    { 
      name: "Stoic Philosophy", 
      category: "Humanities", 
      completion: 95, 
      status: "Live" 
    },
    { 
      name: "Rust for Systems", 
      category: "Engineering", 
      completion: 76, 
      status: "In Progress" 
    },
  ];

  const recentActivity = [
    { name: "Adrian Thorne", action: "Master Level", time: "2 min ago", avatar: "https://picsum.photos/id/1015/64/64" },
    { name: "Elena Vance", action: "Master Level", time: "14 min ago", avatar: "https://picsum.photos/id/64/64/64" },
    { name: "Julian Mercer", action: "Expert Level", time: "47 min ago", avatar: "https://picsum.photos/id/201/64/64" },
  ];

  const trendingPaths = [
    { rank: 1, name: "Deep Neural Networks", progress: "+22%" },
    { rank: 2, name: "Advanced Game Theory", progress: "+18%" },
    { rank: 3, name: "Macro Economics 101", progress: "-4%" },
    { rank: 4, name: "Creative Directing", progress: "+17%" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white font-sans">
      {/* Top Navigation */}
      <nav className="bg-[#0F1629] border-b border-[#1E2A4A] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold tracking-tight">Admin Panel</div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-[#1E2A4A] px-4 py-2 rounded-2xl">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center text-sm font-bold">👑</div>
            <div>
              <div className="text-xs text-gray-400">Current Admin</div>
              <div className="text-sm font-medium">Grand Master</div>
            </div>
          </div>

          <button className="text-gray-400 hover:text-white">
            <Bell size={24} />
          </button>
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full overflow-hidden border-2 border-[#1E2A4A]">
            <img src="https://picsum.photos/id/1015/128/128" alt="Admin" className="w-full h-full object-cover" />
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-[#0F1629] border-r border-[#1E2A4A] min-h-[calc(100vh-73px)] p-6 flex flex-col">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-cyan-400 text-xl">✦</div>
              <div className="font-semibold text-lg">THE SCHOLAR</div>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            {[
              { icon: <House size={20} />, label: "Dashboard", active: true },
              { icon: <BookOpen size={20} />, label: "Categories" },
              { icon: <Users size={20} />, label: "Users" },
              { icon: <ChartColumn size={20} />, label: "Leaderboard" },
              { icon: <Trophy size={20} />, label: "Challenges" },
              { icon: <Bell size={20} />, label: "Notifications" },
              { icon: <User size={20} />, label: "Profile" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all ${
                  item.active 
                    ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400' 
                    : 'hover:bg-[#1A2339] text-gray-300'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <button className="mt-10 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:brightness-110 w-full py-4 rounded-2xl font-medium text-sm">
            <Plus size={20} />
            New Challenge
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-bold">Console Overview</h1>
              <p className="text-gray-400 mt-2">Managing the cognitive pulse of Luminescent Scholar.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-cyan-400 text-sm font-medium">NETWORK VITALITY</div>
                    <div className="text-5xl font-bold mt-4">14.2k</div>
                    <div className="text-sm text-gray-400">Active Scholars this session</div>
                  </div>
                  <ChartLine className="text-4xl text-cyan-400" />
                </div>
              </div>

              <div className="bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-cyan-400 text-sm font-medium">GLOBAL MASTERY</div>
                    <div className="text-5xl font-bold mt-4">88%</div>
                    <div className="text-sm text-gray-400">Average completion rate</div>
                  </div>
                  <div className="text-5xl">🏆</div>
                </div>
                <div className="h-1.5 bg-[#1E2A4A] rounded-full mt-8 overflow-hidden">
                  <div className="h-full w-[88%] bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                </div>
              </div>

              <div className="bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-cyan-400 text-sm font-medium">NEW ENROLLMENTS</div>
                    <div className="text-5xl font-bold mt-4">+412</div>
                    <div className="text-sm text-gray-400">Last 24 hours</div>
                  </div>
                  <Users className="text-4xl text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Curriculum Modules */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">Curriculum Modules</h2>
                  <p className="text-gray-400 text-sm">Manage micro-learning units and challenge paths</p>
                </div>
                <button className="text-cyan-400 text-sm font-medium hover:underline">Filter View →</button>
              </div>

              <div className="space-y-4">
                {modules.map((module, i) => (
                  <div key={i} className="bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-6 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-2xl flex items-center justify-center text-2xl">
                        📚
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{module.name}</div>
                        <div className="text-sm text-gray-400">{module.category}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-12">
                      <div className="text-center">
                        <div className="text-xs text-gray-400">COMPLETION RATE</div>
                        <div className="text-2xl font-bold text-cyan-400">{module.completion}%</div>
                      </div>

                      <div className={`px-5 py-1.5 rounded-full text-xs font-medium ${
                        module.status === 'Live' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {module.status}
                      </div>

                      <div className="flex gap-3 text-gray-400">
                        <button className="hover:text-white">✏️</button>
                        <button className="hover:text-white">📊</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Recent Scholar Activity */}
              <div className="bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-8">
                <h2 className="text-xl font-semibold mb-6">Recent Scholar Activity</h2>
                <div className="space-y-6">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <img src={activity.avatar} alt={activity.name} className="w-11 h-11 rounded-2xl object-cover" />
                      <div className="flex-1">
                        <div className="font-medium">{activity.name}</div>
                        <div className="text-sm text-gray-400">{activity.action}</div>
                      </div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Paths */}
              <div className="bg-[#0F1629] border border-[#1E2A4A] rounded-3xl p-8">
                <div className="flex justify-between mb-6">
                  <h2 className="text-xl font-semibold">Trending Paths</h2>
                  <button className="text-xs text-cyan-400 hover:underline">VIEW ANALYTICS REPORT</button>
                </div>

                <div className="space-y-5">
                  {trendingPaths.map((path, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-7 h-7 bg-[#1E2A4A] rounded-lg flex items-center justify-center text-xs font-mono text-gray-400">
                          {path.rank}
                        </div>
                        <div className="font-medium">{path.name}</div>
                      </div>
                      <div className={`text-sm font-medium ${path.progress.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                        {path.progress}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A0F1C] border-t border-[#1E2A4A] py-6 px-10 text-xs text-gray-500 flex justify-between">
        <div>LUMINESCENT SCHOLAR © 2024</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-300">PRIVACY POLICY</a>
          <a href="#" className="hover:text-gray-300">TERMS OF SERVICE</a>
        </div>
      </footer>
    </div>
  );
};

export default AdminPanel;
