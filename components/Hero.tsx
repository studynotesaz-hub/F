import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-1 px-3 mb-6 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium">
            Available for freelance work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              experiences that matter.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm Alex, a full-stack developer passionate about building accessible, pixel-perfect user interfaces that blend art with robust engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25 w-full sm:w-auto"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 border border-slate-700 transition-all w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors p-2"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors p-2"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors p-2"><Twitter size={24} /></a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;