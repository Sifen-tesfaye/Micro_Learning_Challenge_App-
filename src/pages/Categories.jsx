import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";
import { categoriesTempData } from "../components/features/moduleDetail/tempData";

const fallbackCategories = categoriesTempData.map((category) => ({
  id: category.id,
  slug: category.slug,
  title: category.name,
  description: category.description,
  modules: category.module_count,
}));

function normalizeCategory(category) {
  return {
    id: category.id,
    slug: category.slug ?? String(category.id),
    title: category.title ?? category.name ?? "Untitled Category",
    description:
      category.description ?? "Learn and grow your skills in this domain.",
    modules:
      category.modules ??
      category.module_count ??
      category.modules_count ??
      category.lessons_count ??
      0,
  };
}

export default function Categories() {
  const [categories, setCategories] = useState(fallbackCategories);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const [proposeOpen, setProposeOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);

  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [enterpriseCompany, setEnterpriseCompany] = useState("");
  const [enterpriseDomain, setEnterpriseDomain] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  useEffect(() => {
    let isActive = true;

    async function fetchCategories() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("http://127.0.0.1:8000/api/categories/");
        if (!response.ok) {
          throw new Error("Unable to load categories from the API.");
        }

        const data = await response.json();
        if (isActive && Array.isArray(data) && data.length > 0) {
          setCategories(data.map(normalizeCategory));
        }
      } catch (fetchError) {
        if (isActive) {
          setError(fetchError.message);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchCategories();

    return () => {
      isActive = false;
    };
  }, []);

  const filteredCategories = useMemo(
    () =>
      categories.filter((category) =>
        `${category.title} ${category.description}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [categories, query],
  );

  async function handleProposeCategory(event) {
    event.preventDefault();
    setFormError("");
    setFormSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/propose-category/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: categoryTitle,
          description: categoryDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to propose category.");
      }

      setFormSuccess("Category proposed successfully.");
      setCategoryTitle("");
      setCategoryDescription("");
      setProposeOpen(false);
    } catch (submitError) {
      setFormError(submitError.message);
    }
  }

  async function handleRequestEnterprise(event) {
    event.preventDefault();
    setFormError("");
    setFormSuccess("");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/request-enterprise/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: enterpriseCompany,
            domain: enterpriseDomain,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit enterprise request.");
      }

      setFormSuccess("Enterprise request submitted.");
      setEnterpriseCompany("");
      setEnterpriseDomain("");
      setRequestOpen(false);
    } catch (submitError) {
      setFormError(submitError.message);
    }
  }

  return (
    <LearningDetailLayout
      streakLabel={`${learningDetailChrome.defaultStreakCount} DAY STREAK`}
    >
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#0d1730]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-secondary">
              Explore
            </p>
            <h1 className="mb-3 text-4xl font-black tracking-tight text-on-surface md:text-5xl">
              Explore Categories
            </h1>
            <p className="text-lg text-on-surface-variant">
              Master new dimensions of expertise through curated challenge
              pathways, with live API content when it is available.
            </p>
          </div>

          <label className="block w-full max-w-md">
            <span className="mb-2 block text-sm font-semibold text-on-surface-variant">
              Search categories
            </span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-[#081122] px-4 py-3 text-on-surface outline-none transition placeholder:text-on-surface-variant focus:border-secondary"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title or description"
              type="search"
              value={query}
            />
          </label>
        </div>

        {loading ? (
          <p className="mb-6 text-on-surface-variant">Loading categories...</p>
        ) : null}

        {error ? (
          <div className="mb-6 rounded-2xl border border-amber-400/25 bg-amber-500/10 px-5 py-4 text-sm text-amber-100">
            {error} Showing the built-in category set instead.
          </div>
        ) : null}

        {filteredCategories.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCategories.map((category) => (
              <article
                key={`${category.slug}-${category.id}`}
                className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 p-6 transition-all hover:-translate-y-1 hover:border-secondary/70 hover:bg-[#13264a]"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="mb-2 text-2xl font-bold text-on-surface">
                      {category.title}
                    </h2>
                    <p className="text-on-surface-variant">
                      {category.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    {category.modules} Modules
                  </span>
                </div>

                <Link
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-[#041225] transition hover:brightness-110"
                  to={`/categories/${category.slug}`}
                >
                  View Path
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 px-6 py-10 text-center text-on-surface-variant">
            No categories matched your search.
          </div>
        )}

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-[#0f1b37] p-8 text-center">
          <h2 className="text-2xl font-bold text-on-surface">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="mt-2 text-on-surface-variant">
            Suggest a custom pathway or request an enterprise domain.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              className="rounded-xl bg-secondary px-5 py-3 font-bold text-[#041225] transition hover:brightness-110"
              onClick={() => setProposeOpen(true)}
              type="button"
            >
              Propose Category
            </button>
            <button
              className="rounded-xl border border-secondary px-5 py-3 font-bold text-secondary transition hover:bg-secondary/10"
              onClick={() => setRequestOpen(true)}
              type="button"
            >
              Request Enterprise Domain
            </button>
          </div>
        </div>

        {proposeOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#091224] p-6">
              <h2 className="mb-4 text-2xl font-bold text-on-surface">
                Propose Category
              </h2>
              {formError ? (
                <p className="mb-4 text-sm text-rose-300">{formError}</p>
              ) : null}
              {formSuccess ? (
                <p className="mb-4 text-sm text-emerald-300">{formSuccess}</p>
              ) : null}
              <form className="space-y-4" onSubmit={handleProposeCategory}>
                <input
                  className="w-full rounded-xl border border-white/10 bg-[#101a31] px-4 py-3 text-on-surface outline-none placeholder:text-on-surface-variant"
                  onChange={(event) => setCategoryTitle(event.target.value)}
                  placeholder="Category title"
                  type="text"
                  value={categoryTitle}
                />
                <textarea
                  className="min-h-32 w-full rounded-xl border border-white/10 bg-[#101a31] px-4 py-3 text-on-surface outline-none placeholder:text-on-surface-variant"
                  onChange={(event) =>
                    setCategoryDescription(event.target.value)
                  }
                  placeholder="Describe the learning pathway you want to see"
                  value={categoryDescription}
                />
                <div className="flex justify-end gap-3">
                  <button
                    className="rounded-xl border border-white/10 px-4 py-2 text-on-surface"
                    onClick={() => setProposeOpen(false)}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-xl bg-secondary px-4 py-2 font-bold text-[#041225]"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        {requestOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#091224] p-6">
              <h2 className="mb-4 text-2xl font-bold text-on-surface">
                Request Enterprise Domain
              </h2>
              {formError ? (
                <p className="mb-4 text-sm text-rose-300">{formError}</p>
              ) : null}
              {formSuccess ? (
                <p className="mb-4 text-sm text-emerald-300">{formSuccess}</p>
              ) : null}
              <form className="space-y-4" onSubmit={handleRequestEnterprise}>
                <input
                  className="w-full rounded-xl border border-white/10 bg-[#101a31] px-4 py-3 text-on-surface outline-none placeholder:text-on-surface-variant"
                  onChange={(event) => setEnterpriseCompany(event.target.value)}
                  placeholder="Company name"
                  type="text"
                  value={enterpriseCompany}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-[#101a31] px-4 py-3 text-on-surface outline-none placeholder:text-on-surface-variant"
                  onChange={(event) => setEnterpriseDomain(event.target.value)}
                  placeholder="Requested domain"
                  type="text"
                  value={enterpriseDomain}
                />
                <div className="flex justify-end gap-3">
                  <button
                    className="rounded-xl border border-white/10 px-4 py-2 text-on-surface"
                    onClick={() => setRequestOpen(false)}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-xl bg-secondary px-4 py-2 font-bold text-[#041225]"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </section>
    </LearningDetailLayout>
  );
}
