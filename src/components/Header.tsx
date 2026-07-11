import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="text-lg font-semibold tracking-tight text-ink">
            Jatin Yadav<span className="text-accent">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="btn-sm">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-line">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('home')} className="nav-link text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-left">About</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link text-left">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link text-left">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link text-left">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;