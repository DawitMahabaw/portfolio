import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll offset
      const scrollPosition = window.scrollY + 180;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (event, id) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (window.location.hash.startsWith('#project/')) {
      window.location.hash = id;
    }

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : 'transparent-top'}`}>
      <div className="navbar-container">
        <a 
          href="#home" 
          className="navbar-brand" 
          onClick={(event) => handleNavigate(event, 'home')} 
          aria-label={`${personalData.name} home`}
        >
          <span className="brand-icon">&lt;/&gt;</span>
          <span className="brand-name">{personalData.name}</span>
        </a>
        
        {/* Desktop Navigation Links (5 primary sections) */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="navbar-links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`} 
                  aria-current={activeSection === link.id ? 'page' : undefined} 
                  onClick={(event) => handleNavigate(event, link.id)}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span 
                      layoutId="activeNavIndicator" 
                      className="nav-active-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <button 
            type="button" 
            className="mobile-menu-toggle" 
            onClick={() => setIsMenuOpen((open) => !open)} 
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} 
            aria-expanded={isMenuOpen} 
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            id="mobile-navigation" 
            className="mobile-nav-drawer open" 
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ul className="mobile-links">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(event) => handleNavigate(event, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
