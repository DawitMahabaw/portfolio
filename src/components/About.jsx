import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { 
  Layers, 
  Cpu, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  Award, 
  Calendar, 
  MapPin, 
  Check, 
  ArrowRight
} from 'lucide-react';
import { aboutHighlights, aboutIntro, learningPath, aboutPhoto } from '../data/about';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import { SectionHeading, Button, Tag, Card } from './ui';
import '../styles/About.css';
import '../styles/Timeline.css';

const highlightIcons = {
  Layers,
  Cpu,
  Sparkles,
};

const timelineIcons = {
  education: GraduationCap,
  bootcamp: Code2,
  certification: Award,
};

export default function About({ onOpenResume }) {
  const timelineRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll progress for the timeline vertical line drawing itself
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'end 50%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Heading */}
        <Reveal variant="fade-up">
          <SectionHeading
            numberBadge="02 // ABOUT & BACKGROUND"
            title="Building with Purpose, Structure & Systems Thinking"
            gradientWord="Structure & Systems"
            subtitle="Second-year Information Science student at AAU and fresh graduate of Evangadi's AI-powered MERN stack course."
            id="about-heading"
          />
        </Reveal>

        {/* Top Grid: Bio Narrative & Photo Placeholder with Tilt */}
        <div className="about-hero-grid">
          <div className="about-bio-column">
            <Reveal variant="fade-up" delay={0.1}>
              <div className="about-bio-card">
                <p className="about-bio-text">
                  {aboutIntro}
                </p>

                {/* Quick Academic & Technical Credentials Chips */}
                <div className="about-credentials-strip" aria-label="Key background credentials">
                  <Tag variant="purple" size="md">
                    <GraduationCap size={15} />
                    <span>AAU Information Science (2nd Year)</span>
                  </Tag>
                  <Tag variant="cyan" size="md">
                    <Code2 size={15} />
                    <span>Evangadi MERN Graduate</span>
                  </Tag>
                  <Tag variant="glass" size="md">
                    <Sparkles size={15} />
                    <span>AI-Powered Full-Stack</span>
                  </Tag>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Photo Placeholder with Interactive Tilt-on-Hover Effect */}
          <div className="about-photo-column">
            <Reveal variant="scale-in" delay={0.2}>
              <Card 
                variant="glass" 
                tilt 
                tiltOptions={{
                  tiltMaxAngleX: 12,
                  tiltMaxAngleY: 12,
                  perspective: 1000,
                  scale: 1.02,
                  transitionSpeed: 800,
                  glareEnable: true,
                  glareMaxOpacity: 0.2,
                  glareColor: '#A855F7',
                  glarePosition: 'all',
                }}
                radius="xl" 
                padding="none" 
                className="about-photo-card"
              >
                <div className="photo-placeholder-wrapper">
                  <div className="photo-glow-backdrop" aria-hidden="true" />
                  <div className="photo-image-frame">
                    <img 
                      src={aboutPhoto.image} 
                      alt={aboutPhoto.alt} 
                      width="800" 
                      height="600" 
                      loading="lazy" 
                      onError={(e) => {
                        if (aboutPhoto.fallbackImage && e.currentTarget.src !== aboutPhoto.fallbackImage) {
                          e.currentTarget.src = aboutPhoto.fallbackImage;
                        }
                      }}
                    />
                    <div className="photo-overlay-gradient" />
                  </div>

                  {/* Floating Badges with 3D Depth */}
                  <div className="photo-floating-badge top-left">
                    <GraduationCap size={14} className="badge-icon-purple" />
                    <span>{aboutPhoto.subBadge || 'AAU & Evangadi'}</span>
                  </div>

                  <div className="photo-floating-badge bottom-right">
                    <span className="status-dot-pulse" aria-hidden="true" />
                    <span>{aboutPhoto.status || 'Open to Junior Roles'}</span>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* Three Highlight Cards (Full-Stack Development, Problem Solving, Continuous Learning) */}
        <div className="about-highlights-wrapper">
          <Reveal variant="fade-up" delay={0.12}>
            <div className="highlights-header">
              <span className="highlights-eyebrow">CORE PILLARS</span>
              <h3 className="highlights-title">What I Bring to Every Project</h3>
            </div>
          </Reveal>

          <RevealStagger className="highlights-grid" staggerChildren={0.1} delayChildren={0.18}>
            {aboutHighlights.map((item) => {
              const Icon = highlightIcons[item.icon] || Layers;
              return (
                <RevealItem key={item.id} variant="fade-up">
                  <Card 
                    variant="glass" 
                    radius="lg" 
                    padding="md" 
                    className="highlight-card"
                  >
                    <div className="highlight-top-row">
                      <div className="highlight-icon-box" aria-hidden="true">
                        <Icon size={22} />
                      </div>
                      {item.stat && (
                        <span className="highlight-stat-pill">{item.stat}</span>
                      )}
                    </div>
                    
                    <h4 className="highlight-card-title">{item.title}</h4>
                    <p className="highlight-card-desc">{item.description}</p>
                  </Card>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>

        {/* Compact "Learning Path" Vertical Timeline (3 Entries, scroll-drawing line, reveal one by one) */}
        <div className="learning-path-wrapper">
          <Reveal variant="fade-up">
            <SectionHeading
              tag="MILESTONES & CREDENTIALS"
              title="My Learning Path"
              gradientWord="Learning Path"
              subtitle="Foundational university computer science studies paired with intense MERN immersion and AI-powered certification."
            />
          </Reveal>

          <div ref={timelineRef} className="learning-path-timeline">
            {/* Background static line track */}
            <div className="timeline-line-track" aria-hidden="true" />

            {/* Foreground animated line drawing itself on scroll */}
            <motion.div 
              className="timeline-line-progress" 
              style={{ scaleY: prefersReducedMotion ? 1 : scaleY }} 
              aria-hidden="true" 
            />

            {learningPath.map((item, index) => {
              const Icon = timelineIcons[item.type] || Code2;
              return (
                <Reveal key={item.id} variant="fade-up" delay={index * 0.15}>
                  <div className="timeline-item-row">
                    {/* Node indicator */}
                    <div className="timeline-node" aria-hidden="true">
                      <Icon size={18} />
                    </div>

                    {/* Timeline Entry Card */}
                    <Card variant="glass" radius="lg" padding="md" className="timeline-entry-card">
                      <div className="timeline-card-header">
                        <div className="timeline-title-block">
                          <Tag 
                            variant={item.type === 'certification' ? 'cyan' : 'purple'} 
                            size="sm" 
                            className="timeline-badge-tag"
                          >
                            {item.badge}
                          </Tag>
                          <h3 className="timeline-title">{item.title}</h3>
                          <p className="timeline-institution">{item.institution}</p>
                        </div>

                        <span className="timeline-period-pill">
                          <Calendar size={13} />
                          <span>{item.year}</span>
                        </span>
                      </div>

                      <p className="timeline-location-row">
                        <MapPin size={13} />
                        <span>{item.location}</span>
                        <span className="dot-separator">·</span>
                        <span className="period-detail">{item.period}</span>
                      </p>

                      <p className="timeline-description">{item.description}</p>

                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="timeline-highlights-list">
                          {item.highlights.map((point) => (
                            <li key={point}>
                              <Check size={14} className="check-bullet" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.technologies && item.technologies.length > 0 && (
                        <div className="timeline-tech-tags" aria-label="Core technologies and concepts">
                          {item.technologies.map((tech) => (
                            <Tag key={tech} variant="glass" size="sm">
                              {tech}
                            </Tag>
                          ))}
                        </div>
                      )}
                    </Card>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Integrated Digital CV Action */}
          <Reveal variant="fade-up" delay={0.25}>
            <Card variant="glass" radius="lg" padding="md" className="about-resume-cta-box">
              <div className="resume-cta-text">
                <h4>Looking for a verified resume for your team?</h4>
                <p>View my complete ATS-formatted CV with coursework, verified credentials, and project stack.</p>
              </div>
              <Button 
                variant="primary"
                onClick={onOpenResume}
                className="btn-about-cv"
                icon={<ArrowRight size={15} />}
                iconPosition="right"
              >
                Preview &amp; Download CV
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
