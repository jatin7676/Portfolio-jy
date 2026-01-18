import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 75 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Postman", level: 80 },
        { name: "VSCode", level: 90 },
        { name: "Cursor", level: 85 },
        { name: "GitHub Copilot", level: 80 },
        { name: "PostgreSQL", level: 75 }
      ]
    }
  ];

  const certifications = [
    "Angela Yu Web Development Bootcamp - Udemy",
    "Postman Student Expert"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-6 text-teal-400">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-teal-400 text-xl">🏆</span>
                </div>
                <p className="text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;