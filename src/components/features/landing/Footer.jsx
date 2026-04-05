import { Link } from "react-router-dom";

function Footer({ brand, description, links, actions, copyright }) {
  return (
    <footer className="w-full py-12 px-8 bg-surface-dim">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="space-y-4 text-center md:text-left">
            <Link
              className="text-2xl font-bold tracking-tighter text-on-surface"
              to="/"
            >
              {brand}
            </Link>
            <p className="text-on-surface-variant max-w-xs text-sm">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="text-on-surface-variant text-xs uppercase tracking-widest font-bold hover:text-tertiary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {actions.map((action) => (
              <button
                key={action.icon}
                aria-label={action.label}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-tertiary transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-xl">
                  {action.icon}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant/20 text-center">
          <p className="text-on-surface-variant text-xs uppercase tracking-[0.2em]">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
