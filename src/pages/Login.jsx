import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/login/Footer";
import InputField from "../components/login/InputField";
import SocialButton from "../components/login/SocialButton";
import { useAuth } from "../context/AuthContext";

// react-icons imports
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

// lucide-react for Eye toggle
import { Eye, EyeOff } from "lucide-react";

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
      if (!rememberSession) localStorage.removeItem("refresh");
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
              icon={<MdEmail className="w-5 h-5" />}
              label="Email Address"
              placeholder="scholar@academy.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password field with Eye toggle */}
            <div className="relative">
              <InputField
                autoComplete="current-password"
                icon={<FaLock className="w-5 h-5" />}
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="•••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-on-surface-variant hover:text-on-surface"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Forgot Password + Remember Session row */}
            <div className="flex items-center justify-between text-sm">
              <Link to="/reset-password" className="text-brand-indigo hover:underline">
                Forgot Password?
              </Link>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberSession}
                  onChange={(e) => setRememberSession(e.target.checked)}
                  className="h-4 w-4 text-brand-indigo border-on-surface-variant rounded"
                />
                <span>Remember this session</span>
              </label>
            </div>

            {/* Indigo button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-indigo text-white py-2 rounded-md transition-colors hover:bg-indigo-700"
            >
              {isSubmitting ? "Signing In..." : "Sign In to Dashboard"}
            </button>

            {feedback && <p className="mt-2 text-sm text-error">{feedback}</p>}
          </form>

          {/* Social Login */}
          <div className="mt-6 text-center">
            <p className="text-sm mb-2">OR CONTINUE WITH</p>
            <div className="flex justify-center gap-4">
              <SocialButton label="Google" icon={<FcGoogle className="w-5 h-5" />} />
              <SocialButton label="GitHub" icon={<FaGithub className="w-5 h-5" />} />
            </div>
          </div>
        </div>
      </main>

      <div className="text-center text-sm mb-4">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-brand-indigo hover:underline">
          Sign up for free
        </Link>
      </div>

      <Footer />
    </div>
  );
}
