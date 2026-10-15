import type { SkillCategory } from './types';

export const coreStack = [
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express.js', icon: 'expressjs' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'MySQL', icon: 'mysql' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    accentColor: 'cyan',
    skills: [
      { name: 'React', icon: 'react', level: 'Core' },
      { name: 'JavaScript (ES6+)', icon: 'javascript', level: 'Core' },
      { name: 'HTML5', icon: 'html5', level: 'Core' },
      { name: 'CSS3 & Vanilla CSS', icon: 'css3', level: 'Core' },
      { name: 'Responsive Design', icon: 'api', level: 'Comfortable' },
      { name: 'Context API & Hooks', icon: 'react', level: 'Comfortable' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    accentColor: 'emerald',
    skills: [
      { name: 'Node.js', icon: 'nodejs', level: 'Core' },
      { name: 'Express.js', icon: 'expressjs', level: 'Core' },
      { name: 'REST APIs', icon: 'api', level: 'Core' },
      { name: 'JWT Authentication', icon: 'api', level: 'Comfortable' },
      { name: 'Middleware & Routing', icon: 'nodejs', level: 'Comfortable' },
      { name: 'Bcrypt Password Hash', icon: 'api', level: 'Comfortable' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Modeling',
    accentColor: 'indigo',
    skills: [
      { name: 'MongoDB', icon: 'mongodb', level: 'Core' },
      { name: 'Mongoose ODM', icon: 'mongoose', level: 'Core' },
      { name: 'MySQL', icon: 'mysql', level: 'Core' },
      { name: 'Schema Design & 3NF', icon: 'mongodb', level: 'Comfortable' },
      { name: 'SQL Querying', icon: 'api', level: 'Comfortable' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools & AI',
    accentColor: 'amber',
    skills: [
      { name: 'Git & GitHub', icon: 'github', level: 'Core' },
      { name: 'VS Code', icon: 'vscode', level: 'Core' },
      { name: 'Postman', icon: 'postman', level: 'Core' },
      { name: 'npm / Vite', icon: 'git', level: 'Comfortable' },
      { name: 'AI Development Tools', icon: 'api', level: 'Applied' },
      { name: 'Vercel / Render', icon: 'api', level: 'Deployment' },
    ],
  },
];
