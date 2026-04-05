export default function InputField({
  autoComplete,
  icon,
  label,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="auth-label">{label}</label>
      <div className="auth-input-shell">
        <span className="auth-input-icon">{icon}</span>
        <input
          autoComplete={autoComplete}
          className="auth-input"
          placeholder={placeholder}
          required
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
