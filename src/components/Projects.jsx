import React from 'react';
import ProjectCard from './ProjectCard';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import '../styles/Projects.css';

export default function Projects({ projects, onSelectProject }) {
  if (!projects || !projects.length) return null;

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <div className="section-pill-badge">
            <span className="badge-num">04</span>
            <span className="badge-divider">//</span>
            <span className="badge-text">FEATURED WORK</span>
          </div>

          <div className="section-header">
            <h2 id="projects-heading" className="section-title">Project Case Studies</h2>
            <p className="section-desc">
              A closer look at the architecture, problem statements, decisions, and working results behind each build.
            </p>
          </div>
        </Reveal>

        {/* Staggered Projects Grid */}
        <RevealStagger className="projects-grid" staggerChildren={0.12}>
          {projects.map((project) => (
            <RevealItem key={project.id} variant="fade-up">
              <ProjectCard project={project} onOpenDetails={onSelectProject} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
