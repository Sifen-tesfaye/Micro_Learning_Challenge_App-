import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function CategoryDetail() {
  const { id } = useParams();

  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Fetch from Django API
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/categories/${id}/`
        );

        if (!res.ok) {
          throw new Error("Category not found");
        }

        const data = await res.json();
        setCategory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  return (
    <Layout>
      {/* LOADING */}
      {loading && (
        <div className="text-center mt-10 text-gray-400">
          Loading category...
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="text-center mt-10 text-red-400">
          {error}
        </div>
      )}

      {/* DATA */}
      {category && (
        <>
          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">
              {category.title}
            </h1>

            <p className="text-gray-400 mt-2">
              {category.description}
            </p>
          </div>

          {/* MODULES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.modules.map((mod) => (
              <div
                key={mod.id}
                className="bg-[#111a2e] p-5 rounded-xl border border-[#1f2a44] hover:border-teal-400 transition"
              >
                <h3 className="text-lg font-semibold">
                  {mod.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  This module has {mod.lessons} lessons.
                </p>

                <div className="flex justify-between mt-4 text-sm">
                  <span className="text-purple-400">
                    {mod.lessons} Lessons
                  </span>

                  <button className="text-teal-400">
                    Start →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}