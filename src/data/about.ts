import type { AboutHighlight, LearningPathItem, AboutPhotoData } from './types';

/**
 * Short, confident 3-4 sentence intro in first person.
 * Real info: fresh graduate of Evangadi's AI-powered MERN stack course,
 * second-year Information Science student at Addis Ababa University (AAU).
 */
export const aboutIntro = 
  "I am a second-year Information Science student at Addis Ababa University and a fresh graduate of Evangadi's AI-powered MERN stack course. Driven by curiosity and systematic engineering, I build modern full-stack web applications with responsive React frontends, robust Node.js/Express REST APIs, and scalable MongoDB and MySQL databases. I bridge foundational academic principles in data systems and human-computer interaction with modern, production-focused development workflows and AI tooling. Committed to continuous growth and clean architecture, I focus on crafting reliable, user-centered digital solutions that solve real-world problems.";

export const aboutBio = aboutIntro;

/**
 * Three highlight cards with hover lift and glow
 */
export const aboutHighlights: AboutHighlight[] = [
  { 
    id: 'fullstack', 
    title: 'Full-Stack Development', 
    description: 'Engineering responsive, component-driven React interfaces paired with modular Express.js REST APIs and structured MongoDB/MySQL databases.', 
    icon: 'Layers',
    stat: 'MERN Stack & SQL'
  },
  { 
    id: 'problem-solving', 
    title: 'Problem Solving', 
    description: 'Transforming complex product flows into clean, maintainable logic using strong data structure fundamentals and defensive error handling.', 
    icon: 'Cpu',
    stat: 'Architecture & Logic'
  },
  { 
    id: 'continuous-learning', 
    title: 'Continuous Learning', 
    description: 'Actively mastering modern full-stack standards, AI-accelerated tooling, and production practices alongside university computer science coursework.', 
    icon: 'Sparkles',
    stat: 'AAU & Evangadi'
  },
];

/**
 * Compact "Learning Path" vertical timeline with 3 entries:
 * 1. Information Science at AAU
 * 2. Evangadi MERN Course
 * 3. AI-Powered Full-Stack Certification
 */
export const learningPath: LearningPathItem[] = [
  {
    id: 'aau',
    year: '2023 — Present',
    period: '2nd-Year Undergraduate',
    title: 'B.Sc. in Information Science',
    institution: 'Addis Ababa University (AAU)',
    role: 'Undergraduate Student',
    location: 'Addis Ababa, Ethiopia',
    type: 'education',
    badge: 'University Degree',
    description: 'Rigorous academic foundations in software systems, relational database normalization (3NF SQL), data structures, and human-computer interaction.',
    highlights: [
      'Relational Database Systems (SQL modeling & 3NF normalization)',
      'Data Structures & Algorithms in practical problem solving',
      'Systems Analysis, Design, and Information Architecture',
      'Human-Computer Interface (HCI) Principles',
    ],
    technologies: ['SQL', 'Relational DBs', 'Systems Analysis', 'Information Architecture', 'Data Structures'],
  },
  {
    id: 'evangadi-mern',
    year: '2024 — 2025',
    period: '400+ Hours Intensive Immersion',
    title: 'Full-Stack MERN Stack Course',
    institution: 'Evangadi Networks',
    role: 'Full-Stack Developer Trainee',
    location: 'Remote / Global',
    type: 'bootcamp',
    badge: 'Intensive Immersion',
    description: 'Comprehensive industry-aligned bootcamp covering modern MERN architecture, token-based authentication, modular REST endpoints, Git branching, and collaborative capstone projects.',
    highlights: [
      'Mastered React hooks, Context API, responsive component design, and Axios',
      'Engineered Express.js REST APIs with JWT auth and Bcrypt password hashing',
      'Designed dual-database schemas with MongoDB (Mongoose) and MySQL',
      'Built and defended collaborative full-stack capstone projects',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JWT', 'Git'],
  },
  {
    id: 'ai-certification',
    year: '2025',
    period: 'Certified Graduate',
    title: 'AI-Powered Full-Stack Certification',
    institution: 'Evangadi Networks',
    role: 'Certified Full-Stack Graduate',
    location: 'Remote / Global',
    type: 'certification',
    badge: 'Verified Credential',
    description: 'Advanced credential recognizing excellence in AI-assisted full-stack development workflows, production API design, and modern deployment standards.',
    highlights: [
      'AI-assisted development acceleration, debugging, and test scaffolding',
      'Robust API security, defensive error handling, and environment isolation',
      'End-to-end full-stack integration and production performance standards',
    ],
    technologies: ['AI Tooling', 'MERN Architecture', 'REST APIs', 'Cloud Deployment'],
  },
];

/**
 * Photo placeholder data with tilt-on-hover effect
 */
export const aboutPhoto: AboutPhotoData = {
  image: '/images/about-workspace.jpg',
  fallbackImage: '/images/profile.jpg',
  alt: 'Dawit Mahabaw - Junior MERN Developer workspace and workstation',
  badge: 'Junior MERN Developer',
  subBadge: 'AAU InfoSci · Evangadi Graduate',
  status: 'Open to Work & Internships',
  location: 'Addis Ababa, Ethiopia',
};
