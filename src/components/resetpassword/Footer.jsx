export default function Footer() {
  return (
    <footer className="w-full bg-surface-container py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        
        {/* Left corner */}
        <div className="font-bold text-white">LUMINESCENT SCHOLAR</div>
        
        {/* Center links */}
        <div className="flex gap-6 text-gray-500">
          <a href="#" className="hover:underline">PRIVACY POLICY</a>
          <a href="#" className="hover:underline">TERMS OF SERVICE</a>
          <a href="#" className="hover:underline">HELP CENTER</a>
          <a href="#" className="hover:underline">API</a>
        </div>
        
        {/* Right corner */}
        <div className="text-gray-500 text-right">
          © 2024 LUMINESCENT SCHOLAR. ELEVATE YOUR MIND.
        </div>
      </div>
    </footer>
  );
}
