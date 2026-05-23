import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import Navbar from './components/Navbar';
import { ArrowUp } from 'lucide-react';

// Lazy load sections to optimize initial bundle size and speed
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const EducationCertifications = lazy(() => import('./components/EducationCertifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Interactive loader placeholder for lazy load intervals
const LoadingFallback = () => (
  <div style={{
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-text-muted)',
    fontSize: '1rem',
    fontFamily: 'Outfit, sans-serif'
  }}>
    <div style={{
      width: '28px',
      height: '28px',
      border: '3px solid rgba(99, 102, 241, 0.1)',
      borderTop: '3px solid var(--primary)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '12px'
    }} />
    <span>Loading...</span>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('#home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // useCallback hook to memoize scroll check handler
  const handleScroll = useCallback(() => {
    setShowBackToTop(window.scrollY > 400);
  }, []);

  // useCallback hook to memoize smooth-scroll navigation callback
  const handleNavClick = useCallback((id) => {
    setActiveSection(id);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Scroll spy mechanism using IntersectionObserver
  useEffect(() => {
    const sections = ['#home', '#about', '#projects', '#skills', '#experience', '#education-certs', '#contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Triggers when element is centered in viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.querySelector(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.querySelector(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />

      {/* Scrollable sections wrapped in Suspense modules */}
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Hero handleNavClick={handleNavClick} />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <EducationCertifications />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>

      {/* Global Page Footer */}
      <Footer />

      {/* Floating Scroll back to top utility */}
      <button 
        id="back-to-top" 
        className={`back-to-top ${showBackToTop ? 'active' : ''}`}
        onClick={() => handleNavClick('#home')}
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
