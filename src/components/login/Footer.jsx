export default function Footer() {
  return (
    <footer className="flex justify-between items-center text-xs text-on-surface-variant px-6 mb-6">
      <div>© 2024 Luminescent Scholar. Elevate your mind.</div>
      <div className="space-x-3">
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:underline">Terms of Service</a>
        <a href="/help" className="hover:underline">Help Center</a>
      </div>
    </footer>
  );
}
