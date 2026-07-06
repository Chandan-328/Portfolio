import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Linkedin } from './SocialIcons';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import Magnetic from './Magnetic';

export default function Contact() {
  const contactInfo = [
    {
      title: 'Email Me',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      gradientClass: 'bg-grad-blue',
    },
    {
      title: 'Call Me',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      icon: Phone,
      gradientClass: 'bg-grad-emerald', // Matches the custom CSS gradient tokens
    },
    {
      title: 'LinkedIn',
      value: 'Chandan Muragod',
      href: personalInfo.linkedin,
      icon: Linkedin,
      gradientClass: 'bg-grad-purple',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! This message is received. Please feel free to also reach out directly via email or call!');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="section-container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <motion.p
          className="section-desc text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's collaborate! Feel free to reach out to discuss Computer Vision models, Full-Stack applications, or job opportunities.
        </motion.p>

        <div className="contact-grid">
          {/* Contact Cards */}
          <div className="contact-info">
            {contactInfo.map((card) => {
              const Icon = card.icon;
              return (
                <Magnetic key={card.title} speed={0.1}>
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="info-card"
                  >
                    <div className={`info-icon ${card.gradientClass}`}>
                      <Icon size={24} />
                    </div>
                    <div className="info-body">
                      <h3>{card.title}</h3>
                      <p>{card.value}</p>
                    </div>
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
