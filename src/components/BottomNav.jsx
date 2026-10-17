import React, { useState, useEffect } from 'react';
import { Home, User, Wrench, Layers, MessageSquare } from 'lucide-react';
import '../styles/BottomNav.css';

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Wrench, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: Layers, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: MessageSquare, href: '#contact' },
  ];

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
      <div className="bottom-nav-container">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="bottom-nav-icon-wrap">
                <Icon size={19} />
              </div>
              <span className="bottom-nav-label">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
