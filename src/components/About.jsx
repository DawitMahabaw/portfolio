import React from 'react';
import { Code2, Lightbulb, BookOpen } from 'lucide-react';
import { aboutHighlights, aboutIntro, aboutPhoto } from '../data/about';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import '../styles/About.css';

const highlightIcons = {
  Code2,
  Lightbulb,
  BookOpen,
};

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container about-container">
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
      </div>
    </section>
  );
}
