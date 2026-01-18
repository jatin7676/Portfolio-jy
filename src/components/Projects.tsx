import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
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
      githubUrl: "https://github.com/jatin7676/country-info-app", // add your GitHub repository URL here
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

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A collection of projects showcasing my technical skills and creativity
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="card group hover:scale-[1.02] transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                <Calendar size={16} />
                {project.date}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-slate-700 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.liveUrl} className="btn-sm group">
                  <ExternalLink size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                  Live Demo
                </a>
                <a href={project.githubUrl} className="btn-outline-sm group">
                  <Github size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <Calendar size={14} />
                  {project.date}
                </div>
                
                <h4 className="font-semibold mb-2 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-slate-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.liveUrl} className="text-teal-400 hover:text-teal-300 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                  <a href={project.githubUrl} className="text-slate-400 hover:text-white transition-colors">
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;