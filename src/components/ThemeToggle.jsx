import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import '../styles/ThemeToggle.css';

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';
  const tooltipText = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <div className={`theme-toggle-wrapper ${className}`}>
      <button
        type="button"
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label={tooltipText}
        title={tooltipText}
        id="theme-toggle-btn"
      >
        <div className={`toggle-icon-wrap ${isDark ? 'is-dark' : 'is-light'}`}>
          {isDark ? (
            <Sun size={18} className="theme-icon sun-icon" strokeWidth={2.2} />
          ) : (
            <Moon size={18} className="theme-icon moon-icon" strokeWidth={2.2} />
          )}
        </div>

        {/* Floating Hover Tooltip */}
        <span className="theme-tooltip" role="tooltip">
          {tooltipText}
        </span>
      </button>
    </div>
  );
}
