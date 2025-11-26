import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';
import { Briefcase } from 'lucide-react';

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: [
      "Led the migration of a legacy Monolith to a Micro-frontend architecture using Webpack Module Federation.",
      "Improved Core Web Vitals scores by 40% through code splitting and asset optimization.",
      "Mentored 3 junior developers and established code review guidelines."
    ]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Innovate Digital",
    period: "2019 - 2021",
    description: [
      "Developed and maintained 5+ client e-commerce websites using Shopify Liquid and React.",
      "Integrated third-party APIs (Stripe, Twilio) to enhance platform functionality.",
      "Reduced server response time by 50% by implementing Redis caching."
    ]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Creative Agency X",
    period: "2018 - 2019",
    description: [
      "Collaborated with designers to implement pixel-perfect UI from Figma prototypes.",
      "Built responsive landing pages using HTML, SCSS, and JavaScript.",
      "Participated in agile sprints and daily stand-ups."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Work Experience</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-800 transform -translate-x-1/2 hidden md:block" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 transform -translate-x-1/2 mt-1.5 hidden md:block shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />
              
              <div className="flex-1"></div>
              
              <div className="flex-1 relative pl-8 md:pl-0">
                {/* Mobile Vertical Line */}
                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-slate-800 md:hidden" />
                <div className="absolute left-[-5px] top-2 w-3 h-3 bg-blue-500 rounded-full md:hidden" />

                <div className={`p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-colors ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-medium flex items-center gap-2">
                        <Briefcase size={14} /> {exp.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium text-slate-300 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="block w-1.5 h-1.5 bg-slate-600 rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;