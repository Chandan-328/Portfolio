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

          {/* Contact Form */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required placeholder="Hi Chandan, let's connect..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
