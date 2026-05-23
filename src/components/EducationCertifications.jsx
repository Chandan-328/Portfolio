import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education-certs" className="education-certs section-padding bg-dark-alt">
      <div className="section-container">
        <div className="edu-certs-grid">
          
          {/* Education Column */}
          <div className="edu-column">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              Education
            </motion.h2>
            
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="edu-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="edu-year">{edu.year}</div>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="edu-grade">{edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div className="certs-column">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              Certifications
            </motion.h2>
            
            <div className="certs-grid">
              {certifications.map((cert, index) => {
                let colorClass = 'text-ibm';
                if (cert.icon === 'Scaler') colorClass = 'text-scaler';
                if (cert.icon === 'Google') colorClass = 'text-google';
                if (cert.icon === 'Tcs') colorClass = 'text-tcs';
                if (cert.icon === 'Salesforce') colorClass = 'text-salesforce';
                
                return (
                  <motion.div
                    key={cert.title}
                    className="cert-card"
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Award className={`cert-icon ${colorClass}`} />
                    <div className="cert-info">
                      <h3>{cert.title}</h3>
                      <p>{cert.issuer}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
