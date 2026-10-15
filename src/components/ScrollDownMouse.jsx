import React from 'react';
import { ChevronDown } from 'lucide-react';

export function ScrollDownMouse({ targetId = 'about' }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
  };

  return (
    <div className="hero-scroll-wrapper">
      <a 
        href={`#${targetId}`} 
        onClick={handleClick} 
        className="mouse-scroll-link"
        aria-label="Scroll down to About section"
      >
        <div className="mouse-indicator" aria-hidden="true">
          <div className="mouse-wheel-dot" />
        </div>
        <span className="mouse-scroll-text">Explore</span>
        <ChevronDown size={14} className="mouse-scroll-arrow" aria-hidden="true" />
      </a>
    </div>
  );
}

export default ScrollDownMouse;
