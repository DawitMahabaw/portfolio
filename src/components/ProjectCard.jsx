import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import TechIcon from './TechIcon';
import { Card, Tag, Button } from './ui';

export default function ProjectCard({ project, onOpenDetails }) {
  const displayTags = project.tags || (project.technologies ? project.technologies.map(t => typeof t === 'string' ? t : t.name) : []);
  const liveUrl = project.liveDemoUrl || project.liveUrl;
  const description = project.shortDescription || project.description || project.tagline;

  return (
    <Card
      variant="glass"
      tilt
      radius="lg"
      padding="none"
      className="project-card"
      id={`project-${project.id}`}
    >
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
          <div className="project-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '16px 0' }}>
            {displayTags.map((tag) => (
              <Tag key={tag} variant="purple" size="sm">
                {tag}
              </Tag>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          <div className="project-links-row">
            {project.githubUrl && (
              <Button 
                as="a"
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="outline"
                size="sm"
                className="project-link-btn" 
                aria-label={`View ${project.title} source code on GitHub`}
                icon={<TechIcon name="github" size={15} />}
                iconPosition="left"
              >
                GitHub
              </Button>
            )}
            {liveUrl && (
              <Button 
                as="a"
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="outline"
                size="sm"
                className="project-link-btn" 
                aria-label={`Open the live demo for ${project.title}`}
                icon={<ExternalLink size={15} />}
                iconPosition="left"
              >
                Live Demo
              </Button>
            )}
          </div>
          {onOpenDetails && (
            <Button 
              type="button" 
              variant="primary"
              size="sm"
              className="project-details-btn" 
              onClick={() => onOpenDetails(project)}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              Case Study
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
