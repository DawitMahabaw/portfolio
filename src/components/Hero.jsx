import React, { Suspense, lazy } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { personalData } from '../data';
import TechIcon from './TechIcon';
import TypewriterRole from './TypewriterRole';
import ScrollDownMouse from './ScrollDownMouse';
import { Reveal } from './Reveal';
import { Button } from './ui';
import '../styles/Hero.css';

// Lazy-load the 3D Workstation Canvas
const Workstation3D = lazy(() => import('./Workstation3D'));

export default function Hero() {
  const handleContact = (event) => {
    event.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', '#contact');
    }
  };

  const handleExploreProjects = (event) => {
    event.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', '#projects');
    }
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      {/* Ambient background glows */}
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Vertical Accent Line + Narrative */}
          <div className="hero-left-wrapper">
            {/* Vertical Accent Line with Glowing Dot */}
            <div className="hero-accent-rail" aria-hidden="true">
              <div className="glowing-dot" />
              <div className="rail-line" />
            </div>

            <div className="hero-content">
              {/* Status Pill */}
              <Reveal variant="fade-up" delay={0.05}>
                <div className="hero-status-pill">
                  <span className="status-dot" aria-hidden="true" />
                  <span>{personalData.heroStatusPill}</span>
                </div>
              </Reveal>

              {/* Headline */}
              <Reveal variant="fade-up" delay={0.12}>
                <h1 id="hero-heading" className="hero-headline">
                  Hi, I'm <span className="hero-name-gradient">{personalData.firstName}</span>
                </h1>
              </Reveal>

              {/* Rotating Role Line (Typewriter) */}
              <Reveal variant="fade-up" delay={0.18}>
                <div className="hero-role-wrapper">
                  <TypewriterRole />
                </div>
              </Reveal>

              {/* One-Line Value Statement */}
              <Reveal variant="fade-up" delay={0.24}>
                <p className="hero-value-statement">
                  Engineering responsive, component-driven React interfaces and reliable Node.js/Express REST APIs backed by structured MySQL &amp; MongoDB data architectures.
                </p>
              </Reveal>

              {/* Action Buttons: "View Projects" and "Contact Me" */}
              <Reveal variant="fade-up" delay={0.3}>
                <div className="hero-actions-group">
                  <Button
                    as="a"
                    href="#projects"
                    onClick={handleExploreProjects}
                    variant="primary"
                    size="md"
                    className="btn-hero-primary"
                    icon={<ArrowRight size={17} />}
                    iconPosition="right"
                  >
                    View Projects
                  </Button>

                  <Button
                    as="a"
                    href="#contact"
                    onClick={handleContact}
                    variant="outline"
                    size="md"
                    className="btn-hero-contact"
                  >
                    Contact Me
                  </Button>
                </div>
              </Reveal>

              {/* Small GitHub / LinkedIn Icon Links */}
              <Reveal variant="fade-up" delay={0.36}>
                <div className="hero-social-strip" aria-label="Quick social connections">
                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-icon-btn"
                    title="GitHub Profile"
                    aria-label="GitHub Profile"
                  >
                    <TechIcon name="github" size={17} />
                  </a>

                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-icon-btn"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <TechIcon name="linkedin" size={17} />
                  </a>

                  <a
                    href={`mailto:${personalData.socials.email}`}
                    className="hero-social-icon-btn"
                    title="Send Direct Email"
                    aria-label={`Email ${personalData.name}`}
                  >
                    <Mail size={17} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: 3D Desktop Workstation Scene */}
          <div className="hero-3d-column">
            <Reveal variant="scale-in" delay={0.2} style={{ width: '100%' }}>
              <Suspense
                fallback={
                  <div className="workstation-loader">
                    <div className="loader-ring" />
                    <span className="loader-text">Loading 3D Workstation…</span>
                  </div>
                }
              >
                <Workstation3D />
              </Suspense>
            </Reveal>
          </div>
        </div>

        {/* Animated Scroll-Down Mouse Indicator */}
        <Reveal variant="fade-up" delay={0.45}>
          <ScrollDownMouse targetId="about" />
        </Reveal>
      </div>
    </section>
  );
}
