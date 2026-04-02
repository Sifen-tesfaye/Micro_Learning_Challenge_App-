import Header from "../components/signup/Header";
import LeftPanel from "../components/signup/LeftPanel";
import RightPanel from "../components/signup/RightPanel";
import Footer from "../components/signup/Footer";
import { AuthProviderSignup } from "../context/AuthContextSignup";

export default function Signup() {
  return (
    <AuthProviderSignup>
      <div className="min-h-screen flex flex-col text-on-surface">
        {/* Header at the top */}
        <Header />

        {/* Main content area */}
        <div className="flex flex-1 items-center justify-center">
          {/* Unified box */}
          <div className="w-full max-w-4xl min-h-[95vh] bg-surface-dark shadow-lg rounded-lg flex overflow-hidden">
            <LeftPanel />
            <RightPanel />
          </div>
        </div>

        {/* Footer always at the bottom */}
        <Footer />
      </div>
    </AuthProviderSignup>
  );
}
