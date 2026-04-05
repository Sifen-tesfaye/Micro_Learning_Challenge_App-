import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-6 py-5">
      <Link
        to="/"
        className="mx-auto flex w-fit items-center gap-3 rounded-full border border-outline-variant/30 bg-surface-container-low/60 px-4 py-2 text-on-surface transition hover:border-primary/40 hover:bg-surface-container"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Sparkles className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold tracking-[0.18em] uppercase">
          Luminescent Scholar
        </span>
      </Link>
    </header>
  );
}
