import React from 'react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import Magnetic from './Magnetic';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        <div className="footer-links">
          <Magnetic speed={0.2}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile">
              <Github size={18} />
            </a>
          </Magnetic>
          <Magnetic speed={0.2}>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={18} />
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
