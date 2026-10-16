import React, { useState } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalData } from '../data';
import TechIcon from './TechIcon';
import '../styles/Footer.css';

const FOOTER_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailClick = () => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(personalData.socials.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2400);
      }
    } catch {
      // ignore
    }
  };

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavigate = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-brand-title">
              <span className="brand-code">&lt;/&gt;</span>
              {personalData.name}
            </span>
            <span className="footer-brand-sub">{personalData.roleSubhead}</span>
          </div>

          {/* Quick Anchor Links */}
          <ul className="footer-nav-links" aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  onClick={(e) => handleNavigate(e, link.id)}
                  className="footer-nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer-actions">
            <div className="footer-social-strip">
              <a 
                href={personalData.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="GitHub"
              >
                <TechIcon name="github" size={17} />
              </a>
              <a 
                href={personalData.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="LinkedIn"
              >
                <TechIcon name="linkedin" size={17} />
              </a>
              <div className="footer-email-wrapper" style={{ position: 'relative', display: 'inline-flex' }}>
                <a 
                  href={`mailto:${personalData.socials.email}`} 
                  onClick={handleEmailClick}
                  className={`footer-social-btn ${copiedEmail ? 'footer-email-copied' : ''}`} 
                  aria-label={`Email ${personalData.name}: ${personalData.socials.email}`}
                  title={`Email: ${personalData.socials.email} (copies on click)`}
                >
                  <Mail size={17} />
                </a>
                {copiedEmail && (
                  <span className="footer-email-copied-tooltip" role="status">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            <button 
              type="button" 
              className="btn-back-to-top" 
              onClick={goTop} 
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</span>
          <span className="footer-motto">Built with React &amp; Three.js · Open to Junior Roles</span>
        </div>
      </div>
    </footer>
  );
}
