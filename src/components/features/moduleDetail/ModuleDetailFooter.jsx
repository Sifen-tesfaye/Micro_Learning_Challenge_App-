import { Link } from "react-router-dom";

export default function ModuleDetailFooter({ brand, footer }) {
  return (
    <footer className="relative z-30 w-full py-12 px-8 bg-[#060e20] mt-24">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link
            className="font-bold hover:opacity-90 transition-opacity"
            style={{ color: "#dee5ff" }}
            to="/"
          >
            {brand}
          </Link>
          <p className="text-xs uppercase tracking-widest" style={{ color: "#9baad6" }}>
            {footer.copyright}
          </p>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          {footer.links.map((link) => (
            <a
              key={link.label}
              className="text-xs uppercase tracking-widest opacity-80 hover:opacity-100 transition-all duration-300"
              href={link.to}
              style={{ color: "#9baad6" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
