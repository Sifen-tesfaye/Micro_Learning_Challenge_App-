import React from 'react';
import { 
  FiHome, 
  FiBook, 
  FiBarChart2, 
  FiAward, 
  FiBell, 
  FiUser 
} from 'react-icons/fi';
import { FaTrophy, FaCrown } from 'react-icons/fa';

const Leaderboard = () => {
  const topThree = [
    {
      rank: 2,
      name: "Elena Vance",
      level: 42,
      title: "Grand Strategist",
      xp: "18,420",
      avatar: "https://picsum.photos/id/64/128/128"
    },
    {
      rank: 1,
      name: "Julian Thorne",
      level: 50,
      title: "Omniscient",
      xp: "24,890",
      avatar: "https://picsum.photos/id/1015/128/128",
      isCurrent: true
    },
    {
      rank: 3,
      name: "Marcus Chen",
      level: 39,
      title: "Sage Initiate",
      xp: "16,150",
      avatar: "https://picsum.photos/id/201/128/128"
    }
  ];

  const leaderboardData = [
    { rank: 4, name: "Sophia Lind", level: 35, title: "Polymath", xp: "14,200" },
    { rank: 5, name: "Arthur Dent", level: 34, title: "Historian", xp: "13,890" },
    { rank: 6, name: "Alex Mercer (You)", level: 42, title: "Polymath", xp: "9,840", isYou: true },
    { rank: 7, name: "Leo Rodriguez", level: 31, title: "Architect", xp: "11,900" },
  ];

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
            <a href="#" className="text-cyan-400 font-medium border-b-2 border-cyan-400 pb-1">Leaderboard</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search scholars..."
              className="w-full bg-[#1E2A4A] border border-[#2A3A5A] rounded-2xl py-3 px-5 pl-12 text-sm focus:outline-none focus:border-cyan-400"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <FiBell size={22} />
          </button>
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full overflow-hidden border-2 border-[#1E2A4A]">
            <img src="https://picsum.photos/id/1015/128/128" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-[#0F1629] border-r border-[#1E2A4A] min-h-[calc(100vh-73px)] p-6 flex flex-col">
          <div className="mb-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-cyan-400">
                <img src="https://picsum.photos/id/1015/128/128" alt="Scholar" className="w-full h-full object-cover" />
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
              { icon: <FiBarChart2 size={20} />, label: "Leaderboard", active: true },
              { icon: <FiAward size={20} />, label: "Challenges" },
              { icon: <FiBell size={20} />, label: "Notifications" },
              { icon: <FiUser size={20} />, label: "Profile" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  item.active ? 'bg-[#1E2A4A] text-cyan-400' : 'hover:bg-[#1A2339] text-gray-300'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <button className="mt-8 w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium py-3.5 rounded-2xl transition-all">
            New Challenge
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-cyan-400 text-sm font-medium tracking-widest">HALL OF EXCELLENCE</div>
                <h1 className="text-4xl font-bold">Global Leaderboard</h1>
              </div>

              <div className="flex gap-2">
                {['Weekly', 'Monthly', 'All-time'].map((period, i) => (
                  <button
                    key={i}
                    className={`px-6 py-2 rounded-2xl text-sm font-medium transition-all ${
                      i === 2 
                        ? 'bg-cyan-400 text-black' 
                        : 'bg-[#1E2A4A] hover:bg-[#2A3A5A]'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Top 3 Podium */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {topThree.map((player, index) => (
                <div
                  key={index}
                  className={`relative rounded-3xl p-8 border transition-all ${
                    player.rank === 1 
                      ? 'bg-gradient-to-b from-[#1E2A4A] to-[#0F1629] border-cyan-400 scale-105 shadow-2xl' 
                      : 'bg-[#0F1629] border-[#1E2A4A]'
                  }`}
                >
                  {player.rank === 1 && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-yellow-400 to-amber-500 text-black text-2xl w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                      👑
                    </div>
                  )}

                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-gray-700">
                        <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                      </div>
                      <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-2xl flex items-center justify-center text-xl font-bold border-4 border-[#0F1629] ${
                        player.rank === 1 ? 'bg-cyan-400 text-black' : 'bg-[#1E2A4A] text-white'
                      }`}>
                        {player.rank}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-1">{player.name}</h3>
                    <p className="text-cyan-400 text-sm">Level {player.level} • {player.title}</p>
                    
                    <div className="mt-8 bg-[#1E2A4A] rounded-2xl px-8 py-3 w-full">
                      <div className="text-xs text-gray-400">TOTAL EXPERIENCE</div>
                      <div className="text-3xl font-bold text-cyan-400">{player.xp} XP</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Full Leaderboard Table */}
            <div className="bg-[#0F1629] rounded-3xl overflow-hidden border border-[#1E2A4A]">
              <div className="grid grid-cols-12 px-10 py-5 border-b border-[#1E2A4A] text-xs uppercase tracking-widest text-gray-400">
                <div className="col-span-1">RANK</div>
                <div className="col-span-5">SCHOLAR</div>
                <div className="col-span-3">TITLE &amp; LEVEL</div>
                <div className="col-span-3 text-right">TOTAL EXPERIENCE</div>
              </div>

              {leaderboardData.map((entry, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-12 px-10 py-6 border-b border-[#1E2A4A] items-center hover:bg-[#1A2339] transition-colors ${
                    entry.isYou ? 'bg-[#1E2A4A]/70' : ''
                  }`}
                >
                  <div className="col-span-1 font-mono text-lg font-medium">
                    {entry.rank.toString().padStart(2, '0')}
                  </div>

                  <div className="col-span-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-gray-700">
                      <img 
                        src={entry.isYou ? "https://picsum.photos/id/1015/128/128" : `https://picsum.photos/id/${60 + index}/128/128`} 
                        alt={entry.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <div className="font-medium">{entry.name}</div>
                      {entry.isYou && <div className="text-cyan-400 text-xs">YOUR CURRENT POSITION</div>}
                    </div>
                  </div>

                  <div className="col-span-3 text-sm">
                    Lvl {entry.level} • {entry.title}
                  </div>

                  <div className="col-span-3 text-right font-mono text-cyan-400 font-semibold">
                    {entry.xp} XP
                  </div>
                </div>
              ))}
            </div>

            {/* Current User Highlight */}
            <div className="mt-8 flex justify-center">
              <div className="bg-[#1E2A4A] border border-cyan-400/30 rounded-3xl px-10 py-5 flex items-center gap-8 text-sm">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">📍</div>
                  <div>
                    <div className="text-cyan-400">YOUR CURRENT POSITION</div>
                    <div className="font-medium">Alex Mercer (You)</div>
                  </div>
                </div>
                <div className="text-cyan-400 font-mono">9,840 XP TOTAL</div>
                <button className="ml-auto bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2.5 rounded-2xl text-sm font-medium transition-all">
                  View My Stats
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
