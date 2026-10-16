import React from 'react';
import '../../styles/AnimatedBackground.css';

export function AnimatedBackground() {
  return (
    <div className="global-animated-bg" aria-hidden="true">
      {/* Slow-drifting ambient gradient mesh orbs (Hardware-accelerated CSS) */}
      <div className="bg-gradient-orb orb-purple" />
      <div className="bg-gradient-orb orb-cyan" />
      <div className="bg-gradient-orb orb-indigo" />

      {/* Faint flowing wave lines SVG */}
      <svg
        className="bg-wave-lines"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.0" />
            <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Smooth harmonic wave paths */}
        <path
          className="wave-path wave-path-1"
          d="M-100,280 C320,160 580,420 980,260 C1280,140 1500,320 1600,280"
          stroke="url(#wave-grad-1)"
          strokeWidth="1.5"
        />
        <path
          className="wave-path wave-path-2"
          d="M-100,380 C260,480 640,240 1020,440 C1320,560 1480,360 1600,400"
          stroke="url(#wave-grad-2)"
          strokeWidth="1.2"
        />
        <path
          className="wave-path wave-path-3"
          d="M-100,520 C360,620 740,360 1120,580 C1380,460 1520,580 1600,540"
          stroke="url(#wave-grad-1)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Subtle fine noise overlay for depth */}
      <div className="bg-grid-overlay" />
    </div>
  );
}

export default AnimatedBackground;
