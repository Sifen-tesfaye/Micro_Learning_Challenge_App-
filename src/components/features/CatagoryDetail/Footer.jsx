import { Link } from "react-router-dom";

export default function Footer({ brand, copyright, links = [] }) {
  return (
    <footer className="relative z-10 w-full bg-surface px-8 py-12">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="text-lg font-bold text-on-surface">{brand}</span>
          <p className="text-xs uppercase tracking-widest text-on-surface-variant">
            {copyright}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              className="text-xs uppercase tracking-widest text-on-surface-variant opacity-80 transition-colors hover:text-primary hover:opacity-100"
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
