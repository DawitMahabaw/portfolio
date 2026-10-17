import type { SkillCategory, SkillItem } from './types';

/**
 * Focused MERN + MySQL tech stack:
 * React, Node.js, Express, MySQL, JavaScript, REST APIs, Git, Postman, VS Code
 */
export const techStackSkills: SkillItem[] = [
  { name: 'React', icon: 'react', color: '#61DAFB', glowColor: 'rgba(97, 218, 251, 0.45)' },
  { name: 'Node.js', icon: 'nodejs', color: '#539E43', glowColor: 'rgba(83, 158, 67, 0.45)' },
  { name: 'Express', icon: 'express', color: '#FFFFFF', glowColor: 'rgba(255, 255, 255, 0.35)' },
  { name: 'MySQL', icon: 'mysql', color: '#00758F', glowColor: 'rgba(0, 117, 143, 0.5)' },
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', glowColor: 'rgba(247, 223, 30, 0.45)' },
  { name: 'REST APIs', icon: 'restapis', color: '#06B6D4', glowColor: 'rgba(6, 182, 212, 0.45)' },
  { name: 'Git', icon: 'git', color: '#F05032', glowColor: 'rgba(240, 80, 50, 0.45)' },
  { name: 'Postman', icon: 'postman', color: '#FF6C37', glowColor: 'rgba(255, 108, 55, 0.45)' },
  { name: 'VS Code', icon: 'vscode', color: '#007ACC', glowColor: 'rgba(0, 122, 204, 0.45)' },
];

export const marqueeSkills = techStackSkills;

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    accentColor: 'cyan',
    description: 'Modern, component-driven user interfaces & responsive web apps',
    skills: [
      { name: 'React', icon: 'react', color: '#61DAFB', glowColor: 'rgba(97, 218, 251, 0.45)' },
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', glowColor: 'rgba(247, 223, 30, 0.45)' },
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
    ],
  },
  {
    id: 'database',
    title: 'Database',
    accentColor: 'emerald',
    description: 'Relational database schema modeling, SQL normalization & query integrity',
    skills: [
      { name: 'MySQL', icon: 'mysql', color: '#00758F', glowColor: 'rgba(0, 117, 143, 0.5)' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    accentColor: 'amber',
    description: 'Developer environment, API testing & distributed version control',
    skills: [
      { name: 'Git', icon: 'git', color: '#F05032', glowColor: 'rgba(240, 80, 50, 0.45)' },
      { name: 'Postman', icon: 'postman', color: '#FF6C37', glowColor: 'rgba(255, 108, 55, 0.45)' },
      { name: 'VS Code', icon: 'vscode', color: '#007ACC', glowColor: 'rgba(0, 122, 204, 0.45)' },
    ],
  },
];
