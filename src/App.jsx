import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalSummary from './components/ProfessionalSummary';
import About from './components/About';
import Skills from './components/Skills';
import FullStackApproach from './components/FullStackApproach';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Experience from './components/Experience';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import ResumeModal from './components/ResumeModal';
import { projectsData } from './data/portfolioData';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

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

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div className="portfolio-app">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar onOpenResume={openResume} />
      
      <main id="main-content">
        {activeProject ? (
          <ProjectDetails 
            project={activeProject} 
            onBack={returnToProjects} 
            onSelectProject={selectProject} 
          />
        ) : (
          <>
            <Hero />
            <ProfessionalSummary />
            <About />
            <Skills />
            <FullStackApproach />
            <WhyWorkWithMe />
            <Projects projects={projectsData} onSelectProject={selectProject} />
            <Experience />
            <Education />
            <ResumeCTA onOpenResume={openResume} />
            <Contact />
          </>
        )}
      </main>

      <Footer />
      <BottomNav />

      {isResumeOpen && (
        <ResumeModal onClose={closeResume} onDownload={() => window.print()} />
      )}
    </div>
  );
}
