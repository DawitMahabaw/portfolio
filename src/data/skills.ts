import type { SkillCategory, SkillItem } from './types';

/**
 * Tech-only skills categories:
 * Frontend, Backend, Database, Tools
 * (React, JavaScript, HTML, CSS, Tailwind, Node.js, Express, MongoDB, MySQL, REST APIs, JWT, Git/GitHub, Postman, VS Code)
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    accentColor: 'cyan',
    description: 'Modern, component-driven user interfaces & responsive web apps',
    skills: [
      { name: 'React', icon: 'react', color: '#61DAFB', glowColor: 'rgba(97, 218, 251, 0.45)' },
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', glowColor: 'rgba(247, 223, 30, 0.45)' },
      { name: 'HTML', icon: 'html', color: '#E34F26', glowColor: 'rgba(227, 79, 38, 0.45)' },
      { name: 'CSS', icon: 'css', color: '#1572B6', glowColor: 'rgba(21, 114, 182, 0.45)' },
      { name: 'Tailwind', icon: 'tailwind', color: '#38BDF8', glowColor: 'rgba(56, 189, 248, 0.45)' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    accentColor: 'purple',
    description: 'Modular server architectures, RESTful endpoints & token security',
    skills: [
      { name: 'Node.js', icon: 'nodejs', color: '#539E43', glowColor: 'rgba(83, 158, 67, 0.45)' },
      { name: 'Express', icon: 'express', color: '#FFFFFF', glowColor: 'rgba(255, 255, 255, 0.35)' },
      { name: 'REST APIs', icon: 'restapis', color: '#06B6D4', glowColor: 'rgba(6, 182, 212, 0.45)' },
      { name: 'JWT', icon: 'jwt', color: '#D63AFF', glowColor: 'rgba(214, 58, 255, 0.5)' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    accentColor: 'emerald',
    description: 'Relational data modeling, document schemas & query integrity',
    skills: [
      { name: 'MongoDB', icon: 'mongodb', color: '#47A248', glowColor: 'rgba(71, 162, 72, 0.45)' },
      { name: 'MySQL', icon: 'mysql', color: '#00758F', glowColor: 'rgba(0, 117, 143, 0.5)' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    accentColor: 'amber',
    description: 'Developer environment, API testing & distributed version control',
    skills: [
      { name: 'Git/GitHub', icon: 'gitgithub', color: '#F05032', glowColor: 'rgba(240, 80, 50, 0.45)' },
      { name: 'Postman', icon: 'postman', color: '#FF6C37', glowColor: 'rgba(255, 108, 55, 0.45)' },
      { name: 'VS Code', icon: 'vscode', color: '#007ACC', glowColor: 'rgba(0, 122, 204, 0.45)' },
    ],
  },
];

/**
 * Continuous marquee of all 14 tech logos
 */
export const marqueeSkills: SkillItem[] = [
  { name: 'React', icon: 'react', color: '#61DAFB', glowColor: 'rgba(97, 218, 251, 0.45)' },
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', glowColor: 'rgba(247, 223, 30, 0.45)' },
  { name: 'HTML', icon: 'html', color: '#E34F26', glowColor: 'rgba(227, 79, 38, 0.45)' },
  { name: 'CSS', icon: 'css', color: '#1572B6', glowColor: 'rgba(21, 114, 182, 0.45)' },
  { name: 'Tailwind', icon: 'tailwind', color: '#38BDF8', glowColor: 'rgba(56, 189, 248, 0.45)' },
  { name: 'Node.js', icon: 'nodejs', color: '#539E43', glowColor: 'rgba(83, 158, 67, 0.45)' },
  { name: 'Express', icon: 'express', color: '#FFFFFF', glowColor: 'rgba(255, 255, 255, 0.35)' },
  { name: 'REST APIs', icon: 'restapis', color: '#06B6D4', glowColor: 'rgba(6, 182, 212, 0.45)' },
  { name: 'JWT', icon: 'jwt', color: '#D63AFF', glowColor: 'rgba(214, 58, 255, 0.5)' },
  { name: 'MongoDB', icon: 'mongodb', color: '#47A248', glowColor: 'rgba(71, 162, 72, 0.45)' },
  { name: 'MySQL', icon: 'mysql', color: '#00758F', glowColor: 'rgba(0, 117, 143, 0.5)' },
  { name: 'Git/GitHub', icon: 'gitgithub', color: '#F05032', glowColor: 'rgba(240, 80, 50, 0.45)' },
  { name: 'Postman', icon: 'postman', color: '#FF6C37', glowColor: 'rgba(255, 108, 55, 0.45)' },
  { name: 'VS Code', icon: 'vscode', color: '#007ACC', glowColor: 'rgba(0, 122, 204, 0.45)' },
];
