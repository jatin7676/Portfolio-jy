import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SQL Agent — Natural Language to PostgreSQL",
      description: "An AI-powered app that lets users query a PostgreSQL database of startup unicorns using plain English. It generates and runs SQL, explains the query, and visualizes results with interactive charts.",
      technologies: ["Next.js", "Vercel AI SDK", "GPT-4o", "PostgreSQL", "TypeScript", "Tailwind CSS", "Recharts"],
      image: "/sql-agent.png",
      liveUrl: "https://sql-agent-brown-five.vercel.app",
      githubUrl: "https://github.com/jatin7676/SQL-AGENT",
      featured: true,
      date: "2025"
    },
    {
      title: "RAG Agent — Knowledge Assistant",
      description: "A Retrieval-Augmented Generation chatbot that answers strictly from its own knowledge base. Users teach it facts, which are embedded and stored, then retrieved to ground every response — ideal for support and personal knowledge tools.",
      technologies: ["Next.js 14", "Vercel AI SDK", "OpenAI", "Drizzle ORM", "PostgreSQL + pgvector", "Tailwind CSS"],
      image: "/rag-agent.png",
      liveUrl: "https://rag-agent-six.vercel.app",
      githubUrl: "https://github.com/jatin7676/Rag_agent",
      featured: true,
      date: "2025"
    },
    {
  title: "URL Shortener Web Application",
  description: "A full-stack URL shortening service that converts long URLs into short, shareable links with redirection support, click tracking, and efficient database indexing for fast lookups.",
  technologies: ["Node.js", "Express.js", "MongoDB", "React", "REST API"],
  image: "/url.png",
  liveUrl: "https://url-shortner-eight-tan.vercel.app/",
  githubUrl: "https://github.com/jatin7676/Url-Shortner",
  featured: true,
  date: "2025"
}
,{
  title: "Full-Stack Blog Platform",
  description: "A scalable full-stack blog application with user authentication, role-based access, rich text content management, and media uploads. Supports secure CRUD operations, SEO-friendly pages, and optimized data fetching.",
  technologies: ["Next.js", "NestJS", "PostgreSQL", "Supabase", "JWT", "Tailwind CSS"],
  image: "/blog.png",
  liveUrl: "https://blogs-application-frontend.vercel.app/",
  githubUrl: "https://github.com/jatin7676/Blogs-Application-Frontend",
  featured: true,
  date: "2025"
}
,{
  title: "Financial Dashboard & Invoice Management System",
  description: "A full-stack financial dashboard featuring secure authentication, invoice creation and management, real-time data visualization, and role-based access control. Designed for scalability and data security.",
  technologies: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "Tailwind CSS"],
  image: "/dashboard.png",
  liveUrl: "https://dashboard-lake-mu-97.vercel.app/",
  githubUrl: "https://github.com/jatin7676/Dashboard",
  featured: true,
  date: "2025"
}
,
    {
      title: "Travel Tracker App",
      description: "A full-stack travel tracking web application that allows users to log trips, view travel history, and manage destinations with real-time updates. Features user  dynamic UI with EJS templating, and a PostgreSQL-powered backend.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "EJS"],
      image: "/image.png",
      liveUrl: "https://travel-tracker-7d3z.onrender.com/",
      githubUrl: "https://github.com/jatin7676/travel-tracker",
      featured: true,
      date: "2024"
    }
    ,

    {
      title: "Country Info App",
      description: "A responsive web application built with Next.js to display real-time information about countries. Users can search by country name and view details like population, capital, region, and flags. Includes API error handling and optimized loading states.",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript", "REST API"],
      image: "/country.png",
      liveUrl: "#",
      githubUrl: "https://github.com/jatin7676/country-info-app",
      featured: false,
      date: "2024"
    },


    {
      title: "Currency Converter App",
  description: "A sleek and responsive currency converter application built with React and Tailwind CSS. It fetches real-time exchange rates from a public API and allows users to convert between multiple currencies with smooth UI interactions and error handling.",
  technologies: ["React", "Tailwind CSS", "JavaScript", "REST API"],
  image: "/currency.png",
  liveUrl: "https://currency-converter-psi-lime.vercel.app/",
  githubUrl: "https://github.com/jatin7676/Currency-Converter",
  featured: false,
  date: "2024"
    },

  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // Pin the section and translate the horizontal track based on how far the
  // user has scrolled through it — one project fills the screen at a time.
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      const maxShift = track.scrollWidth - track.clientWidth;
      track.style.transform = `translate3d(${-progress * maxShift}px, 0, 0)`;
      if (barRef.current) barRef.current.style.width = `${progress * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative border-t border-line"
      style={{ height: `calc(100vh + ${(projects.length - 1) * 80}vh)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Heading */}
        <div className="container mx-auto px-6 pt-24 pb-4 shrink-0">
          <p className="eyebrow">Work</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Projects</h2>
        </div>

        {/* Horizontal track */}
        <div className="flex-1 overflow-hidden">
          <div ref={trackRef} className="flex h-full will-change-transform">
            {projects.map((project, index) => (
              <div key={index} className="w-screen shrink-0 h-full flex items-center">
                <div className="container mx-auto px-6">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center max-w-5xl mx-auto">
                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden border border-line">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-52 md:h-80 object-cover"
                      />
                      {project.featured && (
                        <span className="absolute top-3 right-3 chip bg-cream/90 backdrop-blur-sm">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-sm text-accent">
                          {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted">
                          <Calendar size={14} />
                          {project.date}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-muted mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-7">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                          <Github size={16} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="container mx-auto px-6 pb-6 shrink-0">
          <div className="h-1 bg-line rounded-full overflow-hidden">
            <div ref={barRef} className="h-full bg-ink" style={{ width: '0%' }} />
          </div>
          <p className="mt-2 text-xs font-mono text-muted">Scroll to browse projects →</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
