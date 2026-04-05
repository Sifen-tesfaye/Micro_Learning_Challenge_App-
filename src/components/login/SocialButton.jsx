export default function SocialButton({ icon, label }) {
  return (
    <button
      className="flex items-center justify-center gap-3 rounded-2xl border border-outline-variant/25 bg-surface/40 px-4 py-3 text-sm text-on-surface transition hover:border-primary/40 hover:bg-surface-bright/70"
      type="button"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
