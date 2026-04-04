import { useState, useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AuthContextResetPassword } from "../../context/AuthContextResetPassword";


export default function ResetForm() {
  const { resetPassword, status } = useContext(AuthContextResetPassword);
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await resetPassword(email);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mb-6 mt-0">
      <h2 className="text-lg font-semibold mb-2">Forgot Password?</h2>
      <p className="text-sm text-on-surface-variant mb-4">
        Enter the email address associated with your account and we'll send you a link to reset your password.
      </p>
      <label className="block text-sm font-medium mb-1">Email Address</label>
      <div className="relative w-full">
        <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo" />
        <input
          type="email"
          placeholder="scholar@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-md bg-surface-dim text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-300 text-indigo-700 py-2 rounded-md transition-colors hover:bg-indigo-400 mt-8"
      >
        Send Reset Link
      </button>

      {/* Feedback message */}
      {status && <p className="text-sm mt-4 text-gray-500">{status}</p>}

      <div className="text-center text-sm mt-6">
        <a href="/login" className="text-white hover:underline inline-flex items-center gap-1">
          <FaArrowLeft /> Back to Login
        </a>
      </div>
    </form>
  );
}
