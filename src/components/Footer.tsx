import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-900/80 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold text-teal-400 mb-4 hover:scale-105 transition-transform cursor-pointer"
          >
            
          </button>
          
         
          
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>using</span>
            <Code2 size={16} className="text-teal-400" />
            <span>and lots of coffee ☕</span>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Jatin Yadav. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;