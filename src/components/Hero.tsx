import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome  <span className="text-teal-400"></span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed animate-fade-in-delay">
  I'm <span className="text-white font-semibold">Jatin Yadav</span>, a final-year Computer Science Engineering student
  with a strong interest in building scalable, full-stack web applications using modern
  technologies and clean software engineering practices.
</p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              Explore My Work
              <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary group"
            >
              👋 Let's Connect
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;