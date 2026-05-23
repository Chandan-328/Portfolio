import React from 'react';
import { Code, Cpu, Globe, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

// Map category string to Lucide component
const iconMap = {
  Code: Code,
  Cpu: Cpu,
  Globe: Globe,
  Hammer: Hammer
};

export default function Skills() {
  return (
    <section id="skills" className="skills section-padding bg-dark-alt">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        
        <div className="skills-grid">
          {skillsData.map((categoryData, catIndex) => {
            const Icon = iconMap[categoryData.icon] || Code;
            return (
              <motion.div
                key={categoryData.category}
                className="skills-category-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3>
                  <Icon size={20} /> {categoryData.category}
                </h3>
                <ul className="skills-list">
                  {categoryData.skills.map((skill) => (
                    <li key={skill.name}>
                      <span 
                        className={`skill-dot ${skill.class}`} 
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: 'currentColor',
                          display: 'inline-block',
                          boxShadow: '0 0 8px currentColor'
                        }} 
                      />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
