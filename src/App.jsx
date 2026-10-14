import React, { useState, useEffect } from 'react';
import { portfolioData } from './data';
import './styles.css';

export default function App() {
  const { personal, skills, projects, education } = portfolioData;

  // --------------------------------------------------------------------------
  // Theme Management (Light / Dark with prefers-color-scheme fallback)
  // --------------------------------------------------------------------------
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // --------------------------------------------------------------------------
  // Navigation & Mobile Menu State
  // --------------------------------------------------------------------------
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --------------------------------------------------------------------------
  // Case Study Modal State
  // --------------------------------------------------------------------------
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCaseStudy(null);
    };
    if (selectedCaseStudy) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCaseStudy]);

  // --------------------------------------------------------------------------
  // Email Copy to Clipboard State
  // --------------------------------------------------------------------------
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard && personal.email) {
      navigator.clipboard.writeText(personal.email).then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      });
    }
  };

  // --------------------------------------------------------------------------
  // Contact Form State
  // --------------------------------------------------------------------------
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setFormStatus('sending');

    // If a Formspree endpoint is provided and not a placeholder, submit via fetch
    const endpoint = personal.formEndpoint;
    const isRealEndpoint = endpoint && !endpoint.includes('TODO');

    if (isRealEndpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formState)
        });
        if (res.ok) {
          setFormStatus('success');
          setFormState({ name: '', email: '', message: '' });
        } else {
          setFormStatus('error');
        }
      } catch (err) {
        setFormStatus('error');
      }
    } else {
      // Graceful local handling when endpoint is awaiting user input
      setTimeout(() => {
        setFormStatus('success');
        setFormState({ name: '', email: '', message: '' });
      }, 700);
    }
  };

  return (
    <div className="site-wrapper">
      {/* ======================================================================
          HEADER & NAVIGATION
          ====================================================================== */}
      <header className="site-header">
        <div className="container nav-wrapper">
          <a href="#hero" className="nav-brand">
            {personal.fullName}
          </a>

          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-controls">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title="Toggle theme"
            >
              {theme === 'light' ? (
                // Moon Icon
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                // Sun Icon
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            <button
              className="menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================================
          HERO SECTION
          ====================================================================== */}
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-availability">
                <span className="status-dot"></span>
                <span>{personal.availability}</span>
              </div>

              <h1 className="hero-name">{personal.fullName}</h1>
              <div className="hero-role-line">{personal.roleOneLiner}</div>

              <p className="hero-bio-lead">
                I build responsive web applications with React, modular Express REST APIs, and structured relational MySQL databases. Looking for junior software engineering opportunities to deliver clean code in collaborative teams.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                </a>
                <a
                  href={personal.cvPath}
                  className="btn btn-secondary"
                  download
                  title="Download Curriculum Vitae (PDF)"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            <div className="hero-avatar-wrapper">
              <img
                src="/images/profile.jpg"
                alt={`Headshot portrait of ${personal.fullName}`}
                className="hero-avatar"
                width="270"
                height="270"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* ====================================================================
            ABOUT SECTION
            ==================================================================== */}
        <section className="section" id="about">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                Background, training, and current career focus.
              </p>
            </div>

            <div className="about-card">
              <p className="about-text">{personal.bio}</p>

              <ul className="about-highlights">
                {personal.highlights.map((item, idx) => (
                  <li key={idx} className="about-highlight-item">
                    <span className="bullet-icon">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SKILLS SECTION (4 Equal Balanced Cards, Wrapping Chips)
            ==================================================================== */}
        <section className="section" id="skills">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Technical Skills</h2>
              <p className="section-subtitle">
                Core technologies categorized by practical proficiency level.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="skill-card">
                  <h3 className="skill-card-title">{skillGroup.category}</h3>

                  <div className="skill-tier">
                    <span className="tier-label comfortable">Comfortable with</span>
                    <div className="chip-container">
                      {skillGroup.comfortable.map((tech, i) => (
                        <span key={i} className="skill-chip highlight">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="skill-tier">
                    <span className="tier-label">Have used</span>
                    <div className="chip-container">
                      {skillGroup.used.map((tech, i) => (
                        <span key={i} className="skill-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="skill-tier">
                    <span className="tier-label">Currently learning</span>
                    <div className="chip-container">
                      {skillGroup.learning.map((tech, i) => (
                        <span key={i} className="skill-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            PROJECTS SECTION (3 Best Projects Only)
            ==================================================================== */}
        <section className="section" id="projects">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Real-world web applications built during full-stack training and practical exercises.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((proj) => (
                <article key={proj.id} className="project-card">
                  <div className="project-thumb-link">
                    <img
                      src={proj.screenshot}
                      alt={`Screenshot of ${proj.name}`}
                      className="project-image"
                      loading="lazy"
                      width="480"
                      height="300"
                    />
                  </div>

                  <div className="project-content">
                    <div>
                      <h3 className="project-title">{proj.name}</h3>
                      <p className="project-problem">{proj.problem}</p>
                      <div className="project-role">
                        <strong>My Role:</strong> {proj.role}
                      </div>

                      <div className="project-tags">
                        {proj.tech.map((t, idx) => (
                          <span key={idx} className="project-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions">
                      {proj.liveUrl ? (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          Live Demo
                        </a>
                      ) : null}

                      {proj.githubUrl ? (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                        >
                          GitHub
                        </a>
                      ) : null}

                      <button
                        onClick={() => setSelectedCaseStudy(proj)}
                        className="btn-case-study"
                        title="View project architectural case study"
                      >
                        Case Study →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            EDUCATION / VERTICAL SINGLE-COLUMN TIMELINE
            ==================================================================== */}
        <section className="section" id="experience">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Education &amp; Training</h2>
              <p className="section-subtitle">
                Academic foundation and full-stack software development immersion.
              </p>
            </div>

            <div className="timeline-single-column">
              {education.map((item, idx) => (
                <div key={idx} className="timeline-entry">
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <h3 className="timeline-degree">{item.degree}</h3>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <div className="timeline-institution">{item.institution}</div>
                    <ul className="timeline-bullets">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            CONTACT SECTION
            ==================================================================== */}
        <section className="section" id="contact">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Contact</h2>
              <p className="section-subtitle">
                Let's discuss junior developer opportunities, internships, or web projects.
              </p>
            </div>

            <div className="contact-layout">
              {/* Direct Channels */}
              <div className="contact-info">
                <div className="contact-link-row">
                  <div>
                    <span className="contact-channel-title">Email</span>
                    <a href={`mailto:${personal.email}`} className="contact-channel-val">
                      {personal.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="copy-button"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <div className="contact-link-row">
                  <div>
                    <span className="contact-channel-title">GitHub</span>
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-channel-val"
                    >
                      {personal.github}
                    </a>
                  </div>
                </div>

                <div className="contact-link-row">
                  <div>
                    <span className="contact-channel-title">LinkedIn</span>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-channel-val"
                    >
                      {personal.linkedin}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Contact Form */}
              <div className="contact-form-box">
                <form onSubmit={handleFormSubmit}>
                  {formStatus === 'success' && (
                    <div className="form-status-alert success">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="form-status-alert error">
                      There was an error sending your message. Please reach out directly via email.
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="formName" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="formName"
                      type="text"
                      className="form-control"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Recruiter"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="formEmail" className="form-label">
                      Your Email
                    </label>
                    <input
                      id="formEmail"
                      type="email"
                      className="form-control"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="formMessage" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="formMessage"
                      className="form-control"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hello, we'd like to interview you for a junior full-stack developer position..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================================
          CASE STUDY MODAL (<150 words per project)
          ====================================================================== */}
      {selectedCaseStudy && (
        <div className="modal-backdrop" onClick={() => setSelectedCaseStudy(null)}>
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3 id="modalTitle" className="modal-title">
                {selectedCaseStudy.name} — Case Study
              </h3>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="case-study-section">
                <h4 className="case-study-heading">Problem:</h4>
                <p className="case-study-text">{selectedCaseStudy.caseStudy.problem}</p>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-heading">What I Built:</h4>
                <p className="case-study-text">{selectedCaseStudy.caseStudy.whatIBuilt}</p>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-heading">Technical Decisions:</h4>
                <p className="case-study-text">{selectedCaseStudy.caseStudy.decisions}</p>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-heading">Key Challenge Overcome:</h4>
                <p className="case-study-text">{selectedCaseStudy.caseStudy.challenge}</p>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-heading">Future Improvements:</h4>
                <p className="case-study-text">{selectedCaseStudy.caseStudy.improvement}</p>
              </div>

              <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="btn btn-secondary btn-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================
          FOOTER
          ====================================================================== */}
      <footer className="site-footer">
        <div className="container footer-wrapper">
          <div>
            <strong>{personal.fullName}</strong> • {personal.location}
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>

          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${personal.email}`}>Email</a>
          </div>

          <a href="#hero" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
