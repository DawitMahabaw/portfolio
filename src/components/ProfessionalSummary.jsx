import React from 'react';
import { Check, Terminal, Layers } from 'lucide-react';
import { professionalSummaryData } from '../data/portfolioData';
import TechIcon from './TechIcon';
import '../styles/ProfessionalSummary.css';

export default function ProfessionalSummary() {
  const { 
    tag, 
    title, 
    bio, 
    stackPills, 
    capabilities, 
    keySkillsTitle, 
    keySkillsChecklist 
  } = professionalSummaryData;

  const getCapabilityIcon = (iconName) => {
    switch (iconName) {
      case 'Layers':
        return <Layers size={16} />;
      case 'api':
        return <TechIcon name="api" size={16} />;
      case 'github':
        return <TechIcon name="github" size={16} />;
      default:
        return <Terminal size={16} />;
    }
  };

  return (
    <section className="summary-section" id="summary">
      <div className="summary-glow" aria-hidden="true"></div>

      <div className="container">
        <div className="summary-grid">
          {/* Left Column: Summary statement & Tech Pills */}
          <div className="summary-content">
            <span className="section-tag" style={{ color: '#38BDF8' }}>
              {tag}
            </span>
            <h2 className="summary-title">{title}</h2>
            <p className="summary-bio">{bio}</p>

            {/* Core Stack Pills */}
            <div className="summary-tech-pills-row" aria-label="Core Technologies">
              {stackPills.map((pill) => (
                <div key={pill.name} className="summary-tech-pill">
                  <TechIcon name={pill.icon} size={20} />
                  <span>{pill.name}</span>
                </div>
              ))}
            </div>

            {/* Capabilities sub-row */}
            <div className="summary-capabilities-row">
              {capabilities.map((cap) => (
                <div key={cap.name} className="summary-cap-item">
                  {getCapabilityIcon(cap.icon)}
                  <span>{cap.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Skills & Technologies Card */}
          <div className="key-skills-card">
            <div className="key-skills-header">
              <div className="key-skills-icon-box">
                <Terminal size={20} />
              </div>
              <h3 className="key-skills-title">{keySkillsTitle}</h3>
            </div>

            <ul className="key-skills-checklist">
              {keySkillsChecklist.map((skill) => (
                <li key={skill} className="key-skills-item">
                  <Check size={18} strokeWidth={3} className="check-dot-icon" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
