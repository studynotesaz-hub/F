import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { Cpu, Globe, Database, Layout } from 'lucide-react';

const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Python", "Redis"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "AWS", "Git", "CI/CD", "Jest", "Figma"]
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-400 leading-relaxed">
            I'm a software engineer with over 5 years of experience in building scalable web applications. 
            I started coding in college and fell in love with the ability to create something from nothing. 
            Currently, I'm focused on the React ecosystem and serverless architectures. 
            When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with digital art.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                  {index === 0 && <Layout size={24} />}
                  {index === 1 && <Database size={24} />}
                  {index === 2 && <Cpu size={24} />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <span key={item} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;