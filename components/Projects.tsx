import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and sales reporting.",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "TaskMaster AI",
    description: "Intelligent productivity application that automatically categorizes tasks and suggests optimal scheduling based on user habits.",
    tags: ["TypeScript", "OpenAI API", "Node.js", "MongoDB"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "CryptoWatch",
    description: "Mobile-first cryptocurrency tracking application with price alerts, portfolio management, and news aggregation.",
    tags: ["React Native", "Redux", "CoinGecko API"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "HealthBeat",
    description: "Telemedicine platform connecting patients with specialists for virtual consultations and secure medical record sharing.",
    tags: ["Next.js", "WebRTC", "PostgreSQL", "Stripe"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    githubUrl: "#",
    demoUrl: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 md:mt-0">
            View Github <Github size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-slate-400 hover:text-white transition-colors" aria-label="Github Repo">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="text-slate-400 hover:text-white transition-colors" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-medium">
            View Github <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;