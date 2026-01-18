import React from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'achievement',
      title: 'Smart India Hackathon 2025',
      company: 'SIH 2025',
      location: 'National Level',
      duration: 'Mar 2025',
      description: 'Participated in the prestigious Smart India Hackathon, working on innovative solutions for national problems.',
      achievements: [
        'Competed at the national level',
        'Developed innovative solutions',
        'Collaborated with team members from different colleges'
      ]
    },
    {
      type: 'achievement',
      title: 'Code Rush 2025',
      company: 'Code Rush Competition',
      location: 'Online',
      duration: 'Feb 2025',
      description: 'Participated in Code Rush 2025, a competitive coding event focusing on algorithmic problem-solving.',
      achievements: [
        'Solved complex algorithmic problems',
        'Improved problem-solving skills',
        'Competed with top coders nationwide'
      ]
    },
    {
      type: 'internship',
      title: 'SDE Intern',
      company: 'HSV Digital',
      location: 'Remote',
      duration: 'Jun 2025 - Jul 2025',
      description: 'Worked as a Software Development Engineer Intern, contributing to various development projects.',
      achievements: [
        'Assisted in software development tasks',
        'Collaborated with the development team',
        'Gained hands-on experience in real-world projects'
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'internship': return Briefcase;
      case 'project': return Award;
      case 'achievement': return Award;
      default: return Briefcase;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship': return 'bg-blue-500/20 text-blue-400';
      case 'project': return 'bg-teal-500/20 text-teal-400';
      case 'achievement': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Achievements</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My journey through internships, projects, and accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-blue-500 to-orange-400"></div>

            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className="w-8 h-8 bg-slate-900 border-4 border-teal-400 rounded-full flex items-center justify-center">
                      <Icon size={16} className="text-teal-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    isEven ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="card group hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                        <div className="flex items-center text-sm text-slate-400">
                          <Calendar size={14} className="mr-1" />
                          {exp.duration}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors">
                        {exp.title}
                      </h3>

                      <div className="flex items-center text-slate-300 mb-3">
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;