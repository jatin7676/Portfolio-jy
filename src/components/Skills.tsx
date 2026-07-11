import { Award, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import Carousel from './Carousel';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'C/C++', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Frameworks & Databases',
      skills: [
        'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA',
        'React.js', 'Next.js', 'Node.js', 'Express.js',
        'MySQL', 'PostgreSQL', 'MongoDB', 'Hydra-DB',
      ],
    },
    {
      title: 'Tools & IDEs',
      skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Docker', 'Postman'],
    },
    {
      title: 'AI Tools',
      skills: ['Claude Code', 'AI SDK', 'OpenAI API', 'Braintrust'],
    },
    {
      title: 'Fundamentals',
      skills: ['DSA', 'DBMS', 'Operating Systems', 'Object-Oriented Programming'],
    },
  ];

  const certifications = [
    {
      title: 'The Complete Full-Stack Web Development Bootcamp',
      issuer: 'Udemy',
      url: 'https://ude.my/UC-1739315a-9a9e-4dd9-bd7b-7624b9171953',
    },
    {
      title: 'Java Spring Framework, Spring Boot, Spring AI – Gen AI',
      issuer: 'Udemy',
      url: 'https://ude.my/UC-8a7eeb51-a416-4a60-8cbc-1fd9ee3a5735',
    },
    {
      title: 'AI SDK v6 Crash Course Workshop',
      issuer: 'Workshop',
      url: 'https://drive.google.com/file/d/1xIN1_IQs7TXEIw9JDfWgo_-UX3iv7AT-/view?usp=sharing',
    },
    {
      title: 'AI Coding for Real Engineers Cohort',
      issuer: 'Cohort',
      url: 'https://drive.google.com/file/d/1pKJ1NBVfgZFq_Us0c44tGyREMsVt5P6X/view?usp=sharing',
    },
    {
      title: 'Postman Student Expert',
      issuer: 'Postman',
      url: '',
    },
  ];

  return (
    <section id="skills" className="py-16 border-t border-line">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="eyebrow">Skills</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Skills &amp; expertise</h2>
        </div>

        <Reveal className="mb-16">
        <Carousel>
          {skillCategories.map((category, index) => (
            <div key={index} className="snap-center shrink-0 w-[80%] sm:w-[46%] lg:w-[300px] flex">
            <div className="card w-full">
              <h3 className="text-sm font-mono uppercase tracking-wider text-accent mb-5">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </div>
          ))}
        </Carousel>
        </Reveal>

        <div>
          <h3 className="text-sm font-mono uppercase tracking-wider text-muted mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => {
              const Wrapper = cert.url ? 'a' : 'div';
              return (
                <Reveal key={index} delay={(index % 2) * 90}>
                <Wrapper
                  {...(cert.url ? { href: cert.url, target: '_blank', rel: 'noreferrer' } : {})}
                  className="card flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl border border-line flex items-center justify-center shrink-0 group-hover:border-ink transition-colors">
                    <Award size={18} className="text-accent" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-ink leading-snug group-hover:text-accent transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted mt-1">{cert.issuer}</p>
                  </div>
                  {cert.url && (
                    <ExternalLink
                      size={16}
                      className="text-muted shrink-0 group-hover:text-accent transition-colors"
                    />
                  )}
                </Wrapper>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
