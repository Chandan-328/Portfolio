import React from 'react';
import { Brain, Download, Mail, ChevronDown } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import Magnetic from './Magnetic';
import LazyImage from './LazyImage';

export default function Hero({ handleNavClick }) {
  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="badge-cv-engineer" variants={itemVariants}>
            <Brain size={16} /> {personalInfo.badge}
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            I build intelligent computer vision models, autonomous edge systems, and scalable full-stack integrations to solve real-world industrial challenges.
          </motion.p>
          
          <motion.div className="hero-cta" variants={itemVariants}>
            <Magnetic speed={0.15}>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }} 
                className="btn btn-primary"
              >
                View Work
              </a>
            </Magnetic>
            
            <Magnetic speed={0.15}>
              <a 
                href={personalInfo.resumeUrl} 
                className="btn btn-secondary" 
                target="_blank" 
                rel="noreferrer"
              >
                <Download size={18} /> Resume
              </a>
            </Magnetic>
          </motion.div>
          
          <motion.div className="hero-socials" variants={itemVariants}>
            <Magnetic speed={0.25}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
            </Magnetic>
            <Magnetic speed={0.25}>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
            </Magnetic>
            <Magnetic speed={0.25}>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email Me">
                <Mail size={20} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual-aditya"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <LazyImage 
            src="/images/profile.png" 
            alt={`${personalInfo.name} Portrait`} 
            className="profile-image-aditya" 
          />
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <a 
          href="#about" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} 
          aria-label="Scroll Down"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
