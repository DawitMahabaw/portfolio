import React from 'react';
import { Database, Layout, Server, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import TechIcon from './TechIcon';
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
        <div className="section-pill-badge">
          <span className="badge-num">02</span>
          <span className="badge-divider">//</span>
          <span className="badge-text">TECH STACK &amp; TOOLKIT</span>
        </div>

        <div className="section-header">
          <h2 id="skills-heading" className="section-title">Technical Expertise</h2>
          <p className="section-desc">
            Production technologies I work with across frontend engineering, backend architecture, and database modeling.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layout;
            const desc = categoryDescriptions[category.id];

            return (
              <article key={category.id} className={`skill-category-card category-${category.accentColor}`}>
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
                        <TechIcon name={skill.icon} size={26} />
                      </span>
                      <span className="skill-name">{skill.name}</span>
                      {skill.level && <span className="skill-level-tag">{skill.level}</span>}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
