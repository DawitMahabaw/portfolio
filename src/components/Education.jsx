import React from 'react';
import { Award, Calendar, ExternalLink, GraduationCap, MapPin } from 'lucide-react';
import { certificationsData, educationData } from '../data/portfolioData';

export default function Education() {
  const hasEducation = educationData.length > 0;
  const hasCertifications = certificationsData.enabled && certificationsData.items.length > 0;
  if (!hasEducation && !hasCertifications) return null;

  return (
    <section id="education" className="section education-section" aria-labelledby="education-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 id="education-heading" className="section-title">Education &amp; Certifications</h2>
          <p className="section-desc">Academic background and public credentials.</p>
        </div>
        {hasEducation && <div className="credential-grid">
          {educationData.map((item) => <article key={item.id} className="credential-card">
            <GraduationCap className="credential-icon" aria-hidden="true" />
            <h3>{item.degree}</h3><p className="record-org">{item.institution}</p>
            <p className="credential-meta"><Calendar size={14} />{item.period}{item.location && <><span aria-hidden="true">·</span><MapPin size={14} />{item.location}</>}</p>
            {item.description && <p className="record-description">{item.description}</p>}
            {item.coursework?.length > 0 && <ul className="record-tags">{item.coursework.map((course) => <li key={course}>{course}</li>)}</ul>}
          </article>)}
        </div>}
        {hasCertifications && <div className="certification-block">
          <h3 className="credential-subtitle">Certifications</h3>
          <div className="credential-grid">
            {certificationsData.items.map((item) => <article key={item.id} className="credential-card">
              <Award className="credential-icon" aria-hidden="true" /><h3>{item.title}</h3>
              <p className="record-org">{item.issuer}</p>{item.date && <p className="credential-meta"><Calendar size={14} />{item.date}</p>}
              {item.description && <p className="record-description">{item.description}</p>}
              {item.credentialUrl && <a className="credential-link" href={item.credentialUrl} target="_blank" rel="noopener noreferrer">View credential <ExternalLink size={15} /></a>}
            </article>)}
          </div>
        </div>}
      </div>
    </section>
  );
}
