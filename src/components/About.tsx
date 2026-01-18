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
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Passionate about technology and innovation, always eager to learn and create
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-slate-300">
              <p>
                Hello! I'm <span className="font-semibold text-white">Jatin Yadav</span>, a final-year Computer Science Engineering student at
                <span className="text-teal-400 font-semibold"> Netaji Subhas University of Technology</span>.
                My journey in technology started with curiosity and has grown into a strong interest in
                building reliable and scalable software solutions.
              </p>

              <p>
                I specialize in full-stack web development with a solid foundation in data structures,
                algorithms, and system design. Beyond academics, I actively participate in coding
                competitions and hackathons to sharpen my problem-solving skills.
              </p>



            </div>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Leadership', 'Quick Learner', 'Innovation'].map((trait) => (
                <span key={trait} className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                <item.icon size={32} className="text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;