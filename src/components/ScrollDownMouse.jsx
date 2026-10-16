import React from 'react';

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
    <div className="hero-scroll-divider-wrap">
      <div className="scroll-divider-line left" />
      <a 
        href={`#${targetId}`} 
        onClick={handleClick} 
        className="mouse-scroll-link"
        aria-label="Scroll down to explore portfolio"
      >
        <div className="mouse-indicator" aria-hidden="true">
          <div className="mouse-wheel-dot" />
        </div>
        <span className="mouse-scroll-text">EXPLORE</span>
      </a>
      <div className="scroll-divider-line right" />
    </div>
  );
}

export default ScrollDownMouse;
