import React from 'react';
import { FileText, Eye, Printer } from 'lucide-react';
import '../styles/ResumeCTA.css';

export default function ResumeCTA({ onOpenResume }) {
  return (
    <section className="resume-cta-section" id="resume" aria-labelledby="resume-heading">
      <div className="container">
        <div className="resume-banner-card">
          <div className="resume-content-left">
            <span className="resume-icon-badge" aria-hidden="true">
              <FileText size={30} />
            </span>
            <div className="resume-text-info">
              <span className="resume-subhead">Digital CV &amp; Credentials</span>
              <h2 id="resume-heading" className="resume-title">
                Review My Full Academic &amp; Engineering Resume
              </h2>
              <p className="resume-desc">
                An ATS-optimized, interactive developer CV with verified university coursework, Evangadi capstone projects, and technical skills.
              </p>
            </div>
          </div>

          <div className="resume-actions-right">
            <button 
              type="button" 
              className="btn btn-outline btn-resume-preview" 
              onClick={onOpenResume}
            >
              <Eye size={18} />
              <span>Preview &amp; Print CV</span>
            </button>
            
            <button
              type="button"
              className="btn btn-primary btn-resume-download"
              onClick={onOpenResume}
            >
              <Printer size={18} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
