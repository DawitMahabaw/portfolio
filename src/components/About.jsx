import React from 'react';
import { 
  Layout, 
  Cpu, 
  ShieldCheck, 
  CheckCircle, 
  GraduationCap, 
  Code2, 
  Rocket, 
  Calendar, 
  MapPin, 
  Check, 
  FileText,
  ArrowRight
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { aboutHighlights, personalData, learningPath } from '../data';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import '../styles/About.css';
import '../styles/Timeline.css';

const strengthIcons = {
  Layout,
  Cpu,
  ShieldCheck,
  CheckCircle,
};

const timelineIcons = {
  education: GraduationCap,
  bootcamp: Code2,
  production: Rocket,
};

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Pill Badge & Header */}
        <Reveal variant="fade-up">
          <div className="section-pill-badge">
            <span className="badge-num">02</span>
            <span className="badge-divider">//</span>
            <span className="badge-text">BACKGROUND &amp; PHILOSOPHY</span>
          </div>

          <div className="section-header">
            <h2 id="about-heading" className="section-title">
              Building with Clarity, Structure &amp; Care
            </h2>
            <p className="section-desc">
              Bridging academic Information Science principles with modern full-stack engineering.
            </p>
          </div>
        </Reveal>

        {/* Top Grid: Bio Narrative & Strengths + Workspace Visual */}
        <div className="about-grid">
          <div className="about-content">
            <Reveal variant="fade-up" delay={0.1}>
              <p className="about-description">{personalData.aboutIntro}</p>
            </Reveal>

            {/* Core Engineering Strengths */}
            <RevealStagger className="strengths-grid" staggerChildren={0.08} delayChildren={0.15}>
              {aboutHighlights.map((item) => {
                const Icon = strengthIcons[item.icon] || Layout;
                return (
                  <RevealItem key={item.id} variant="fade-up" className="strength-card">
                    <span className="strength-icon-box" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <div className="strength-info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>

          {/* Right Visual Image Frame with Parallax Tilt */}
          <Reveal variant="scale-in" delay={0.2} className="about-visual-collage">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1200}
              className="about-image-tilt"
            >
              <div className="about-image-container">
                <img 
                  src={personalData.aboutImage} 
                  alt={personalData.aboutImageAlt} 
                  width="800" 
                  height="600" 
                  loading="lazy" 
                />
              </div>
            </Tilt>
          </Reveal>
        </div>

        {/* Short Learning Path Timeline (Merged Experience & Credentials) */}
        <div className="learning-path-wrapper">
          <Reveal variant="fade-up">
            <div className="learning-path-header">
              <span className="section-tag" style={{ color: 'var(--accent-cyan)' }}>
                Milestones &amp; Training
              </span>
              <h3 className="learning-path-title">My Learning Path</h3>
              <p className="learning-path-subtitle">
                Academic foundations at AAU, intensive bootcamp immersion at Evangadi, and independent full-stack builds.
              </p>
            </div>
          </Reveal>

          <ol className="experience-timeline">
            {learningPath.map((item, index) => {
              const Icon = timelineIcons[item.type] || Code2;
              return (
                <li key={item.id} className="experience-timeline-item">
                  <span className="timeline-node" aria-hidden="true">
                    <Icon size={18} />
                  </span>

                  <Reveal variant="fade-up" delay={index * 0.1}>
                    <article className="experience-card">
                      <div className="record-heading">
                        <div>
                          <span className="timeline-badge-tag">{item.badge}</span>
                          <h3>{item.title}</h3>
                          <p className="record-org">{item.institution}</p>
                        </div>
                        <span className="record-period">
                          <Calendar size={14} />
                          {item.year}
                        </span>
                      </div>

                      <p className="record-location">
                        <MapPin size={14} />
                        {item.location} &nbsp;·&nbsp; <span>{item.period}</span>
                      </p>

                      <p className="record-description">{item.description}</p>

                      {item.highlights?.length > 0 && (
                        <ul className="record-list">
                          {item.highlights.map((point) => (
                            <li key={point}>
                              <Check size={16} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.technologies?.length > 0 && (
                        <div className="record-tags" aria-label="Core topics & tools">
                          {item.technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                      )}
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          {/* Integrated Digital CV Action */}
          <Reveal variant="fade-up" delay={0.25}>
            <div className="about-resume-cta-box">
              <div className="resume-cta-text">
                <h4>Looking for a verified resume for your team?</h4>
                <p>View my complete ATS-formatted CV with coursework, verified credentials, and project stack.</p>
              </div>
              <button 
                type="button" 
                className="btn btn-primary btn-about-cv" 
                onClick={onOpenResume}
              >
                <FileText size={17} />
                <span>Preview &amp; Download CV</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
