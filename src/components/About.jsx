import React from 'react';
import { 
  Code2, 
  Lightbulb, 
  BookOpen, 
  Terminal, 
  Layout, 
  GraduationCap, 
  Rocket, 
  Calendar 
} from 'lucide-react';
import { 
  aboutHighlights, 
  aboutIntro, 
  aboutPhoto, 
  learningJourneyMilestones 
} from '../data/about';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import '../styles/About.css';

const highlightIcons = {
  Code2,
  Lightbulb,
  BookOpen,
};

const milestoneIcons = {
  Terminal,
  Layout,
  GraduationCap,
  Rocket,
};

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container about-container">
        {/* Top Two-Column Grid: Photo Card & Bio with Pillars */}
        <div className="about-grid">
          {/* Left Column: Photo Card with personal quote */}
          <div className="about-photo-column">
            <Reveal variant="scale-in" delay={0.1}>
              <div className="about-photo-card">
                <div className="about-photo-frame">
                  <img 
                    src={aboutPhoto.image} 
                    alt={aboutPhoto.alt} 
                    width="600" 
                    height="600" 
                    loading="lazy" 
                    onError={(e) => {
                      if (aboutPhoto.fallbackImage && e.currentTarget.src !== aboutPhoto.fallbackImage) {
                        e.currentTarget.src = aboutPhoto.fallbackImage;
                      }
                    }}
                  />
                </div>
                <p className="about-photo-quote">
                  {aboutPhoto.caption || 'Learning, building, and improving every day.'}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Eyebrow, Headline, Narrative & 3 Pillar Cards */}
          <div className="about-content-column">
            <Reveal variant="fade-up" delay={0.12}>
              <div className="about-eyebrow">
                <span className="eyebrow-dash" aria-hidden="true">—</span>
                <span>ABOUT ME</span>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.18}>
              <h2 id="about-heading" className="about-headline">
                Curious by nature. Building with purpose.
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.24}>
              <p className="about-bio-text">
                {aboutIntro}
              </p>
            </Reveal>

            {/* Three Pillar Cards */}
            <RevealStagger className="about-pillars-grid" staggerChildren={0.1} delayChildren={0.3}>
              {aboutHighlights.map((item) => {
                const Icon = highlightIcons[item.icon] || Code2;
                return (
                  <RevealItem key={item.id} variant="fade-up">
                    <div className="about-pillar-card">
                      <div className="pillar-icon-box" aria-hidden="true">
                        <Icon size={20} />
                      </div>
                      <h3 className="pillar-title">{item.title}</h3>
                      <p className="pillar-desc">{item.description}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </div>

        {/* My Learning Journey Subsection */}
        <div className="journey-section-wrapper">
          <div className="journey-section-header">
            <Reveal variant="fade-up" delay={0.1}>
              <div className="about-eyebrow">
                <span className="eyebrow-dash" aria-hidden="true">—</span>
                <span>MY LEARNING JOURNEY</span>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.16}>
              <h3 className="journey-section-title">
                From Foundations to Full-Stack Engineering
              </h3>
            </Reveal>

            <Reveal variant="fade-up" delay={0.22}>
              <p className="journey-section-subtitle">
                A visual timeline of my progression—from early programming logic to modern full-stack web applications.
              </p>
            </Reveal>
          </div>

          {/* Vertical Responsive Timeline */}
          <div className="journey-timeline">
            <div className="journey-timeline-track" aria-hidden="true" />
            
            <RevealStagger className="journey-timeline-items" staggerChildren={0.12} delayChildren={0.25}>
              {learningJourneyMilestones.map((milestone) => {
                const Icon = milestoneIcons[milestone.icon] || Terminal;
                return (
                  <RevealItem key={milestone.id} variant="fade-up">
                    <article className="journey-timeline-item" aria-labelledby={`milestone-title-${milestone.id}`}>
                      {/* Node / Marker */}
                      <div className="journey-node-container" aria-hidden="true">
                        <div className="journey-node-icon">
                          <Icon size={18} />
                        </div>
                      </div>

                      {/* Milestone Card Body */}
                      <div className="journey-card">
                        <div className="journey-card-header">
                          <div className="journey-card-badge-row">
                            <span className="journey-step-badge">Milestone {milestone.step}</span>
                            <span className="journey-period-pill">
                              <Calendar size={13} aria-hidden="true" />
                              {milestone.period}
                            </span>
                          </div>
                          <h4 id={`milestone-title-${milestone.id}`} className="journey-card-title">
                            {milestone.title}
                          </h4>
                        </div>

                        <p className="journey-card-summary">{milestone.summary}</p>

                        {/* Dual Sub-Items for Higher Education vs Bootcamp */}
                        {milestone.subItems && milestone.subItems.length > 0 && (
                          <div className="journey-subitems-grid">
                            {milestone.subItems.map((sub, idx) => (
                              <div key={idx} className="journey-subitem-box">
                                <div className="journey-subitem-top">
                                  <span className="journey-subitem-type">{sub.type}</span>
                                  <span className="journey-subitem-period">{sub.period}</span>
                                </div>
                                <h5 className="journey-subitem-inst">{sub.institution}</h5>
                                <p className="journey-subitem-degree">{sub.degree}</p>
                                <p className="journey-subitem-note">{sub.note}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Technology and Focus Tags */}
                        {milestone.tags && milestone.tags.length > 0 && (
                          <div className="journey-tags-row">
                            {milestone.tags.map((tag) => (
                              <span key={tag} className="journey-tech-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
