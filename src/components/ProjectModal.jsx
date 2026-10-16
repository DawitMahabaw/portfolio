import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Check, 
  Code2 
} from 'lucide-react';
import TechIcon from './TechIcon';
import { Button } from './ui';
import { getTagColorScheme, getProjectGradient } from './ProjectCard';

export default function ProjectModal({ project, onClose }) {
  const [imgFailed, setImgFailed] = useState(false);

  // Close on Escape key & Lock body scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const liveUrl = project.liveDemoUrl || project.liveUrl;

  return (
    <AnimatePresence>
      <div 
        className="project-modal-backdrop" 
        onClick={onClose}
        role="presentation"
      >
        <motion.div 
          className="project-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        >
          {/* Close Button */}
          <button 
            type="button" 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close project details"
          >
            <X size={20} />
          </button>

          {/* Modal Visual Banner */}
          <div className="modal-banner-box">
            {!imgFailed && project.image ? (
              <img 
                src={project.image} 
                alt={project.imageAlt || project.title} 
                onError={() => setImgFailed(true)}
                className="modal-banner-img"
              />
            ) : (
              <div 
                className="modal-gradient-placeholder"
                style={{ background: getProjectGradient(project.id) }}
              >
                <div className="placeholder-pattern-overlay" />
                <div className="placeholder-content">
                  <Code2 size={40} className="placeholder-icon" />
                  <span className="placeholder-title">{project.title}</span>
                </div>
              </div>
            )}
            <div className="modal-banner-overlay" />
            
            {/* Category Badge on Banner */}
            {project.category && (
              <span className="modal-floating-category">
                {project.category}
              </span>
            )}
          </div>

          {/* Modal Header */}
          <div className="modal-header-info">
            <h2 id="modal-project-title" className="modal-title">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="modal-subtitle">{project.subtitle}</p>
            )}
            {project.tagline && (
              <p className="modal-tagline">{project.tagline}</p>
            )}

            {/* Colored Hashtag Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="modal-hashtag-tags">
                {project.tags.map((tag) => {
                  const scheme = getTagColorScheme(tag);
                  return (
                    <span 
                      key={tag} 
                      className="hashtag-pill"
                      style={{
                        '--tag-color': scheme.text,
                        '--tag-bg': scheme.bg,
                        '--tag-border': scheme.border,
                      }}
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Modal Scrollable Body */}
          <div className="modal-body-content">
            {/* The Problem */}
            {(project.problem || project.overview) && (
              <section className="modal-section-card problem-card">
                <div className="modal-section-heading">
                  <AlertCircle size={20} className="modal-icon-purple" />
                  <h3>The Problem</h3>
                </div>
                <p className="modal-section-text">
                  {project.problem || project.overview}
                </p>
              </section>
            )}

            {/* The Solution */}
            {(project.solution || project.description) && (
              <section className="modal-section-card solution-card">
                <div className="modal-section-heading">
                  <CheckCircle2 size={20} className="modal-icon-cyan" />
                  <h3>The Solution</h3>
                </div>
                <p className="modal-section-text">
                  {project.solution || project.description}
                </p>
              </section>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <section className="modal-section-card features-card">
                <div className="modal-section-heading">
                  <Sparkles size={20} className="modal-icon-purple" />
                  <h3>Key Features &amp; Capabilities</h3>
                </div>
                <ul className="modal-features-list">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature}>
                      <Check size={16} className="feature-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Stack & Architecture */}
            <section className="modal-section-card stack-card">
              <div className="modal-section-heading">
                <Layers size={20} className="modal-icon-cyan" />
                <h3>Tech Stack &amp; Architecture</h3>
              </div>

              {project.architecture && project.architecture.length > 0 ? (
                <div className="modal-architecture-grid">
                  {project.architecture.map((item) => (
                    <div key={item.layer} className="modal-arch-item">
                      <span className="arch-layer">{item.layer}</span>
                      <span className="arch-tech">
                        <TechIcon name={item.icon || 'api'} size={15} />
                        {item.tech}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="modal-tech-pills">
                  {project.technologies?.map((tech) => (
                    <Tag key={tech.name} variant="glass" size="md">
                      <TechIcon name={tech.icon} size={15} />
                      {tech.name}
                    </Tag>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Modal Action Links Footer */}
          <footer className="modal-actions-footer">
            <div className="modal-footer-links">
              {liveUrl && (
                <Button
                  as="a"
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  icon={<ExternalLink size={16} />}
                  iconPosition="right"
                >
                  Launch Live Demo
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  icon={<TechIcon name="github" size={16} />}
                  iconPosition="left"
                >
                  GitHub Repository
                </Button>
              )}
            </div>

            <Button
              type="button"
              variant="subtle"
              size="md"
              onClick={onClose}
            >
              Close
            </Button>
          </footer>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
