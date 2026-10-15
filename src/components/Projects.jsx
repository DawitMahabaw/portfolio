import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

export default function Projects({ projects, onSelectProject }) {
  if (!projects.length) return null;
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header"><span className="section-tag">Selected work</span><h2 id="projects-heading" className="section-title">Project case studies</h2><p className="section-desc">A closer look at the problems, decisions, and results behind each build.</p></div>
        <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} onOpenDetails={onSelectProject} />)}</div>
      </div>
    </section>
  );
}
