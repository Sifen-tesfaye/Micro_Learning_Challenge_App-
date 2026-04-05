import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Data states
  const [stats, setStats] = useState({});
  const [feature, setFeature] = useState({});
  const [progress, setProgress] = useState({});
  const [activity, setActivity] = useState([]);
  const [achievements, setAchievements] = useState([]);

  // 🔹 Dummy fallback (VERY IMPORTANT)
  const dummyData = {
    stats: { points: 00, streak: 0, level: 0 },
    feature: {
      title: "Daily Coding Challenge",
      description: "Solve a todays problem to improve your thinking.",
      tag: "AI",
      time: "0h left",
      reward: "+00 pts",
    },
    progress: {
      title: "No Path choosen yet",
      description: "your path description ",
      percent: 0,
    },
    activity: [00, 0, 00, 00, 00, 00, 00],
    achievements: [" 0 Day Streak", " First Challenge", " Fast Learner"],
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // 🔹 Try API
        const res = await fetch("http://127.0.0.1:8000/api/dashboard/");

        if (!res.ok) throw new Error("API not ready");

        const data = await res.json();

        setStats(data.stats);
        setFeature(data.feature);
        setProgress(data.progress);
        setActivity(data.activity);
        setAchievements(data.achievements);
      } catch (err) {
        // 🔹 Fallback to dummy
        setStats(dummyData.stats);
        setFeature(dummyData.feature);
        setProgress(dummyData.progress);
        setActivity(dummyData.activity);
        setAchievements(dummyData.achievements);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Layout showSearch={false}>
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Welcome back </h1>
        <p className="text-gray-400">
          Keep pushing your limits. You're doing great.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-gray-400 mt-10">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/*  FEATURE CARD */}
          <div className="lg:col-span-2 bg-[#111a2e] p-6 rounded-xl border border-[#1f2a44]">
            <span className="text-xs text-teal-400">{feature.tag}</span>
            <h2 className="text-xl font-semibold mt-2">{feature.title}</h2>
            <p className="text-gray-400 mt-2">{feature.description}</p>

            <div className="flex justify-between mt-4 text-sm">
              <span className="text-purple-400">{feature.time}</span>
              <span className="text-yellow-400">{feature.reward}</span>
            </div>

            <button className="mt-4 bg-teal-400 text-black px-4 py-2 rounded-lg">
              Start Challenge
            </button>
          </div>

          {/* 📊 STATS */}
          <div className="space-y-4">
            <div className="bg-[#111a2e] p-4 rounded-xl border border-[#1f2a44]">
              <p className="text-gray-400 text-sm">Points</p>
              <h3 className="text-xl">{stats.points}</h3>
            </div>

            <div className="bg-[#111a2e] p-4 rounded-xl border border-[#1f2a44]">
              <p className="text-gray-400 text-sm">Streak</p>
              <h3 className="text-xl">{stats.streak} days</h3>
            </div>

            <div className="bg-[#111a2e] p-4 rounded-xl border border-[#1f2a44]">
              <p className="text-gray-400 text-sm">Level</p>
              <h3 className="text-xl">{stats.level}</h3>
            </div>
          </div>

          {/* 📈 PROGRESS */}
          <div className="bg-[#111a2e] p-5 rounded-xl border border-[#1f2a44]">
            <h3 className="font-semibold">{progress.title}</h3>
            <p className="text-gray-400 text-sm">{progress.description}</p>

            <div className="w-full bg-[#1e293b] h-2 rounded mt-3">
              <div
                className="bg-teal-400 h-2 rounded"
                style={{ width: `${progress.percent}%` }}
              />
            </div>

            <p className="text-sm mt-2 text-purple-400">
              {progress.percent}% completed
            </p>
          </div>

          {/*  ACTIVITY (simple bars) */}
          <div className="bg-[#111a2e] p-5 rounded-xl border border-[#1f2a44]">
            <h3 className="font-semibold mb-3">Weekly Activity</h3>

            <div className="flex items-end gap-2 h-32">
              {activity.map((val, i) => (
                <div
                  key={i}
                  className="bg-teal-400 w-4 rounded"
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
          </div>

          {/*  ACHIEVEMENTS */}
          <div className="lg:col-span-3 bg-[#111a2e] p-5 rounded-xl border border-[#1f2a44]">
            <h3 className="font-semibold mb-3">Achievements</h3>

            <div className="flex gap-3 flex-wrap">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="bg-[#1e293b] px-3 py-2 rounded-lg text-sm"
                >
                  {a}
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </Layout>
  );
}