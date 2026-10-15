import React from 'react';
import ProjectCard from './ProjectCard';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import { SectionHeading } from './ui';
import '../styles/Projects.css';

export default function Projects({ projects, onSelectProject }) {
  if (!projects || !projects.length) return null;

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <SectionHeading
            numberBadge="04 // FEATURED WORK"
            title="Project Case Studies"
            gradientWord="Case Studies"
            subtitle="A closer look at the architecture, problem statements, decisions, and working results behind each build."
            id="projects-heading"
          />
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
