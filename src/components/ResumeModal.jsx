import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, MapPin, Globe } from 'lucide-react';
import { personalData, skillCategories, experienceData, educationData, projectsData, certificationsData } from '../data';
import '../styles/ResumeModal.css';

export default function ResumeModal({ onClose, onDownload }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-modal-name">
      <div className="modal-content resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="project-modal-header">
          <div>
            <span className="resume-modal-tag">Digital CV &amp; Credentials</span>
            <h3 id="resume-modal-name" className="resume-modal-headline">{personalData.name} — {personalData.title}</h3>
          </div>
          <div className="resume-modal-actions">
            <button 
              type="button" 
              className="btn btn-outline btn-sm" 
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>
            <button 
              type="button" 
              className="btn btn-primary btn-sm" 
              onClick={onDownload || handlePrint}
              title="Download Resume"
            >
              <Download size={16} />
              <span>Download</span>
            </button>
            <button 
              type="button" 
              className="btn-close-modal" 
              onClick={onClose}
              aria-label="Close Resume Modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet (Printable Document) */}
        <div className="resume-sheet" id="printable-resume">
          {/* Header */}
          <div className="resume-sheet-header">
            <h1 className="resume-sheet-name">{personalData.name}</h1>
            <h2 className="resume-sheet-role">{personalData.title} • {personalData.roleSubhead}</h2>
            <div className="resume-sheet-contact-strip">
              <span><Mail size={14} /> {personalData.socials.email}</span>
              <span><Globe size={14} /> {personalData.socials.github}</span>
              <span><Globe size={14} /> {personalData.socials.linkedin}</span>
              <span><MapPin size={14} /> Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="resume-section-block">
            <h3 className="resume-section-heading">Professional Summary</h3>
            <p className="resume-section-text">{personalData.bio}</p>
          </section>

          {/* Technical Skills */}
          <section className="resume-section-block">
            <h3 className="resume-section-heading">Technical Competencies</h3>
            <div className="resume-skills-grid">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="resume-skill-cat">
                  <strong>{cat.title}:</strong>{' '}
                  <span>{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Full-Stack Projects */}
          <section className="resume-section-block">
            <h3 className="resume-section-heading">Featured Full-Stack Web Applications</h3>
            <div className="resume-projects-list">
              {projectsData.map((proj) => {
                const tagList = proj.tags || proj.technologies?.map((t) => typeof t === 'string' ? t : t.name) || [];
                return (
                  <div key={proj.id} className="resume-project-item">
                    <div className="resume-item-top">
                      <strong className="resume-item-title">{proj.title}</strong>
                      <span className="resume-item-tags">{tagList.join(' • ')}</span>
                    </div>
                    <p className="resume-item-desc">{proj.shortDescription || proj.description}</p>
                    {proj.keyFeatures && (
                      <ul className="resume-item-bullets">
                        {proj.keyFeatures.slice(0, 2).map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Education & Academic Rigor */}
          <section className="resume-section-block">
            <h3 className="resume-section-heading">Education &amp; Training</h3>
            <div className="resume-edu-list">
              {educationData.map((edu) => (
                <div key={edu.id} className="resume-edu-item">
                  <div className="resume-item-top">
                    <div>
                      <strong className="resume-item-title">{edu.degree}</strong>
                      <div className="resume-item-sub">{edu.institution} • {edu.location}</div>
                    </div>
                    <span className="resume-item-period">{edu.period}</span>
                  </div>
                  <p className="resume-item-desc">{edu.description}</p>
                  {edu.coursework && (
                    <div className="resume-coursework">
                      <em>Key Coursework:</em> {edu.coursework.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="resume-section-block">
            <h3 className="resume-section-heading">Practical Development Experience</h3>
            <div className="resume-exp-list">
              {experienceData.map((exp) => (
                <div key={exp.id} className="resume-exp-item">
                  <div className="resume-item-top">
                    <div>
                      <strong className="resume-item-title">{exp.role}</strong>
                      <div className="resume-item-sub">{exp.organization} • {exp.location}</div>
                    </div>
                    <span className="resume-item-period">{exp.period}</span>
                  </div>
                  <p className="resume-item-desc">{exp.description}</p>
                  {exp.responsibilities && (
                    <ul className="resume-item-bullets">
                      {exp.responsibilities.slice(0, 3).map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          {certificationsData.enabled && certificationsData.items.length > 0 && (
            <section className="resume-section-block">
              <h3 className="resume-section-heading">Certifications</h3>
              <div className="resume-cert-list">
                {certificationsData.items.map((cert) => (
                  <div key={cert.id} className="resume-cert-item">
                    <strong>{cert.title}</strong> — <span>{cert.issuer} ({cert.date})</span>
                    <p className="resume-item-desc">{cert.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Modal Footer */}
        <div className="project-modal-footer">
          <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
            Close
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={handlePrint}>
            <Printer size={16} />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
