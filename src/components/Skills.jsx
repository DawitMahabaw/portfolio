import React, { useEffect, useRef, useState } from 'react';
import { techStackSkills } from '../data/skills';
import TechIcon from './TechIcon';
import { Reveal } from './Reveal';
import '../styles/Skills.css';

export default function Skills() {
  const scrollRef = useRef(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const resumeTimeoutRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const pauseAutoScroll = (duration = 3200) => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      if (!isDraggingRef.current) {
        isPausedRef.current = false;
      }
    }, duration);
  };

  useEffect(() => {
    let animFrameId;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScrollLoop = () => {
      if (!isPausedRef.current && scrollContainer) {
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (halfWidth > 0 && scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft -= halfWidth;
        } else {
          scrollContainer.scrollLeft += 0.85;
        }
      }
      animFrameId = requestAnimationFrame(autoScrollLoop);
    };

    animFrameId = requestAnimationFrame(autoScrollLoop);

    return () => {
      cancelAnimationFrame(animFrameId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const handleWheel = (e) => {
    if (scrollRef.current && e.deltaY !== 0) {
      scrollRef.current.scrollLeft += e.deltaY * 1.1;
      pauseAutoScroll(1800);
    }
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeftRef.current = scrollRef.current.scrollLeft;
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
      pauseAutoScroll(1500);
    }
  };

  const handleMouseEnter = () => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
    }
    // Resume scrolling immediately after cursor is removed
    isPausedRef.current = false;
  };

  const handleTouchStart = () => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    pauseAutoScroll(1500);
  };

  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="skills-container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <div className="skills-header">
            <span className="skills-subtitle">Technologies I Use</span>
            <h2 id="skills-heading" className="skills-title">
              Tech Stack
            </h2>
          </div>
        </Reveal>

        {/* Horizontally Scrollable Track of Tech Stack Cards */}
        <Reveal variant="fade-up" delay={0.15}>
          <div className="tech-stack-carousel-container">
            <div 
              ref={scrollRef}
              className={`tech-stack-marquee-wrapper ${isDragging ? 'is-dragging' : ''}`} 
              aria-label="Technologies showcase row - scrollable"
              tabIndex={0}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={() => { isPausedRef.current = true; }}
            >
              <div className="tech-stack-track">
                {/* Repeated array for wide continuous scrolling */}
                {[...techStackSkills, ...techStackSkills, ...techStackSkills].map((tech, index) => (
                  <div 
                    key={`${tech.name}-${index}`} 
                    className="tech-card"
                    style={{
                      '--tech-glow': tech.glowColor || 'rgba(56, 189, 248, 0.35)',
                    }}
                    tabIndex={0}
                    aria-label={tech.name}
                  >
                    <div className="tech-card-icon-wrap" aria-hidden="true">
                      <TechIcon name={tech.icon} size={42} />
                    </div>
                    <span className="tech-card-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
