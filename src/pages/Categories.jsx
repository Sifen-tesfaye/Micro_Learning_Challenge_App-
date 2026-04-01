import "./Categories.css";

const categories = [
  { title: "UI/UX Design", modules: 24 },
  { title: "Backend Systems", modules: 18 },
  { title: "Emotional Intelligence", modules: 12 },
  { title: "Data Analytics", modules: 21 },
  { title: "Cyber Security", modules: 16 },
  { title: "AI Foundations", modules: 19 },
];

export default function Categories() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="logo">Lumi</h2>

        <nav>
          <ul>
            <li>Dashboard</li>
            <li className="active">Categories</li>
            <li>Leaderboard</li>
            <li>Challenges</li>
            <li>Notifications</li>
            <li>Profile</li>
          </ul>
        </nav>

        <button className="new-btn">New Challenge</button>
      </aside>
      
      <div className="main">
        <div className="topbar">
          <input type="text" placeholder="Search categories..." />
          <div className="profile">👤</div>
        </div>

        <div className="header">
          <h1>Explore Categories</h1>
          <p>
            Master new dimensions of expertise through curated challenge pathways.
          </p>
        </div>

  
        <div className="grid">
          {categories.map((cat, i) => (
            <div key={i} className="card">
              <h3>{cat.title}</h3>
              <p>Learn and grow your skills in this domain.</p>

              <div className="card-footer">
                <span>{cat.modules} Modules</span>
                <button>View Path →</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bottom-box">
          <h2>Can't find what you're looking for?</h2>
          <p>Suggest a custom pathway.</p>

          <div className="bottom-actions">
            <button className="primary">Propose Category</button>
            <button className="secondary">Request Enterprise Domain</button>
          </div>
        </div>

     
        <footer className="footer">
          <p>© 2024 Luminescent Scholar</p>
        </footer>

      </div>
    </div>
  );
}
