import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Navbar({ activeSection, handleNavClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: '#home' },
    { name: 'About', id: '#about' },
    { name: 'Projects', id: '#projects' },
    { name: 'Skills', id: '#skills' },
    { name: 'Internships', id: '#experience' },
    { name: 'Education & Certs', id: '#education-certs' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Magnetic speed={0.15}>
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
            Chandan.<span>dev</span>
          </a>
        </Magnetic>

        {/* Desktop Navbar */}
        <nav className="navbar-desktop navbar">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <Magnetic speed={0.2}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="nav-link nav-btn-contact"
            >
              Contact
            </a>
          </Magnetic>
        </nav>

        {/* Mobile menu toggle */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: 0 }}
            exit={{ left: '-100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="navbar active"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                  setIsOpen(false);
                }}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
                setIsOpen(false);
              }}
              className="nav-link nav-btn-contact"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
