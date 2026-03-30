import InputField from "../components/login/InputField";
import SocialButton from "../components/login/SocialButton";
import Footer from "../components/login/Footer";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// react-icons imports
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";   // email icon
import { FaLock } from "react-icons/fa";    // lock icon


export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signIn(email, password);
      // For now, just redirect to home or stay here
      navigate("/"); 
    } catch (err) {
      console.error(err.message);
    }
  }


  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-surface-dim to-surface-container text-on-surface font-sans">
      
      {/* Header */}
      <div className="text-center mt-12">
        <h1 className="text-2xl font-bold tracking-tight">Luminescent Scholar</h1>
        <p className="text-sm text-on-surface-variant">
          Enter the obsidian vault of knowledge.
        </p>
      </div>

      {/* Login Box */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-10 rounded-lg shadow-2xl bg-surface-container-low min-h-[440px] flex flex-col justify-center">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              label="Email Address"
              type="email"
              placeholder="scholar@academy.edu"
              icon={<MdEmail className="w-5 h-5" />}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="•••••••••"
              icon={<FaLock className="w-5 h-5" />}
            />

            <button
              type="submit"
              className="w-full bg-brand-indigo text-white py-2 rounded-md transition-colors hover:bg-indigo-700"
            >
              Sign In to Dashboard
            </button>
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
      </div>

      {/* Sign-up link */}
      <div className="text-center text-sm mb-4">
        Don’t have an account?{" "}
        <a href="/register" className="text-brand-indigo hover:underline">
          Sign up for free
        </a>
      </div>

      <Footer />
    </div>
  );
}
