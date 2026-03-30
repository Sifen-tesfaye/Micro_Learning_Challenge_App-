import "./Categories.css";

const categories = [
  {
    title: "UI/UX Design",
    desc: "Master visual hierarchy, user flows, and accessibility.",
  },
  {
    title: "Backend Systems",
    desc: "APIs, databases, and scalable architectures.",
  },
  {
    title: "Emotional Intelligence",
    desc: "Improve communication and decision-making.",
  },
  {
    title: "Data Analytics",
    desc: "Turn raw data into actionable insights.",
  },
  {
    title: "Cyber Security",
    desc: "Protect systems from modern threats.",
  },
  {
    title: "AI Foundations",
    desc: "Understand AI, ML, and neural networks.",
  },
];

export default function Categories() {
  return (
    <div className="categories-page">
      
      {/* HEADER */}
      <h1 className="title">Explore Categories</h1>

      {/* GRID */}
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
            <button>View Path</button>
          </div>
        ))}
      </div>

      {/* SUGGEST BOX */}
      <div className="suggest-box">
        <h2>Can't find what you're looking for?</h2>
        <p>Suggest a new category and help expand the platform.</p>
        <button className="suggest-btn">Propose Category</button>
      </div>

    </div>
  );
}
