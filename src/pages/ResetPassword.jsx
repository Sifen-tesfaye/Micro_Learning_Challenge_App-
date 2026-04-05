import Footer from "../components/resetpassword/Footer";
import LogoHeader from "../components/resetpassword/LogoHeader";
import ResetForm from "../components/resetpassword/ResetForm";

export default function ResetPassword() {
  return (
    <div className="auth-page-shell justify-between">
      <div className="px-6 pt-12">
        <LogoHeader />
      </div>

      <main className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-md rounded-[2rem] border border-outline-variant/20 bg-surface-container-low/90 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
          <ResetForm />
        </div>
      </main>

      <div className="px-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
        Having trouble?{" "}
        <a className="text-secondary hover:underline" href="mailto:support@luminescentscholar.com">
          Contact Scholar Support
        </a>
      </div>

      <Footer />
    </div>
  );
}
