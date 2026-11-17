import { MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const details = [
    { label: 'Location', value: personalInfo.location, icon: MapPin },
    { label: 'Degree', value: 'B.E. in ECE (8.26 CGPA)', icon: GraduationCap },
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="lead">
              {personalInfo.bio[0]}
            </p>
            <p>
              {personalInfo.bio[1]}
            </p>
            <p>
              {personalInfo.bio[2]}
            </p>
            
            <div className="about-details">
              {details.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="detail-item">
                    <Icon size={24} />
                    <div>
                      <h4>{detail.label}</h4>
                      <p>{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
