export default function InputField({ label, type, placeholder, icon }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-10 pr-3 py-2 border rounded-md bg-surface-dim text-on-surface placeholder-on-surface-variant"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      </div>
    </div>
  );
}
