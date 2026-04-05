import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function RightPanel() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const strength = getPasswordStrength(password);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!agree) {
      setFeedback("You need to agree to the terms before continuing.");
      return;
    }

    setIsSubmitting(true);
    setFeedback("");

    try {
      await signUp(fullName, email, password);
      navigate("/dashboard");
    } catch (error) {
      setFeedback(error.message || "Unable to create your account right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-surface-container-low/85 p-8 sm:p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-black tracking-tight text-on-surface">
          Create Account
        </h2>
        <p className="mt-2 text-sm leading-6 text-on-surface-variant">
          Begin your journey toward mastery with a scholar profile built for
          daily momentum.
        </p>
      </div>

      <form className="flex flex-1 flex-col gap-5" onSubmit={handleSubmit}>
        <AuthField
          autoComplete="name"
          icon={User}
          label="Full Name"
          placeholder="Julian Voss"
          type="text"
          value={fullName}
          onChange={setFullName}
        />

        <AuthField
          autoComplete="email"
          icon={Mail}
          label="Email Address"
          placeholder="scholar@academy.edu"
          type="email"
          value={email}
          onChange={setEmail}
        />

        <div>
          <label className="auth-label">Secure Password</label>
          <div className="auth-input-shell">
            <Lock className="auth-input-icon" />
            <input
              autoComplete="new-password"
              className="auth-input"
              placeholder="Create a strong password"
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="button"
              className="rounded-full p-1 text-on-surface-variant transition hover:text-on-surface"
              onClick={() => setShowPassword((current) => !current)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          <PasswordStrength strength={strength} />
        </div>

        <label className="flex items-start gap-3 rounded-2xl border border-outline-variant/20 bg-surface/30 p-4 text-sm text-on-surface-variant">
          <input
            checked={agree}
            className="mt-1 h-4 w-4 rounded border-outline text-primary"
            type="checkbox"
            onChange={(event) => setAgree(event.target.checked)}
          />
          <span>
            I agree to the Terms of Service and Privacy Policy.
          </span>
        </label>

        {feedback ? (
          <p className="rounded-2xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
            {feedback}
          </p>
        ) : null}

        <button
          className="mt-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-on-primary transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-on-surface-variant">
        Already have an account?{" "}
        <Link className="font-semibold text-secondary hover:underline" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}

function AuthField({
  autoComplete,
  icon: Icon,
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
        <Icon className="auth-input-icon" />
        <input
          autoComplete={autoComplete}
          className="auth-input"
          placeholder={placeholder}
          required
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}

function PasswordStrength({ strength }) {
  const levels = {
    weak: { count: 1, label: "Weak", tone: "bg-error" },
    medium: { count: 2, label: "Medium", tone: "bg-amber-400" },
    strong: { count: 3, label: "Strong", tone: "bg-secondary" },
    veryStrong: { count: 4, label: "Very Strong", tone: "bg-primary" },
  };

  const current = levels[strength.key];

  if (!current) return null;

  return (
    <div className="mt-3">
      <div className="flex gap-2">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={`h-2 flex-1 rounded-full ${
              index < current.count ? current.tone : "bg-surface-bright"
            }`}
          />
        ))}
      </div>
      <p className="mt-2 text-xs text-on-surface-variant">
        Strength: <span className="font-semibold text-on-surface">{current.label}</span>
      </p>
    </div>
  );
}

function getPasswordStrength(password) {
  if (!password) return { key: "" };

  let score = 0;

  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 1) return { key: "weak" };
  if (score === 2) return { key: "medium" };
  if (score === 3) return { key: "strong" };
  return { key: "veryStrong" };
}
