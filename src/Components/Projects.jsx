import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import movienestImg from '../assets/movienest.jpg';
import naijaKitchenImg from '../assets/naija-kitchen.jpg';
import glowDentImg from '../assets/glowdent.jpg';
import novaraFoundationImg from '../assets/novara-foundation.jpg';
import eduSphereImg from '../assets/edusphere.jpg';
import fitHackImg from '../assets/fithack.jpg';
import primeNestImg from '../assets/prime-nest.jpg';
import velouraJewelsImg from '../assets/veloura-jewels.jpg';
import aureasGlowImg from '../assets/aureas-glow.jpg';

const Projects = ({ isDark }) => {
  const projects = [
    {
      id: 1,
      title: "MovieNest",
      description: "A Netflix-like movie discovery platform where users can browse movies, view trailers, read reviews, and get personalized recommendations.",
      image: movienestImg,
      technologies: ["React", "Movie API", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Vkconcept/MovieNest",
      liveUrl: "https://movie-nest-woad.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Naija Kitchen",
      description: "A Nigerian food menu website with filterable categories. Users can explore authentic dishes, view recipes, and browse meal types easily.",
      image: naijaKitchenImg,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/vkconcept/naija-kitchen",
      liveUrl: "https://vkconcept.github.io/Naija-Kitchen/",
      featured: true
    },
    {
      id: 3,
      title: "GlowDent",
      description: "A modern dental clinic website featuring services with responsive design.",
      image: glowDentImg,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/Vkconcept/GlowDent",
      liveUrl: "https://vkconcept.github.io/GlowDent/",
      featured: true
    },
    {
      id: 4,
      title: "Novara Foundation",
      description: "Non-profit organization website showcasing programs, community impact, and donation integration.",
      image: novaraFoundationImg,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/Vkconcept/NovaraFoundation",
      liveUrl: "https://vkconcept.github.io/NovaraFoundation/",
      featured: true
    },
    {
      id: 5,
      title: "EduSphere",
      description: "University landing page with course sign-ups.",
      image: eduSphereImg,
      technologies: ["React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Vkconcept/EduSphere",
      liveUrl: "https://vkconcept.github.io/EduSphere/",
      featured: true
    },
    {
      id: 6,
      title: "FitHack",
      description: "A fitness landing page.",
      image: fitHackImg,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/Vkconcept/FitHack",
      liveUrl: "https://vkconcept.github.io/FitHack/",
      featured: true
    },
    {
      id: 7,
      title: "PrimeNest Estate",
      description: "Real estate platform featuring property listings, advanced search, and agent profiles.",
      image: primeNestImg,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/Vkconcept/PrimeNest-estate",
      liveUrl: "https://vkconcept.github.io/PrimeNest-estate/",
      featured: true
    },
    {
      id: 8,
      title: "Veloura Jewels",
      description: "Jewelry store website showcasing elegant products with categories and product galleries.",
      image: velouraJewelsImg,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/Vkconcept/Veloura-Jewels",
      liveUrl: "https://vkconcept.github.io/Veloura-Jewels/",
      featured: true
    },
    {
      id: 9,
      title: "Aureas Glow",
      description: "Skincare and beauty products website with product catalogs and skin type recommendations.",
      image: aureasGlowImg,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/Vkconcept/Aureas-Glow",
      liveUrl: "https://vkconcept.github.io/Aureas-Glow/",
      featured: true
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-105 duration-300`}>
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Project Image */}
        <div className="relative overflow-hidden aspect-[3/2] lg:aspect-[16/9]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Project Details */}
        <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
          <p className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'} font-medium`}>
            {project.type}
          </p>
          <h3 className={`text-3xl lg:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h3>
          <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub and Live Links with Text */}
          <div className="flex items-center space-x-4 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors font-medium`}
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors font-medium`}
            >
              <ExternalLink className="w-5 h-5" />
              <span>View</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className={`text-sm uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium mb-2`}>— MY WORKS</p>
          <h2 className={`text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>PROJECTS</h2>
        </div>
        <div className="space-y-12">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
