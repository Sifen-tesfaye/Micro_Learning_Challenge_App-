import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { User, AtSign, Lock, Eye, EyeOff } from "lucide-react";

export default function RightPanel() {
  const { signUp } = useAuth(); // bring in signup from context
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }
    try {
      await signUp(fullName, email, password);
      console.log("Signup successful!");
      // optional: redirect to dashboard here
    } catch (err) {
      console.error("Signup failed:", err);
    }
  }

  function checkStrength(value) {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    switch (score) {
      case 0:
      case 1:
        setStrength("Weak");
        break;
      case 2:
        setStrength("Medium");
        break;
      case 3:
        setStrength("Strong");
        break;
      case 4:
        setStrength("Very Strong");
        break;
      default:
        setStrength("");
    }
  }

  return (
    <div className="w-[45%] flex flex-col bg-surface-dark p-8">
      <h2 className="text-2xl font-bold mb-2 text-on-surface">Create Account</h2>
      <p className="text-on-surface-variant mb-6">
        Begin your journey towards mastery today.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 flex-1">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-on-surface-variant">
            FULL NAME
          </label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full pl-10 rounded-md border border-surface-container-low bg-surface-container-low text-on-surface px-3 py-2 outline-none"
              placeholder="Julian Voss"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-on-surface-variant">
            EMAIL ADDRESS
          </label>
          <div className="relative mt-1">
            <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 rounded-md border border-surface-container-low bg-surface-container-low text-on-surface px-3 py-2 outline-none"
              placeholder="voss@scholar.edu"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-on-surface-variant">
            SECURE PASSWORD
          </label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                checkStrength(e.target.value);
              }}
              className="w-full pl-10 pr-10 rounded-md border border-surface-container-low bg-surface-container-low text-on-surface px-3 py-2 outline-none"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Strength bar with 4 partitions */}
          {strength && (
            <div className="mt-2">
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`flex-1 h-2 rounded ${
                      (strength === "Weak" && i === 0) ? "bg-red-500" :
                      (strength === "Medium" && i < 2) ? "bg-yellow-500" :
                      (strength === "Strong" && i < 3) ? "bg-green-500" :
                      (strength === "Very Strong" && i < 4) ? "bg-green-600" :
                      "bg-surface-container-low"
                    }`}
                  ></div>
                ))}
              </div>
              <p
                className={`text-xs mt-1 ${
                  strength === "Weak"
                    ? "text-red-500"
                    : strength === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                Strength: {strength}
              </p>
            </div>
          )}
        </div>

        {/* Terms checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="h-4 w-4 text-brand-indigo border-on-surface-variant rounded"
          />
          <label className="ml-2 text-sm text-on-surface-variant">
            I agree to the Terms of Service and Privacy Policy.
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-indigo-400 text-surface-dark py-2 px-4 rounded-md transition hover:bg-indigo-500 active:scale-95"
        >
          Create Account →
        </button>
      </form>

      <p className="mt-3 text-sm text-on-surface-variant text-center">
        Already have an account?{" "}
        <a
          href="/login"
          className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent hover:underline"
        >
          Login
        </a>
      </p>
    </div>
  );
}
