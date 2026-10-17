import React from 'react';
import ProjectCard from './ProjectCard';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import { SectionHeading } from './ui';
import '../styles/Projects.css';

export default function Projects({ projects = [] }) {
  if (!projects || !projects.length) return null;

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container projects-container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <SectionHeading
            title="Project Showcase"
            gradientWord="Showcase"
            subtitle="These are projects I've developed, providing effective solutions to diverse problems"
            id="projects-heading"
          />
        </Reveal>

        {/* Staggered Projects 2-Column Grid */}
        <RevealStagger className="projects-grid" staggerChildren={0.12}>
          {projects.map((project) => (
            <RevealItem key={project.id} variant="fade-up">
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
