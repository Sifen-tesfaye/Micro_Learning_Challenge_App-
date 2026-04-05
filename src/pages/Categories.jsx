import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

// 🔹 TEMP DATA (fallback)
const fallbackCategories = [
  { id: 1, title: "UI/UX Design", modules: 24 },
  { id: 2, title: "Backend Systems", modules: 18 },
  { id: 3, title: "Emotional Intelligence", modules: 12 },
  { id: 4, title: "Data Analytics", modules: 21 },
  { id: 5, title: "Cyber Security", modules: 16 },
  { id: 6, title: "AI Foundations", modules: 19 },
];

export default function Categories() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState(fallbackCategories); // start with fallback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [proposeOpen, setProposeOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);

  // Form states
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [enterpriseCompany, setEnterpriseCompany] = useState("");
  const [enterpriseDomain, setEnterpriseDomain] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  // 🔹 Fetch categories from API (replace fallback if data exists)
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://127.0.0.1:8000/api/categories/");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        if (data && data.length > 0) setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Layout>
      {({ search }) => {
        const filteredCategories = categories.filter((cat) =>
          cat.title.toLowerCase().includes(search.toLowerCase())
        );

        // 🔹 Propose Category API
        const handleProposeCategory = async (e) => {
          e.preventDefault();
          setFormError("");
          setFormSuccess("");
          try {
            const res = await fetch("http://127.0.0.1:8000/api/propose-category/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: categoryTitle,
                description: categoryDescription,
              }),
            });
            if (!res.ok) throw new Error("Failed to propose category");
            setFormSuccess("Category proposed!");
            setCategoryTitle("");
            setCategoryDescription("");
            setProposeOpen(false);
          } catch (err) {
            setFormError(err.message);
          }
        };

        // 🔹 Request Enterprise API
        const handleRequestEnterprise = async (e) => {
          e.preventDefault();
          setFormError("");
          setFormSuccess("");
          try {
            const res = await fetch("http://127.0.0.1:8000/api/request-enterprise/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                company: enterpriseCompany,
                domain: enterpriseDomain,
              }),
            });
            if (!res.ok) throw new Error("Failed to submit request");
            setFormSuccess("Request submitted!");
            setEnterpriseCompany("");
            setEnterpriseDomain("");
            setRequestOpen(false);
          } catch (err) {
            setFormError(err.message);
          }
        };

        return (
          <>
            {/* HEADER */}
            <div className="mb-6">
              <h1 className="text-2xl font-semibold">Explore Categories</h1>
              <p className="text-gray-400">
                Master new dimensions of expertise through curated challenge pathways.
              </p>
            </div>

            {/* LOADING / ERROR / GRID */}
            {loading && <p className="text-gray-400">Loading categories...</p>}
            {error && <p className="text-red-400">{error}</p>}

            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className="bg-[#111a2e] p-5 rounded-xl border border-[#1f2a44] hover:border-teal-400 transition"
                  >
                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                    <p className="text-sm text-gray-400 mt-2">
                      Learn and grow your skills in this domain.
                    </p>
                    <div className="flex justify-between mt-4 text-sm">
                      <span className="text-purple-400">{cat.modules} Modules</span>
                      <button
                        className="text-teal-400"
                        onClick={() => navigate(`/category/${cat.id}`)}
                      >
                        View Path →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mt-10 text-gray-400">
                <p className="text-lg">No categories found </p>
              </div>
            )}

            {/* BOTTOM BUTTONS */}
            <div className="mt-10 bg-[#16213e] p-6 rounded-xl text-center">
              <h2 className="text-lg font-semibold">Can't find what you're looking for?</h2>
              <p className="text-gray-400 mt-2">Suggest a custom pathway.</p>

              <div className="mt-4 space-x-3">
                <button
                  className="bg-teal-400 text-black px-4 py-2 rounded-lg"
                  onClick={() => setProposeOpen(true)}
                >
                  Propose Category
                </button>

                <button
                  className="border border-teal-400 text-teal-400 px-4 py-2 rounded-lg"
                  onClick={() => setRequestOpen(true)}
                >
                  Request Enterprise Domain
                </button>
              </div>
            </div>

            {/* MODALS */}
            {proposeOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-[#111a2e] p-6 rounded-xl max-w-md w-full">
                  <h2 className="text-xl font-semibold mb-4 text-white">Propose Category</h2>
                  {formError && <p className="text-red-400">{formError}</p>}
                  {formSuccess && <p className="text-green-400">{formSuccess}</p>}
                  <form onSubmit={handleProposeCategory} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Category Title"
                      value={categoryTitle}
                      onChange={(e) => setCategoryTitle(e.target.value)}
                      className="w-full p-2 rounded-lg bg-[#16213e] text-white border border-gray-600"
                    />
                    <textarea
                      placeholder="Description"
                      value={categoryDescription}
                      onChange={(e) => setCategoryDescription(e.target.value)}
                      className="w-full p-2 rounded-lg bg-[#16213e] text-white border border-gray-600"
                    />
                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg border border-gray-400 text-white"
                        onClick={() => setProposeOpen(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="px-4 py-2 rounded-lg bg-teal-400 text-black">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {requestOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-[#111a2e] p-6 rounded-xl max-w-md w-full">
                  <h2 className="text-xl font-semibold mb-4 text-white">Request Enterprise Domain</h2>
                  {formError && <p className="text-red-400">{formError}</p>}
                  {formSuccess && <p className="text-green-400">{formSuccess}</p>}
                  <form onSubmit={handleRequestEnterprise} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={enterpriseCompany}
                      onChange={(e) => setEnterpriseCompany(e.target.value)}
                      className="w-full p-2 rounded-lg bg-[#16213e] text-white border border-gray-600"
                    />
                    <input
                      type="text"
                      placeholder="Requested Domain"
                      value={enterpriseDomain}
                      onChange={(e) => setEnterpriseDomain(e.target.value)}
                      className="w-full p-2 rounded-lg bg-[#16213e] text-white border border-gray-600"
                    />
                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg border border-gray-400 text-white"
                        onClick={() => setRequestOpen(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="px-4 py-2 rounded-lg bg-teal-400 text-black">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </>
        );
      }}
    </Layout>
  );
}