import { Code2, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/login/Footer";
import InputField from "../components/login/InputField";
import SocialButton from "../components/login/SocialButton";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberSession, setRememberSession] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    try {
      await signIn(email, password);

      if (!rememberSession) {
        localStorage.removeItem("refresh");
      }

      navigate("/dashboard");
    } catch (error) {
      setFeedback(error.message || "Unable to sign in with those credentials.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="auth-page-shell justify-between">
      <div className="px-6 pt-12 text-center">
        <Link to="/" className="inline-flex flex-col items-center">
          <span className="text-2xl font-black tracking-tight text-on-surface">
            Luminescent Scholar
          </span>
          <span className="mt-2 text-sm text-on-surface-variant">
            Enter the vault of deliberate daily learning.
          </span>
        </Link>
      </div>

      <main className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-md rounded-[2rem] border border-outline-variant/20 bg-surface-container-low/85 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <InputField
              autoComplete="email"
              icon={<Mail className="h-4 w-4" />}
              label="Email Address"
              placeholder="scholar@academy.edu"
              type="email"
              value={email}
              onChange={setEmail}
            />

            <div>
              <label className="auth-label">Password</label>
              <div className="auth-input-shell">
                <span className="auth-input-icon">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  autoComplete="current-password"
                  className="auth-input"
                  placeholder="Enter your password"
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
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <Link className="text-secondary hover:underline" to="/reset-password">
                Forgot Password?
              </Link>

              <label className="flex items-center gap-2 text-on-surface-variant">
                <input
                  checked={rememberSession}
                  className="h-4 w-4 rounded border-outline text-primary"
                  type="checkbox"
                  onChange={(event) => setRememberSession(event.target.checked)}
                />
                Remember this session
              </label>
            </div>

            {feedback ? (
              <p className="rounded-2xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
                {feedback}
              </p>
            ) : null}

            <button
              className="w-full rounded-2xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-on-primary transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Signing In..." : "Sign In to Dashboard"}
            </button>
          </form>

          <div className="mt-8">
            <p className="text-center text-xs font-semibold tracking-[0.24em] text-on-surface-variant">
              OR CONTINUE WITH
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <SocialButton
                icon={<span className="font-bold text-secondary">G</span>}
                label="Google"
              />
              <SocialButton
                icon={<Code2 className="h-4 w-4" />}
                label="GitHub"
              />
            </div>
          </div>
        </div>
      </main>

      <div className="px-6 pb-4 text-center text-sm text-on-surface-variant">
        Don&apos;t have an account?{" "}
        <Link className="font-semibold text-secondary hover:underline" to="/signup">
          Sign up for free
        </Link>
      </div>

      <Footer />
    </div>
  );
}
