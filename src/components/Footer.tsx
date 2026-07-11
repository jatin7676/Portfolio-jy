import React from 'react';
import { Coffee, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-line">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={scrollToTop}
            className="text-lg font-semibold tracking-tight text-ink hover:text-accent transition-colors"
          >
            Jatin Yadav<span className="text-accent">.</span>
          </button>

          <div className="flex items-center gap-2 text-sm text-muted">
            <span>Built with</span>
            <Code2 size={15} className="text-accent" />
            <span>&amp; coffee</span>
            <Coffee size={15} className="text-accent" />
          </div>

          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Jatin Yadav
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;