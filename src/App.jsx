import React from 'react';
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
  return (
    <div className="portfolio-app">
      <AnimatedBackground />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projectsData} />
        <Contact />
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
