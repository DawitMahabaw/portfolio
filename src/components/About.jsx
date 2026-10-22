import React from 'react';
import { 
  Code2, 
  Clock, 
  GraduationCap, 
  Terminal, 
  Trophy,
  Award,
  Rocket, 
  ArrowRight,
  FileText
} from 'lucide-react';
import { 
  aboutHighlights, 
  aboutIntro, 
  aboutPhoto, 
  learningJourneyMilestones 
} from '../data/about';
import { personalData } from '../data/personal';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import '../styles/About.css';

const highlightIcons = {
  Code2,
  Clock,
  GraduationCap,
};

const milestoneIcons = {
  Terminal,
  Trophy,
  Award,
  GraduationCap,
  Rocket,
};

export default function About() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', '#contact');
    }
  };

  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container about-container">
        {/* Top Two-Column Grid: Photo Card & Bio with Evidence Cards */}
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
                  {aboutPhoto.caption || 'Dawit Mahabaw · Full-stack developer · Addis Ababa'}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Headline, Narrative & 3 Evidence Cards */}
          <div className="about-content-column">
            <Reveal variant="fade-up" delay={0.14}>
              <h2 id="about-heading" className="about-headline">
                I build full-stack apps, from the database to the interface.
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.22}>
              <p className="about-bio-text">
                {aboutIntro}
              </p>
            </Reveal>

            {/* Three Evidence Cards */}
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
                      <p className="pillar-desc">
                        {item.id === 'projects' ? (
                          <>
                            2+ full-stack and 10+ front-end apps, including a{' '}
                            <span className="pillar-highlight">Q&A forum with semantic search</span> and an{' '}
                            <span className="pillar-highlight">AI chatbot</span>, both live.
                          </>
                        ) : (
                          item.description
                        )}
                      </p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealStagger>

            {/* Call To Action Buttons & Availability */}
            <Reveal variant="fade-up" delay={0.4}>
              <div className="about-cta-container">
                <div className="about-cta-buttons">
                  <a 
                    href="#contact" 
                    onClick={handleContactClick}
                    className="about-btn-primary"
                    aria-label="Get in touch with Dawit Mahabaw"
                  >
                    <span>Get in touch</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>

                  <a 
                    href={personalData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-btn-secondary"
                    aria-label="View and Download Dawit Mahabaw's CV"
                  >
                    <FileText size={18} aria-hidden="true" />
                    <span>View CV</span>
                  </a>
                </div>
                <p className="about-availability-line">
                  <span className="availability-status-dot" aria-hidden="true" />
                  <span>Open to opportunities · Addis Ababa</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* My Journey Subsection */}
        <div className="journey-section-wrapper">
          <div className="journey-section-header">
            <Reveal variant="fade-up" delay={0.1}>
              <h3 className="journey-section-title">
                My path to full-stack
              </h3>
            </Reveal>

            <Reveal variant="fade-up" delay={0.22}>
              <p className="journey-section-subtitle">
                From my first lines of C++ to shipping real apps.
              </p>
            </Reveal>
          </div>

          {/* Vertical Responsive Alternating Timeline */}
          <div className="journey-timeline">
            <div className="journey-timeline-track" aria-hidden="true" />
            
            <RevealStagger className="journey-timeline-items" staggerChildren={0.12} delayChildren={0.25}>
              <ol className="journey-timeline-list">
                {learningJourneyMilestones.map((milestone, index) => {
                  const Icon = milestoneIcons[milestone.icon] || Terminal;
                  const isLeft = index % 2 === 0;
                  const revealVariant = isLeft ? 'fade-left' : 'fade-right';

                  return (
                    <li key={milestone.id} className="journey-timeline-row">
                      <RevealItem variant={revealVariant} style={{ width: '100%' }}>
                        <article 
                          className={`journey-timeline-item ${isLeft ? 'item-left' : 'item-right'} ${milestone.highlighted ? 'item-highlighted' : ''}`} 
                          aria-labelledby={`milestone-title-${milestone.id}`}
                        >
                          {/* Central Circular Node with Icon */}
                          <div className="journey-node-container" aria-hidden="true">
                            <div className={`journey-node-icon ${milestone.highlighted ? 'node-highlighted' : ''}`}>
                              <Icon size={20} />
                            </div>
                          </div>

                          {/* Date Column (opposite the card on desktop) */}
                          <div className="journey-date-col">
                            <div className="journey-date-badge">
                              <span className="journey-date-text">{milestone.period}</span>
                              {milestone.inProgress && (
                                <span className="journey-in-progress-pill">
                                  <span className="in-progress-pulse" aria-hidden="true" />
                                  In progress
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Milestone Card Column with Pointer Arrow & Connector */}
                          <div className={`journey-card-col ${milestone.highlighted ? 'card-col-highlighted' : ''}`}>
                            <div className="journey-card">
                              <div className="journey-card-pointer" aria-hidden="true" />

                              <div className="journey-card-header">
                                <h4 id={`milestone-title-${milestone.id}`} className="journey-card-title">
                                  {milestone.title}
                                </h4>
                              </div>

                              <p className="journey-card-summary">{milestone.summary}</p>

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
                          </div>
                        </article>
                      </RevealItem>
                    </li>
                  );
                })}
              </ol>
            </RevealStagger>

            {/* Closing Line below timeline */}
            <Reveal variant="fade-up" delay={0.35}>
              <div className="journey-closing-wrapper">
                <p className="journey-closing-line">
                  <span className="journey-closing-dot" aria-hidden="true" />
                  Now: ready to join a team and build real products.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
