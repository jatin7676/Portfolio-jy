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
  return (
    <section id="experience" className="py-16 border-t border-line">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="eyebrow">Journey</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Experience &amp; achievements</h2>
        </div>

        <div className="max-w-3xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line"></div>

            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);

              return (
                <div key={index} className="relative pl-12 pb-10 last:pb-0">
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-0.5">
                    <div className="w-8 h-8 bg-paper border border-line rounded-full flex items-center justify-center">
                      <Icon size={15} className="text-accent" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="chip capitalize">
                        {exp.type}
                      </span>
                      <div className="flex items-center text-sm text-muted">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-1.5 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>

                    <div className="flex items-center text-muted mb-3 text-sm">
                      <span className="font-medium text-ink">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted mb-4 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-muted">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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