import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-6 pb-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-center text-xs text-on-surface-variant sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>© 2026 Luminescent Scholar. Elevate your mind.</div>
        <div className="flex justify-center gap-4">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/help">Help Center</Link>
        </div>
      </div>
    </footer>
  );
}
