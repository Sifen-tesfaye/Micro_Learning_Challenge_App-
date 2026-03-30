export default function SocialButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 border rounded-md transition-colors hover:bg-gray-400">
      {icon}
      {label}
    </button>
  );
}
