import React, { useState } from 'react';
import { ArrowRight, Code2, Terminal, User, Mail, ChevronDown } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import TechIcon from './TechIcon';
import DevTerminal from './DevTerminal';
import '../styles/Hero.css';

export default function Hero() {
  const [activeVisualTab, setActiveVisualTab] = useState('terminal'); // 'terminal' | 'portrait'

  const coreStack = [
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'expressjs' },
    { name: 'MongoDB', icon: 'mongodb' },
  ];

  const handleContact = (event) => {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleExploreProjects = (event) => {
    event.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container">
        {/* Section Number Badge from Mockup */}
        <div className="section-pill-badge">
          <span className="badge-num">01</span>
          <span className="badge-divider">//</span>
          <span className="badge-text">WELCOME &amp; OVERVIEW</span>
        </div>

        <div className="hero-grid">
          {/* Left Column: Personal Narrative & CTAs */}
          <div className="hero-content">
            <span className="hero-greeting">Hi, I'm</span>
            <h1 id="hero-heading" className="hero-name">
              <span>{personalData.firstName}</span>{' '}
              <span className="hero-name-accent">{personalData.lastName}</span>
            </h1>

            <p className="hero-role">
              Junior <span className="text-gradient-mern">MERN</span> Stack Developer
            </p>

            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>{personalData.heroStatusPill}</span>
            </div>

            <p className="hero-bio">{personalData.bio}</p>

            {/* Core Action Buttons */}
            <div className="hero-actions-group">
              <a href="#projects" onClick={handleExploreProjects} className="btn btn-primary btn-hero-primary">
                Explore Projects <ArrowRight size={17} />
              </a>
              <a href="#contact" onClick={handleContact} className="btn btn-outline btn-hero-contact">
                Contact Me
              </a>
            </div>

            {/* Social Connect Links */}
            <div className="hero-social-strip" aria-label="Quick links">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="GitHub Profile"
              >
                <TechIcon name="github" size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn Profile"
              >
                <TechIcon name="linkedin" size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalData.socials.email}`}
                className="hero-social-link"
                title="Send Email"
              >
                <Mail size={18} />
                <span>{personalData.socials.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Component with Interactive View Switcher */}
          <div className="hero-visual-wrapper">
            <div className="visual-tab-bar" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeVisualTab === 'terminal'}
                className={`visual-tab-btn ${activeVisualTab === 'terminal' ? 'active' : ''}`}
                onClick={() => setActiveVisualTab('terminal')}
              >
                <Terminal size={14} />
                <span>Dev Console</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeVisualTab === 'portrait'}
                className={`visual-tab-btn ${activeVisualTab === 'portrait' ? 'active' : ''}`}
                onClick={() => setActiveVisualTab('portrait')}
              >
                <User size={14} />
                <span>Developer Profile</span>
              </button>
            </div>

            {activeVisualTab === 'terminal' ? (
              <DevTerminal />
            ) : (
              <div className="hero-image-frame">
                <img
                  src={personalData.heroImage}
                  alt={personalData.heroImageAlt}
                  width="700"
                  height="820"
                  fetchPriority="high"
                />
                <div className="hero-corner-tag">
                  <Code2 size={14} aria-hidden="true" />
                  <span>{personalData.roleSubhead}</span>
                </div>
              </div>
            )}

            {/* Core Tech Stack Floater */}
            <div className="floating-tech-stack" aria-label="Core technologies">
              {coreStack.map((tech) => (
                <div key={tech.name} className="floating-tech-card">
                  <TechIcon name={tech.icon} size={20} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-hint">
          <a href="#about" className="scroll-hint-link">
            <span>Scroll to explore</span>
            <ChevronDown size={16} className="bounce-chevron" />
          </a>
        </div>
      </div>
    </section>
  );
}
