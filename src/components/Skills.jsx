import React from 'react';
import { techStackSkills } from '../data/skills';
import TechIcon from './TechIcon';
import { Reveal } from './Reveal';
import '../styles/Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="skills-container">
        {/* Section Header matching the screenshot */}
        <Reveal variant="fade-up">
          <div className="skills-header">
            <span className="skills-subtitle">Technologies I Use</span>
            <h2 id="skills-heading" className="skills-title">
              Tech Stack
            </h2>
          </div>
        </Reveal>

        {/* Continuous Horizontal Scrolling Track of Tech Stack Cards */}
        <Reveal variant="fade-up" delay={0.15}>
          <div className="tech-stack-marquee-wrapper" aria-label="Technologies showcase row">
            <div className="tech-stack-track">
              {/* Duplicate array 2x for seamless infinite loop */}
              {[...techStackSkills, ...techStackSkills].map((tech, index) => (
                <div 
                  key={`${tech.name}-${index}`} 
                  className="tech-card"
                  style={{
                    '--tech-glow': tech.glowColor || 'rgba(56, 189, 248, 0.35)',
                  }}
                  tabIndex={0}
                  aria-label={tech.name}
                >
                  <div className="tech-card-icon-wrap" aria-hidden="true">
                    <TechIcon name={tech.icon} size={42} />
                  </div>
                  <span className="tech-card-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
