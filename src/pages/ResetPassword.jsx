import LogoHeader from "../components/resetpassword/LogoHeader";
import ResetForm from "../components/resetpassword/ResetForm";
import Footer from "../components/resetpassword/Footer";

export default function ResetPassword() {
  return (
    
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-surface-dim to-surface-container text-on-surface font-sans">
        
        {/* Header OUTSIDE the box */}
        <div className="text-center mt-12">
          <LogoHeader />
        </div>

        {/* Reset Box */}
        <div className="flex-grow flex items-center justify-center">
         <div className="w-full max-w-md p-8 rounded-lg shadow-2xl bg-surface-bright flex flex-col items-center">
            <ResetForm />
          </div>
        </div>

        {/* Support Text Block */}
        <div className="flex justify-center items-center gap-2 mt-8 mb-6 text-xs">
          <span className="text-gray-500">HAVING TROUBLE?</span>
          <a href="/support" className="text-green-200 hover:underline">
            CONTACT SCHOLAR SUPPORT
          </a>
        </div>

        <Footer />
      </div>
     );
}
