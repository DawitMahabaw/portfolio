import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { AnimatedBackground } from './components/ui';
import { projectsData } from './data';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const syncProjectFromHash = () => {
      if (window.location.hash.startsWith('#project/')) {
        const id = window.location.hash.replace('#project/', '');
        const found = projectsData.find((p) => p.id === id) || null;
        setActiveProject(found);
      } else {
        setActiveProject(null);
      }
    };
    window.addEventListener('hashchange', syncProjectFromHash);
    syncProjectFromHash();
    return () => window.removeEventListener('hashchange', syncProjectFromHash);
  }, []);

  const selectProject = (project) => {
    setActiveProject(project);
    window.location.hash = `project/${project.id}`;
  };

  const returnToProjects = () => {
    setActiveProject(null);
    window.location.hash = 'projects';
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="portfolio-app">
      <AnimatedBackground />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects 
          projects={projectsData} 
          activeProject={activeProject}
          onSelectProject={selectProject} 
          onCloseProject={returnToProjects}
        />
        <Contact />
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
