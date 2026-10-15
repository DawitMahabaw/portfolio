import React from 'react';
import { Database, Layout, Server, Wrench } from 'lucide-react';
import { skillCategories } from '../data';
import TechIcon from './TechIcon';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import { SectionHeading, Card, Tag } from './ui';
import '../styles/Skills.css';

const categoryIcons = {
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
};

const categoryDescriptions = {
  frontend: 'UI components, state management, and responsive web apps.',
  backend: 'REST APIs, token authentication, and server-side routing.',
  database: 'Document schemas, data modeling, and query integrity.',
  tools: 'Version control, API testing, build tools, and modern AI.',
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <SectionHeading
            numberBadge="03 // TECH STACK & TOOLKIT"
            title="Technical Expertise"
            gradientWord="Technical"
            subtitle="Production technologies I work with across frontend engineering, backend architecture, and database modeling."
            id="skills-heading"
          />
        </Reveal>

        {/* Categories Grid with Stagger & Parallax Tilt */}
        <RevealStagger className="skills-grid" staggerChildren={0.12}>
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layout;
            const desc = categoryDescriptions[category.id];

            return (
              <RevealItem key={category.id} variant="fade-up">
                <Card
                  variant="glass"
                  tilt
                  radius="lg"
                  padding="md"
                  className={`skill-category-card category-${category.accentColor}`}
                >
                  <header className="category-header">
                    <span className="category-icon-badge" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="category-title">{category.title}</h3>
                      {desc && <p className="category-desc">{desc}</p>}
                    </div>
                  </header>

                  <ul className="category-items-grid">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="skill-item-card">
                        <span className="skill-icon-wrapper">
                          <TechIcon name={skill.icon} size={24} />
                        </span>
                        <span className="skill-name">{skill.name}</span>
                        {skill.level && (
                          <Tag variant="purple" size="sm" className="skill-level-tag">
                            {skill.level}
                          </Tag>
                        )}
                      </li>
                    ))}
                  </ul>
                </Card>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
