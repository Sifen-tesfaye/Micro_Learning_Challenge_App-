import { Flame } from "lucide-react";
import { Link } from "react-router-dom";

export default function LogoHeader() {
  return (
    <div className="text-center">
      <Link to="/" className="inline-flex flex-col items-center">
        <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Flame className="h-7 w-7" />
        </span>
        <h1 className="text-2xl font-black tracking-tight text-on-surface">
          Luminescent Scholar
        </h1>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-on-surface-variant">
          Reset Access
        </p>
      </Link>
    </div>
  );
}
