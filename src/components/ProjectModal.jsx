import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import TechIcon from './TechIcon';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="project-modal-header">
          <div>
            <h3 id="modal-project-title">{project.title}</h3>
            <p>{project.subtitle || project.description}</p>
          </div>
          <button 
            type="button" 
            className="btn-close-modal" 
            onClick={onClose}
            aria-label="Close Project Details Modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="project-modal-body">
          {/* Overview & Problem Solved */}
          <div>
            <h4 className="modal-section-title">Project Purpose & Problem</h4>
            <p className="modal-text">{project.details?.problem}</p>
          </div>

          <div>
            <h4 className="modal-section-title">Solution & Architecture</h4>
            <p className="modal-text">{project.details?.solution}</p>
          </div>

          {/* Key Features */}
          {project.details?.keyFeatures && (
            <div>
              <h4 className="modal-section-title">Key Engineering Features</h4>
              <ul className="modal-features-list">
                {project.details.keyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Breakdown */}
          {project.details?.techBreakdown && (
            <div>
              <h4 className="modal-section-title">Technology Breakdown</h4>
              <div className="modal-tech-box">
                <div className="modal-tech-item">
                  <strong>Frontend</strong>
                  <span>{project.details.techBreakdown.frontend}</span>
                </div>
                <div className="modal-tech-item">
                  <strong>Backend</strong>
                  <span>{project.details.techBreakdown.backend}</span>
                </div>
                <div className="modal-tech-item">
                  <strong>Database</strong>
                  <span>{project.details.techBreakdown.database}</span>
                </div>
                <div className="modal-tech-item">
                  <strong>Tools & DevOps</strong>
                  <span>{project.details.techBreakdown.tools}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="project-modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <TechIcon name="github" size={16} />
            <span>GitHub Repository</span>
          </a>

          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <ExternalLink size={16} />
            <span>Live Demonstration</span>
          </a>
        </div>
      </div>
    </div>
  );
}
