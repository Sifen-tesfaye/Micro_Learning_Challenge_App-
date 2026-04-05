import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[2rem] border border-outline-variant/20 bg-surface-container/70 px-6 py-5 text-sm text-on-surface-variant lg:flex-row lg:items-center lg:justify-between">
        <div className="font-semibold uppercase tracking-[0.2em] text-on-surface">
          Luminescent Scholar
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/help">Help Center</Link>
          <Link to="/api">API</Link>
        </div>
        <div>© 2026 Luminescent Scholar. Elevate your mind.</div>
      </div>
    </footer>
  );
}
