import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  GitBranch, 
  ShieldCheck 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import TechIcon from './TechIcon';
import '../styles/ProjectDetails.css';

export default function ProjectDetails({ project, onBack, onSelectProject }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const screenshots = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots 
    : [project.image].filter(Boolean);

  const currentIdx = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = currentIdx > 0 ? projectsData[currentIdx - 1] : null;
  const nextProject = currentIdx < projectsData.length - 1 ? projectsData[currentIdx + 1] : null;

  const liveUrl = project.liveDemoUrl || project.liveUrl;

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="project-details-page">
      <div className="container">
        {/* Navigation Bar */}
        <nav className="case-study-nav-bar" aria-label="Project Navigation">
          <button 
            type="button" 
            className="btn-back-projects" 
            onClick={onBack}
            aria-label="Return to all projects"
          >
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </button>

          <div className="case-study-pagination">
            <button
              type="button"
              className="btn-page-step"
              onClick={() => prevProject && onSelectProject(prevProject)}
              disabled={!prevProject}
              title={prevProject ? `Previous: ${prevProject.title}` : 'No previous project'}
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            <button
              type="button"
              className="btn-page-step"
              onClick={() => nextProject && onSelectProject(nextProject)}
              disabled={!nextProject}
              title={nextProject ? `Next: ${nextProject.title}` : 'No next project'}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </nav>

        {/* Project Hero Header & Screenshot Showcase */}
        <section className="project-hero-grid" aria-labelledby="case-study-title-heading">
          {/* Left: Info & CTAs */}
          <div className="project-hero-info">
            <span className="case-study-tag">Case Study</span>
            <h1 id="case-study-title-heading" className="case-study-title">
              {project.title}
            </h1>
            {project.subtitle && <h2 className="case-study-subtitle">{project.subtitle}</h2>}

            <p className="case-study-lead">
              {project.description || project.overview || project.shortDescription}
            </p>

            <div className="case-study-cta-row">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label={`Open live demo of ${project.title}`}
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  aria-label={`View source code of ${project.title} on GitHub`}
                >
                  <TechIcon name="github" size={18} />
                  <span>GitHub</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={`${project.githubUrl}#readme`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  aria-label={`View repository documentation for ${project.title}`}
                >
                  <GitBranch size={16} />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Screenshot Carousel */}
          {screenshots.length > 0 && (
            <div className="case-study-gallery-box" aria-label="Project Screenshots Gallery">
              <div className="gallery-main-view">
                <img
                  src={screenshots[activeImageIndex]}
                  alt={`${project.title} preview screenshot ${activeImageIndex + 1}`}
                  loading="eager"
                />
              </div>

              {/* Thumbnail Strip with controls */}
              {screenshots.length > 1 && (
                <div className="gallery-thumbnail-strip">
                  <button
                    type="button"
                    className="gallery-nav-btn"
                    onClick={handlePrevImage}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="thumbnail-cards-row">
                    {screenshots.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`thumbnail-item ${idx === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`View screenshot ${idx + 1}`}
                      >
                        <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="gallery-nav-btn"
                    onClick={handleNextImage}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 3-Column Content Breakdown */}
        <div className="case-study-content-grid">
          {/* Column 1: Left Sticky Sidebar Navigation */}
          <aside className="case-study-sidebar" aria-label="Case Study Contents">
            <div className="sidebar-nav-card">
              <span className="sidebar-nav-title">Sections</span>
              <ul className="sidebar-nav-list">
                <li className="sidebar-nav-item">
                  <a href="#cs-overview" onClick={(e) => scrollToSection(e, 'cs-overview')}>
                    Overview
                  </a>
                </li>
                {(project.problem || project.solution) && (
                  <li className="sidebar-nav-item">
                    <a href="#cs-problem" onClick={(e) => scrollToSection(e, 'cs-problem')}>
                      Problem & Solution
                    </a>
                  </li>
                )}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <li className="sidebar-nav-item">
                    <a href="#cs-features" onClick={(e) => scrollToSection(e, 'cs-features')}>
                      Key Features
                    </a>
                  </li>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <li className="sidebar-nav-item">
                    <a href="#cs-tech" onClick={(e) => scrollToSection(e, 'cs-tech')}>
                      Tech Stack
                    </a>
                  </li>
                )}
                {project.architecture && project.architecture.length > 0 && (
                  <li className="sidebar-nav-item">
                    <a href="#cs-architecture" onClick={(e) => scrollToSection(e, 'cs-architecture')}>
                      Architecture
                    </a>
                  </li>
                )}
                {project.challenges && project.challenges.length > 0 && (
                  <li className="sidebar-nav-item">
                    <a href="#cs-challenges" onClick={(e) => scrollToSection(e, 'cs-challenges')}>
                      Challenges & Solutions
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="sidebar-badge-card">
              <ShieldCheck size={24} color="#38BDF8" />
              <h5>Full-Stack Development</h5>
              <p>Built with modern technologies and best practices for scalability, performance, and security.</p>
            </div>
          </aside>

          {/* Column 2: Center (Overview, Problem/Solution, Features, Technologies) */}
          <div className="case-study-center-col">
            {/* Overview */}
            <section className="case-study-card" id="cs-overview">
              <h3 className="case-study-section-title">Project Overview</h3>
              <p className="case-study-body-text">
                {project.overview || project.description || project.summary}
              </p>
            </section>

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <section className="case-study-card" id="cs-problem">
                <h3 className="case-study-section-title">Problem & Solution</h3>
                <div className="problem-solution-box">
                  {project.problem && (
                    <div className="ps-item problem">
                      <strong>Problem</strong>
                      <p className="case-study-body-text">{project.problem}</p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="ps-item solution">
                      <strong>Solution</strong>
                      <p className="case-study-body-text">{project.solution}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <section className="case-study-card" id="cs-features">
                <h3 className="case-study-section-title">Key Features</h3>
                <ul className="case-study-features-list">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="case-study-feature-item">
                      <Check size={18} strokeWidth={2.8} className="feature-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technologies Used */}
            {project.technologies && project.technologies.length > 0 && (
              <section className="case-study-card" id="cs-tech">
                <h3 className="case-study-section-title">Technologies Used</h3>
                <div className="case-study-tech-grid">
                  {project.technologies.map((tech, idx) => {
                    const techName = typeof tech === 'string' ? tech : tech.name;
                    const techIcon = typeof tech === 'string' ? tech : (tech.icon || tech.name);
                    return (
                      <div key={idx} className="case-study-tech-pill">
                        <TechIcon name={techIcon} size={22} />
                        <span>{techName}</span>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Column 3: Right (Architecture & Challenges/Solutions) */}
          <div className="case-study-right-col">
            {/* Technical Architecture */}
            {project.architecture && project.architecture.length > 0 && (
              <section className="case-study-card" id="cs-architecture">
                <h3 className="case-study-section-title">Technical Architecture</h3>
                <div className="architecture-flow-row" aria-label="System Layer Architecture">
                  {project.architecture.map((layer, idx) => (
                    <React.Fragment key={idx}>
                      <div className="arch-layer-card">
                        <TechIcon name={layer.icon} size={28} />
                        <span className="arch-layer-name">{layer.layer}</span>
                        <span className="arch-tech-name">({layer.tech})</span>
                      </div>

                      {idx < project.architecture.length - 1 && (
                        <div className="arch-arrow" aria-hidden="true">
                          <ArrowRight size={18} strokeWidth={2.5} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <section className="case-study-card" id="cs-challenges">
                <h3 className="case-study-section-title">Challenges & Solutions</h3>
                <div className="challenges-pair-list">
                  {project.challenges.map((item, idx) => (
                    <div key={idx} className="challenge-pair-card">
                      <div className="challenge-row">
                        <div className="challenge-icon-box" title="Technical Challenge">
                          <AlertCircle size={16} />
                        </div>
                        <div className="challenge-text-box">
                          <h5>Challenge</h5>
                          <p>{item.challenge}</p>
                        </div>
                      </div>

                      <div className="challenge-row">
                        <div className="solution-icon-box" title="Engineered Solution">
                          <CheckCircle size={16} />
                        </div>
                        <div className="challenge-text-box">
                          <h5>Solution</h5>
                          <p>{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
