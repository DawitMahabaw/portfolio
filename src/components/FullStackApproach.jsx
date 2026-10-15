import { CheckCheck, ClipboardList, Code2 } from 'lucide-react';
import { fullStackApproachData } from '../data/portfolioData';
import '../styles/FullStackApproach.css';

const workflowIcons = { plan: ClipboardList, build: Code2, review: CheckCheck };

export default function FullStackApproach() {
  const { tag, title, subtitle, pipeline } = fullStackApproachData;
  return (
    <section className="section approach-section" id="pipeline" aria-labelledby="approach-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">{tag}</span>
          <h2 id="approach-heading" className="section-title">{title}</h2>
          <p className="section-desc centered-desc">{subtitle}</p>
        </div>
        <ol className="pipeline-steps-grid">
          {pipeline.map((step) => { 
            const Icon = workflowIcons[step.id] || Code2; 
            return (
              <li key={step.id} className="pipeline-step-card">
                <span className="step-badge-circle" style={{ borderColor: `${step.color}45`, color: step.color }}>
                  <Icon size={27} />
                </span>
                <span className="step-layer-label">{step.layer}</span>
                <h3 className="step-tech-name">{step.tech}</h3>
                <p className="step-description">{step.description}</p>
              </li>
            ); 
          })}
        </ol>
      </div>
    </section>
  );
}
