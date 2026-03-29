function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-surface-dim">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-2xl font-bold tracking-tighter text-on-surface">
              Luminescent Scholar
            </span>
            <p className="text-on-surface-variant max-w-xs text-sm">
              Elevate your mind. Master your craft. One challenge at a time.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="#"
              className="text-on-surface-variant text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-on-surface-variant text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-on-surface-variant text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors"
            >
              Help Center
            </a>
            <a
              href="#"
              className="text-on-surface-variant text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors"
            >
              API
            </a>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
            <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">
                alternate_email
              </span>
            </button>
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant/20 text-center">
          <p className="text-on-surface-variant text-xs uppercase tracking-[0.2em]">
            © 2026 Luminescent Scholar. Elevate your mind.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
