import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { personalData } from '../data';
import TechIcon from './TechIcon';
import TypewriterRole from './TypewriterRole';
import ScrollDownMouse from './ScrollDownMouse';
import { Reveal } from './Reveal';
import { Button } from './ui';
import '../styles/Hero.css';

export default function Hero() {
  const scrollTo = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          <div className="hero-left-wrapper">
            <div className="hero-accent-rail" aria-hidden="true">
              <div className="glowing-dot" />
              <div className="rail-line" />
            </div>

            <div className="hero-content">
              <Reveal variant="fade-up" delay={0.12}>
                <h1 id="hero-heading" className="hero-headline">
                  Hi, I&apos;m <span className="hero-name-gradient">{personalData.firstName}</span>
                </h1>
              </Reveal>

              <Reveal variant="fade-up" delay={0.18}>
                <div className="hero-role-wrapper">
                  <TypewriterRole />
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={0.24}>
                <p className="hero-value-statement">
                  I build responsive web applications using React, Node.js, and Express, with MySQL databases to organize and manage data.
                </p>
              </Reveal>

              <Reveal variant="fade-up" delay={0.3}>
                <div className="hero-actions-group">
                  <Button
                    as="a"
                    href="#projects"
                    onClick={(event) => scrollTo(event, 'projects')}
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
                    onClick={(event) => scrollTo(event, 'contact')}
                    variant="outline"
                    size="md"
                    className="btn-hero-contact"
                  >
                    Contact Me
                  </Button>
                </div>
              </Reveal>

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

          <div className="hero-3d-column">
            <Reveal variant="scale-in" delay={0.2} style={{ width: '100%' }}>
              <div className="hero-workstation-art" aria-label="Neon-lit developer workstation">
                <img
                  src="/images/hero-workstation.webp"
                  alt=""
                  className="hero-workstation-image"
                  fetchPriority="high"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal variant="fade-up" delay={0.45}>
          <ScrollDownMouse targetId="about" />
        </Reveal>
      </div>
    </section>
  );
}
