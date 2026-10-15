import React from 'react';
import { BriefcaseBusiness, Calendar, Check, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  if (!experienceData.length) return null;

  return (
    <section id="experience" className="section timeline-section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 id="experience-heading" className="section-title">Experience &amp; Training</h2>
          <p className="section-desc">Hands-on development work and verified training.</p>
        </div>
        <ol className="experience-timeline">
          {experienceData.map((item) => (
            <li key={item.id} className="experience-timeline-item">
              <span className="timeline-node" aria-hidden="true"><BriefcaseBusiness size={16} /></span>
              <article className="experience-card">
                <div className="record-heading">
                  <div>
                    <h3>{item.role}</h3>
                    {item.organization && <p className="record-org">{item.organization}</p>}
                  </div>
                  {item.period && <span className="record-period"><Calendar size={14} />{item.period}</span>}
                </div>
                {item.location && <p className="record-location"><MapPin size={15} />{item.location}</p>}
                {item.description && <p className="record-description">{item.description}</p>}
                {item.responsibilities?.length > 0 && (
                  <ul className="record-list">
                    {item.responsibilities.map((itemText) => <li key={itemText}><Check size={16} />{itemText}</li>)}
                  </ul>
                )}
                {item.technologies?.length > 0 && <div className="record-tags">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
