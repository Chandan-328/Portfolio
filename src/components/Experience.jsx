import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="experience section-padding">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          My <span className="gradient-text">Internships</span>
        </motion.h2>
        
        <div className="timeline-container">
          {experience.map((item, index) => (
            <div key={index} className="timeline-item">
              <motion.div 
                className="timeline-badge"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
              >
                <Briefcase size={16} />
              </motion.div>
              
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="timeline-header">
                  <div>
                    <h3>{item.title}</h3>
                    <h4 className="company">{item.company}</h4>
                  </div>
                  <span className="timeline-date">{item.date}</span>
                </div>
                
                <ul className="experience-bullets">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
