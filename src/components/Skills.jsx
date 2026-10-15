import React from 'react';
import { Database, Layout, Server, Wrench } from 'lucide-react';
import { skillCategories, marqueeSkills } from '../data/skills';
import TechIcon from './TechIcon';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import { SectionHeading, Card } from './ui';
import '../styles/Skills.css';

const categoryIcons = {
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
};

function SkillTile({ skill }) {
  return (
    <li 
      className="skill-tile" 
      style={{
        '--tech-color': skill.color || '#A855F7',
        '--tech-glow': skill.glowColor || 'rgba(168, 85, 247, 0.45)',
      }}
      tabIndex={0}
      aria-label={skill.name}
    >
      <div className="skill-tile-icon-box">
        <TechIcon name={skill.icon} size={28} />
      </div>
      <span className="skill-tile-label">{skill.name}</span>

      {/* Hover Tooltip with Tech Name */}
      <div className="skill-tile-tooltip" role="tooltip">
        <span>{skill.name}</span>
      </div>
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <SectionHeading
            numberBadge="03 // TECH STACK & TOOLKIT"
            title="Technical Toolkit"
            gradientWord="Toolkit"
            subtitle="Core technologies I engineer with across frontend interfaces, backend services, databases, and developer tools."
            id="skills-heading"
          />
        </Reveal>

        {/* 4 Category Glass Cards with Staggered Scroll Reveal */}
        <RevealStagger className="skills-grid" staggerChildren={0.1}>
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layout;

            return (
              <RevealItem key={category.id} variant="fade-up">
                <Card
                  variant="glass"
                  radius="lg"
                  padding="none"
                  className={`skill-category-card category-${category.accentColor}`}
                >
                  <header className="category-header">
                    <span className="category-icon-badge" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <div className="category-header-text">
                      <h3 className="category-title">{category.title}</h3>
                      {category.description && (
                        <p className="category-desc">{category.description}</p>
                      )}
                    </div>
                  </header>

                  <ul className="category-tiles-grid" aria-label={`${category.title} skills`}>
                    {category.skills.map((skill) => (
                      <SkillTile key={skill.name} skill={skill} />
                    ))}
                  </ul>
                </Card>
              </RevealItem>
            );
          })}
        </RevealStagger>

        {/* Bonus: Slow Infinite Marquee of Tech Logos (pauses on hover) */}
        <Reveal variant="fade-up" delay={0.25} className="skills-marquee-section">
          <div className="skills-marquee-container">
            <div className="marquee-label-row">
              <span className="marquee-pulse-dot" aria-hidden="true" />
              <span className="marquee-label-tag">CONTINUOUS ROTATION // FULL PRODUCTION TOOLKIT</span>
            </div>

            <div className="marquee-wrapper" tabIndex={0} aria-label="Infinite scrolling technology logos">
              <div className="marquee-track">
                {/* 2x repeated sequence for infinite seamless loop */}
                {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
                  <div 
                    key={`${item.name}-${index}`} 
                    className="marquee-item"
                    style={{
                      '--tech-color': item.color || '#A855F7',
                      '--tech-glow': item.glowColor || 'rgba(168, 85, 247, 0.4)',
                    }}
                  >
                    <TechIcon name={item.icon} size={20} />
                    <span className="marquee-item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
