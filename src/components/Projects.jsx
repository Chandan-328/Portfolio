import { useState, useMemo, useCallback } from 'react';
import { Truck, Bot, ShoppingBag, Hash, Car, MousePointer, Wifi, BarChart2, ExternalLink, Lock, BookUser } from 'lucide-react';
import { Github } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/portfolioData';

// Mapping icons dynamically to Lucide equivalents
const iconMap = {
  Truck: Truck,
  Bot: Bot,
  ShoppingBag: ShoppingBag,
  Hash: Hash,
  Car: Car,
  HandPointer: MousePointer,
  Wifi: Wifi,
  BarChart: BarChart2,
  BookUser: BookUser
};

const linkIconMap = {
  Github: Github,
  ExternalLink: ExternalLink,
  Lock: Lock
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // useCallback hook to memoize category selection callback
  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  // useMemo hook to recalculate filtered list only when selectedCategory changes
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="projects section-padding">
      <div className="section-container">
        <div className="section-header">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="section-desc text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Here is a curated showcase of my engineering work across Computer Vision, Web Applications, and IoT/Hardware platforms.
          </motion.p>
        </div>

        {/* Category filter pills */}
        <motion.div 
          className="projects-filter-container"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Dynamic Project grid with simple pop animations */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const IconComponent = iconMap[project.icon] || Truck;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 350, 
                    damping: 25, 
                    delay: index * 0.04 
                  }}
                  className="project-card"
                >
                  <div className={`project-image ${project.gradientClass}`}>
                    <IconComponent className="project-placeholder-icon" />
                    <span className="project-tag">{project.category}</span>
                  </div>
                  
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className="project-tech">
                      {project.tech.map((t, index) => (
                        <span key={index}>{t}</span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      {project.links.map((link, index) => {
                        const LinkIcon = linkIconMap[link.icon] || Github;
                        if (link.disabled) {
                          return (
                            <span key={index} className="project-link-disabled">
                              <LinkIcon size={16} /> {link.text}
                            </span>
                          );
                        }
                        return (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                          >
                            <LinkIcon size={16} /> {link.text}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                 </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
