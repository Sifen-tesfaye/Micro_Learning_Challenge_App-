import { ArrowLeft, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ResetForm() {
  const { clearStatus, resetPassword, status } = useAuth();
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => () => clearStatus(), [clearStatus]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    try {
      const result = await resetPassword(email);
      setFeedback(result.message || "Reset link sent. Check your inbox.");
    } catch (error) {
      setFeedback(error.message || "Unable to send a reset link right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="w-full space-y-5" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-2xl font-black text-on-surface">Forgot Password?</h2>
        <p className="mt-2 text-sm leading-6 text-on-surface-variant">
          Enter the email linked to your scholar account and we&apos;ll send you
          a reset link.
        </p>
      </div>

      <div>
        <label className="auth-label">Email Address</label>
        <div className="auth-input-shell">
          <Mail className="auth-input-icon" />
          <input
            autoComplete="email"
            className="auth-input"
            placeholder="scholar@example.com"
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>

      {feedback || status ? (
        <p className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-on-surface">
          {feedback || status}
        </p>
      ) : null}

      <button
        className="w-full rounded-2xl bg-indigo-300 text-white px-5 py-3 text-sm font-semibold transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Sending..." : "Send Reset Link"}
      </button>

      <div className="pt-2 text-center text-sm text-on-surface-variant">
        <Link
          className="inline-flex items-center gap-2 font-medium text-secondary hover:underline"
          to="/login"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Login
        </Link>
      </div>
    </form>
  );
}
