import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[2rem] border border-outline-variant/20 bg-surface-container-low/70 px-6 py-5 text-sm text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-on-surface">
            Luminescent Scholar
          </p>
          <p className="mt-1">© 2026 Elevate your mind.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/help">Help Center</Link>
        </div>
      </div>
    </footer>
  );
}
