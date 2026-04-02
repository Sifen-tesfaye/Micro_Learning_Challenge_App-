export default function Footer() {
  return (
    <footer className="w-full mt-8 px-8">
      <div className="flex justify-between items-center">
        {/* Left side: Brand and tagline */}
        <div className="flex flex-col items-start space-y-1">
          {/* Luminescent Scholar - bigger and white */}
          <span className="text-lg font-bold text-white">
            Luminescent Scholar
          </span>

          {/* © 2026 Elevate your mind. - same font style, white */}
          <span className="text-sm text-white">
            © 2026 Elevate your mind.
          </span>
        </div>

        {/* Right side: Links */}
        <div className="flex space-x-6">
          <a href="/privacy" className="text-white hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="text-white hover:underline">
            Terms of Service
          </a>
          <a href="/help" className="text-white hover:underline">
            Help Center
          </a>
        </div>
      </div>
    </footer>
  );
}
