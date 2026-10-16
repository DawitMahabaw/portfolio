import type { SkillCategory, SkillItem } from './types';

/**
 * Ordered tech stack matching the design reference:
 * Python, JavaScript, TypeScript, React, Svelte, Vue.js, Node.js, Express, MongoDB, MySQL, Tailwind, Git, Postman, VS Code
 */
export const techStackSkills: SkillItem[] = [
  { name: 'Python', icon: 'python', color: '#3776AB', glowColor: 'rgba(55, 118, 171, 0.45)' },
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', glowColor: 'rgba(247, 223, 30, 0.45)' },
  { name: 'TypeScript', icon: 'typescript', color: '#3178C6', glowColor: 'rgba(49, 120, 198, 0.45)' },
  { name: 'React', icon: 'react', color: '#61DAFB', glowColor: 'rgba(97, 218, 251, 0.45)' },
  { name: 'Svelte', icon: 'svelte', color: '#FF3E00', glowColor: 'rgba(255, 62, 0, 0.45)' },
  { name: 'Vue.js', icon: 'vuejs', color: '#42B883', glowColor: 'rgba(66, 184, 131, 0.45)' },
  { name: 'Node.js', icon: 'nodejs', color: '#539E43', glowColor: 'rgba(83, 158, 67, 0.45)' },
  { name: 'Express', icon: 'express', color: '#FFFFFF', glowColor: 'rgba(255, 255, 255, 0.35)' },
  { name: 'MongoDB', icon: 'mongodb', color: '#47A248', glowColor: 'rgba(71, 162, 72, 0.45)' },
  { name: 'MySQL', icon: 'mysql', color: '#00758F', glowColor: 'rgba(0, 117, 143, 0.5)' },
  { name: 'Tailwind', icon: 'tailwind', color: '#38BDF8', glowColor: 'rgba(56, 189, 248, 0.45)' },
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
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6', glowColor: 'rgba(49, 120, 198, 0.45)' },
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
      { name: 'Python', icon: 'python', color: '#3776AB', glowColor: 'rgba(55, 118, 171, 0.45)' },
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
      { name: 'Git', icon: 'git', color: '#F05032', glowColor: 'rgba(240, 80, 50, 0.45)' },
      { name: 'Postman', icon: 'postman', color: '#FF6C37', glowColor: 'rgba(255, 108, 55, 0.45)' },
      { name: 'VS Code', icon: 'vscode', color: '#007ACC', glowColor: 'rgba(0, 122, 204, 0.45)' },
    ],
  },
];
