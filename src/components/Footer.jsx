import { ArrowUp, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import '../styles/Footer.css';

export default function Footer() {
  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return <footer className="footer-section"><div className="container"><div className="footer-top-row"><div className="footer-brand"><span className="footer-brand-title"><span className="brand-code">&lt;/&gt;</span>{personalData.name}</span><span className="footer-brand-sub">{personalData.roleSubhead}</span></div><a href={`mailto:${personalData.socials.email}`} className="footer-social-btn" aria-label={`Email ${personalData.name}`}><Mail size={18} /></a><button type="button" className="btn-back-to-top" onClick={goTop} aria-label="Back to top"><ArrowUp size={18} /></button></div><div className="footer-bottom-row"><span>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</span><span className="footer-motto">Open to work</span></div></div></footer>;
}
