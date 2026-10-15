import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import TechIcon from './TechIcon';

export default function ProjectCard({ project, onOpenDetails }) {
  const displayTags = project.tags || (project.technologies ? project.technologies.map(t => typeof t === 'string' ? t : t.name) : []);
  const liveUrl = project.liveDemoUrl || project.liveUrl;
  const description = project.shortDescription || project.description || project.tagline;

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1000}
      scale={1.015}
      transitionSpeed={1000}
      className="project-card-tilt"
    >
      <article className="project-card" id={`project-${project.id}`}>
        {project.image && (
          <div 
            className="project-image-box" 
            onClick={() => onOpenDetails && onOpenDetails(project)} 
            style={{ cursor: onOpenDetails ? 'pointer' : 'default' }}
          >
            <img 
              src={project.image} 
              alt={project.imageAlt || `${project.title} project screenshot`} 
              loading="lazy" 
              width="960" 
              height="600" 
            />
          </div>
        )}
        <div className="project-card-body">
          <h3 
            className="project-title" 
            onClick={() => onOpenDetails && onOpenDetails(project)} 
            style={{ cursor: onOpenDetails ? 'pointer' : 'default' }}
          >
            {project.title}
          </h3>
          {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
          {description && <p className="project-desc">{description}</p>}
          
          {displayTags.length > 0 && (
            <ul className="project-tags">
              {displayTags.map((tag) => (
                <li key={tag} className="project-tag">{tag}</li>
              ))}
            </ul>
          )}

          <div className="project-card-actions">
            <div className="project-links-row">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn" 
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <TechIcon name="github" size={16} />
                  <span>GitHub</span>
                </a>
              )}
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn" 
                  aria-label={`Open the live demo for ${project.title}`}
                >
                  <ExternalLink size={16} />
                  <span>Live demo</span>
                </a>
              )}
            </div>
            {onOpenDetails && (
              <button 
                type="button" 
                className="project-details-btn" 
                onClick={() => onOpenDetails(project)}
              >
                <span>Case study</span>
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      </article>
    </Tilt>
  );
}
