import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { Code2 } from 'lucide-react';
import TechIcon from './TechIcon';

export function getTagColorScheme(tag) {
  const t = tag.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (t.includes('react')) return { text: '#38BDF8', bg: 'rgba(56, 189, 248, 0.12)', border: 'rgba(56, 189, 248, 0.3)' };
  if (t.includes('node')) return { text: '#4ADE80', bg: 'rgba(74, 222, 128, 0.12)', border: 'rgba(74, 222, 128, 0.3)' };
  if (t.includes('express')) return { text: '#F1F5F9', bg: 'rgba(241, 245, 249, 0.12)', border: 'rgba(241, 245, 249, 0.3)' };
  if (t.includes('mysql') || t.includes('sql')) return { text: '#22D3EE', bg: 'rgba(34, 211, 238, 0.12)', border: 'rgba(34, 211, 238, 0.3)' };
  if (t.includes('mongo')) return { text: '#34D399', bg: 'rgba(52, 211, 153, 0.12)', border: 'rgba(52, 211, 153, 0.3)' };
  if (t.includes('jwt')) return { text: '#C084FC', bg: 'rgba(192, 132, 252, 0.12)', border: 'rgba(192, 132, 252, 0.3)' };
  if (t.includes('api') || t.includes('rest')) return { text: '#06B6D4', bg: 'rgba(6, 182, 212, 0.12)', border: 'rgba(6, 182, 212, 0.3)' };
  if (t.includes('javascript') || t.includes('js')) return { text: '#FDE047', bg: 'rgba(253, 224, 71, 0.12)', border: 'rgba(253, 224, 71, 0.3)' };
  if (t.includes('css')) return { text: '#60A5FA', bg: 'rgba(96, 165, 250, 0.12)', border: 'rgba(96, 165, 250, 0.3)' };
  if (t.includes('context')) return { text: '#A78BFA', bg: 'rgba(167, 139, 250, 0.12)', border: 'rgba(167, 139, 250, 0.3)' };
  if (t.includes('tmdb')) return { text: '#FBBF24', bg: 'rgba(251, 191, 36, 0.12)', border: 'rgba(251, 191, 36, 0.3)' };
  if (t.includes('axios')) return { text: '#818CF8', bg: 'rgba(129, 140, 248, 0.12)', border: 'rgba(129, 140, 248, 0.3)' };
  return { text: '#C084FC', bg: 'rgba(192, 132, 252, 0.12)', border: 'rgba(192, 132, 252, 0.3)' };
}

export function getProjectGradient(id) {
  switch (id) {
    case 'evangadi-forum':
      return 'linear-gradient(135deg, #1e113a 0%, #0c1a35 50%, #06283d 100%)';
    case 'ethiogpt-clone':
      return 'linear-gradient(135deg, #092825 0%, #151d38 50%, #201335 100%)';
    case 'ethiomovie':
      return 'linear-gradient(135deg, #350812 0%, #180f24 50%, #0b1c2e 100%)';
    case 'ethio-apple':
      return 'linear-gradient(135deg, #161c2e 0%, #10162a 50%, #0c1220 100%)';
    default:
      return 'linear-gradient(135deg, #1E1238 0%, #0A192F 100%)';
  }
}

export default function ProjectCard({ project }) {
  const [imgFailed, setImgFailed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia('(hover: none)').matches)
      );
    };
    checkTouch();
  }, []);

  const destinationUrl = project.liveDemoUrl || project.liveUrl || project.githubUrl;
  const oneLineDesc = project.tagline || project.shortDescription || project.description;

  const cardContent = (
    <article className="project-card" id={`project-${project.id}`}>
      {/* Primary Clickable Area: Image, Title, Description & Tags */}
      <a 
        href={destinationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link-wrapper"
        aria-label={`${project.title} - Open Live Project`}
      >
        {/* Screenshot / Fallback with Image Zoom */}
        <div className="project-image-box">
          {!imgFailed && project.image ? (
            <img 
              src={project.image} 
              alt={project.imageAlt || `${project.title} screenshot`}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="project-screenshot-img"
            />
          ) : (
            <div 
              className="project-gradient-placeholder"
              style={{ background: getProjectGradient(project.id) }}
            >
              <div className="placeholder-pattern-overlay" />
              <div className="placeholder-content">
                <span className="placeholder-icon-badge">
                  <Code2 size={28} />
                </span>
                <span className="placeholder-title">{project.title}</span>
              </div>
            </div>
          )}

          <div className="project-image-overlay-vignette" />
        </div>

        {/* Card Content Body */}
        <div className="project-card-body">
          <div className="project-title-row">
            <h3 className="project-title">
              <span>{project.title}</span>
            </h3>
          </div>

          {/* One-Line Description */}
          <p className="project-one-liner">{oneLineDesc}</p>

          {/* Colored Hashtag Tech Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="project-hashtag-tags" aria-label="Project technologies">
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
      </a>

      {/* Top-Right GitHub Corner Button */}
      {project.githubUrl && (
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-corner-github"
          aria-label={`View ${project.title} source code on GitHub`}
          title="View GitHub Repository"
          onClick={(e) => e.stopPropagation()}
        >
          <TechIcon name="github" size={17} />
        </a>
      )}
    </article>
  );

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1000}
      scale={1.01}
      transitionSpeed={1000}
      glareEnable={true}
      glareMaxOpacity={0.12}
      glareColor="#A855F7"
      glarePosition="all"
      tiltEnable={!isTouchDevice}
      className="project-tilt-container"
    >
      {cardContent}
    </Tilt>
  );
}
