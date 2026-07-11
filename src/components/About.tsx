import React from 'react';
import { Code2, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Skills",
      description: "Proficient in multiple programming languages and frameworks"
    },
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Solved 300+ coding problems across various platforms"
    }
  ];

  return (
    <section id="about" className="py-16 border-t border-line">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="eyebrow">About</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">A little about me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-5 text-lg text-muted leading-relaxed">
              <p>
                Hello! I'm <span className="font-semibold text-ink">Jatin Yadav</span>, a final-year Computer Science Engineering student at
                <span className="text-ink font-semibold"> Netaji Subhas University of Technology</span>.
                My journey in technology started with curiosity and has grown into a strong interest in
                building reliable and scalable software solutions.
              </p>

              <p>
                I specialize in full-stack web development with a solid foundation in data structures,
                algorithms, and system design. Beyond academics, I actively participate in coding
                competitions and hackathons to sharpen my problem-solving skills.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Problem Solving', 'Team Leadership', 'Quick Learner', 'Innovation'].map((trait) => (
                <span key={trait} className="chip">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card">
                <item.icon size={28} className="text-accent mb-4" strokeWidth={1.75} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;