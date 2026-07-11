import { Monitor, ArrowRight, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-10 items-center max-w-5xl mx-auto">
          {/* Left — welcome + intro */}
          <div>
            <p className="eyebrow animate-rise">
              <Monitor size={14} /> Welcome to my portfolio
            </p>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] whitespace-nowrap animate-rise-1">
              Hi, I'm Jatin Yadav<span className="text-accent">.</span>
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-rise-2">
              <button onClick={() => scrollToSection('projects')} className="btn-primary group">
                Explore my work
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary group">
                Let's connect
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right — computer / monitor illustration */}
          <div className="flex justify-center animate-rise-2">
            <div className="w-full max-w-md">
              {/* Monitor screen */}
              <div className="rounded-2xl border border-line bg-paper shadow-[0_20px_60px_-30px_rgba(27,26,23,0.35)] overflow-hidden">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                  <span className="w-3 h-3 rounded-full bg-[#e5806b]" />
                  <span className="w-3 h-3 rounded-full bg-[#e6c15a]" />
                  <span className="w-3 h-3 rounded-full bg-[#8bbf7a]" />
                  <span className="ml-3 text-xs font-mono text-muted">jatin.dev — bash</span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm leading-7">
                  <p className="text-muted">
                    <span className="text-accent">$</span> whoami
                  </p>
                  <p className="text-ink">jatin_yadav</p>
                  <p className="mt-3 text-muted">
                    <span className="text-accent">$</span> cat about.txt
                  </p>
                  <p className="text-ink">Full-stack developer</p>
                  <p className="text-ink">CSE @ NSUT · Delhi, India</p>
                  <p className="mt-3 text-muted">
                    <span className="text-accent">$</span> status
                  </p>
                  <p className="text-ink flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8bbf7a] animate-pulse" />
                    Available for opportunities
                    <span className="inline-block w-2 h-4 bg-ink/70 animate-pulse" />
                  </p>
                </div>
              </div>

              {/* Monitor stand */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-5 bg-paper border-x border-b border-line rounded-b-md" />
                <div className="w-40 h-1.5 bg-line rounded-full mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
