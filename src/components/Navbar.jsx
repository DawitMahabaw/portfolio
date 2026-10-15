import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { educationData, experienceData, personalData, projectsData } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'pipeline', label: 'Architecture' },
    ...(projectsData.length ? [{ id: 'projects', label: 'Projects' }] : []),
    ...(experienceData.length ? [{ id: 'experience', label: 'Experience' }] : []),
    ...(educationData.length ? [{ id: 'education', label: 'Education' }] : []),
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map(({ id }) => id);
    const getActiveSection = () => {
      const visible = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .filter((section) => section.getBoundingClientRect().top <= 140);
      setActiveSection(visible.at(-1)?.id || 'home');
    };
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    const observer = new IntersectionObserver(getActiveSection, { rootMargin: '-76px 0px -55% 0px', threshold: 0 });
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    getActiveSection();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (event, id) => {
    event.preventDefault();
    setIsMenuOpen(false);
    // If inside a project case study, reset URL hash to main page section
    if (window.location.hash.startsWith('#project/')) {
      window.location.hash = id;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  const navItems = navLinks.map((link) => (
    <li key={link.id}>
      <a 
        href={`#${link.id}`} 
        className={`nav-link ${activeSection === link.id ? 'active' : ''}`} 
        aria-current={activeSection === link.id ? 'page' : undefined} 
        onClick={(event) => handleNavigate(event, link.id)}
      >
        {link.label}
      </a>
    </li>
  ));

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a 
          href="#home" 
          className="navbar-brand" 
          onClick={(event) => handleNavigate(event, 'home')} 
          aria-label={`${personalData.name} home`}
        >
          <span className="brand-icon">&lt;/&gt;</span>
          <span>{personalData.name}</span>
        </a>
        
        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="navbar-links">{navItems}</ul>
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <button 
            type="button" 
            className="btn-nav-resume" 
            onClick={onOpenResume} 
            title="View & Download Digital Resume"
          >
            <FileText size={16} />
            <span>Digital CV</span>
          </button>
          
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

      <nav id="mobile-navigation" className={`mobile-nav-drawer ${isMenuOpen ? 'open' : ''}`} aria-label="Mobile navigation" aria-hidden={!isMenuOpen}>
        <ul className="mobile-links">{navItems}</ul>
        <button 
          type="button" 
          className="btn btn-primary mobile-resume-btn" 
          onClick={() => {
            setIsMenuOpen(false);
            if (onOpenResume) onOpenResume();
          }}
        >
          <FileText size={18} />
          <span>View Digital CV</span>
        </button>
      </nav>
    </header>
  );
}
