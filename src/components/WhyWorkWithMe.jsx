import React from 'react';
import { Sparkles, Code2, Layers } from 'lucide-react';
import { whyWorkWithMeData } from '../data/portfolioData';
import TechIcon from './TechIcon';
import '../styles/WhyWorkWithMe.css';

export default function WhyWorkWithMe() {
  const { title, description, badges } = whyWorkWithMeData;

  const renderBadgeIcon = (iconName) => {
    if (iconName === 'Code') {
      return <Code2 size={22} className="why-custom-icon" />;
    }
    if (iconName === 'Layers') {
      return <Layers size={22} className="why-custom-icon" />;
    }
    return <TechIcon name={iconName} size={22} />;
  };

  return (
    <section className="section why-work-section" id="why-work-with-me">
      <div className="container">
        <div className="why-work-card">
          {/* Left Column: Heading, Badge & Statement */}
          <div className="why-work-left">
            <div className="why-work-header">
              <div className="why-icon-badge" aria-hidden="true">
                <Sparkles size={24} />
              </div>
              <h2 className="why-work-title">{title}</h2>
            </div>

            <p className="why-work-desc">{description}</p>
          </div>

          {/* Right Column: 3x3 Competency & Technology Grid */}
          <div className="why-work-right">
            <div className="why-badges-grid" aria-label="Core Competencies">
              {badges.map((badge) => (
                <div key={badge.name} className="why-badge-item">
                  <div className="why-badge-icon-box">
                    {renderBadgeIcon(badge.icon)}
                  </div>
                  <span className="why-badge-name">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
