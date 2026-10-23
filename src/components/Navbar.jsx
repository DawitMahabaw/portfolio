import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, FileText } from 'lucide-react';
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

  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

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

  // Close menu when clicking or touching outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsideInteraction = (event) => {
      // If interaction is inside the drawer or on the hamburger toggle button, ignore
      if (
        menuRef.current?.contains(event.target) || 
        toggleBtnRef.current?.contains(event.target)
      ) {
        return;
      }
      setIsMenuOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 850) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideInteraction);
    document.addEventListener('touchstart', handleOutsideInteraction, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction);
      document.removeEventListener('touchstart', handleOutsideInteraction);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const handleNavigate = (event, id) => {
    if (event) {
      event.preventDefault();
    }
    
    setIsMenuOpen(false);
    setActiveSection(id);
    window.history.replaceState(null, '', `#${id}`);

    const target = document.getElementById(id);
    if (!target) return;

    // Slight delay (60ms) allows mobile touch/closing animation to settle
    // avoiding touch gesture interruption or layout thrash on mobile browsers
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const navHeight = 76;
        const targetRect = target.getBoundingClientRect();
        const targetTop = targetRect.top + window.pageYOffset;
        const scrollPosition = Math.max(0, Math.round(targetTop - navHeight));

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }, 60);
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
          <a 
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav-resume"
            aria-label="View and Download Dawit Mahabaw's Resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>

          <button 
            ref={toggleBtnRef}
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

      {/* Animated Mobile Navigation Drawer & Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              key="mobile-nav-backdrop"
              className="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              onTouchStart={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav 
              key="mobile-navigation"
              ref={menuRef}
              id="mobile-navigation" 
              className="mobile-nav-drawer open" 
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
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
                <li style={{ marginTop: '12px' }}>
                  <a 
                    href={personalData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-nav-resume mobile-resume-btn"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText size={16} />
                    <span>View Resume</span>
                  </a>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
