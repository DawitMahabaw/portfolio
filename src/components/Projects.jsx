import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import { SectionHeading } from './ui';
import '../styles/Projects.css';

export default function Projects({ 
  projects = [], 
  activeProject: propActiveProject, 
  onSelectProject, 
  onCloseProject 
}) {
  const [internalActiveProject, setInternalActiveProject] = useState(null);

  // Support both controlled and uncontrolled active project state
  const activeProject = propActiveProject !== undefined ? propActiveProject : internalActiveProject;

  const handleOpenDetails = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setInternalActiveProject(project);
    }
  };

  const handleCloseDetails = () => {
    if (onCloseProject) {
      onCloseProject();
    } else {
      setInternalActiveProject(null);
    }
  };

  if (!projects || !projects.length) return null;

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <SectionHeading
            numberBadge="04 // FEATURED WORK"
            title="Production Projects"
            gradientWord="Projects"
            subtitle="Full-stack web applications featuring modular Express REST APIs, responsive React interfaces, relational & document schemas, and live production deployments."
            id="projects-heading"
          />
        </Reveal>

        {/* Staggered Projects 2-Column Grid */}
        <RevealStagger className="projects-grid" staggerChildren={0.12}>
          {projects.map((project) => (
            <RevealItem key={project.id} variant="fade-up">
              <ProjectCard 
                project={project} 
                onOpenDetails={handleOpenDetails} 
              />
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Animated Case Study Modal with layoutId */}
        {activeProject && (
          <ProjectModal 
            project={activeProject} 
            onClose={handleCloseDetails} 
          />
        )}
      </div>
    </section>
  );
}
