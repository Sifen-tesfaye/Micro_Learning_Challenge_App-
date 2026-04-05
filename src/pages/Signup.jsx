import Footer from "../components/signup/Footer";
import Header from "../components/signup/Header";
import LeftPanel from "../components/signup/LeftPanel";
import RightPanel from "../components/signup/RightPanel";

export default function Signup() {
  return (
    <div className="auth-page-shell">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 pb-8 sm:px-6">
        <div className="auth-frame w-full max-w-6xl overflow-hidden">
          <LeftPanel />
          <RightPanel />
        </div>
      </main>

      <Footer />
    </div>
  );
}
