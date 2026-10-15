import { Layout, Server, ShieldCheck } from 'lucide-react';
import { aboutHighlights, personalData } from '../data/portfolioData';
import '../styles/About.css';

const icons = { Layout, Server, ShieldCheck };

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container"><div className="about-grid">
        <div className="about-content">
          <div className="section-header"><span className="section-tag">About</span><h2 id="about-heading" className="section-title">Building with clarity and care</h2></div>
          <p className="about-description">{personalData.aboutIntro}</p>
          <div className="strengths-grid">
            {aboutHighlights.map((item) => {
              const Icon = icons[item.icon] || Layout;
              return <article key={item.id} className="strength-card"><span className="strength-icon-box" aria-hidden="true"><Icon size={20} /></span><div className="strength-info"><h3>{item.title}</h3><p>{item.description}</p></div></article>;
            })}
          </div>
        </div>
        <div className="about-visual-collage"><div className="about-image-container"><img src={personalData.aboutImage} alt={personalData.aboutImageAlt} width="800" height="600" loading="lazy" /></div></div>
      </div></div>
    </section>
  );
}
