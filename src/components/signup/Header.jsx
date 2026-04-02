import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-center p-4 bg-surface">
      <div className="flex items-center space-x-2">
        {/* Sparkles icon in purple */}
        <Sparkles className="w-6 h-6 text-purple-600" />

        {/* Brand text in bold */}
        <span className="text-on-surface text-sm font-bold">
          Luminescent Scholar
        </span>
      </div>
    </header>
  );
}
