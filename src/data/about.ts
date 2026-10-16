import type { AboutHighlight, LearningPathItem, AboutPhotoData } from './types';

/**
 * Clean, concise first-person intro matching the portfolio design.
 */
export const aboutIntro = 
  "I'm a fresh graduate of Evangadi's AI-powered MERN Stack course and a second-year Information Science student at Addis Ababa University (AAU). I'm developing my skills across React, Node.js, Express, and MySQL by turning ideas into practical web experiences. I bring a thoughtful, problem-solving mindset to my work and stay committed to learning and growing as a full-stack developer.";

export const aboutBio = aboutIntro;

/**
 * Three core pillar cards
 */
export const aboutHighlights: AboutHighlight[] = [
  { 
    id: 'fullstack', 
    title: 'Full–Stack Development', 
    description: 'Building responsive interfaces and complete web experiences with the MERN stack.', 
    icon: 'Code2',
  },
  { 
    id: 'problem-solving', 
    title: 'Problem Solving', 
    description: 'Breaking challenges into clear steps and practical, user-focused solutions.', 
    icon: 'Lightbulb',
  },
  { 
    id: 'continuous-learning', 
    title: 'Continuous Learning', 
    description: 'Growing my skills through hands-on work and Information Science studies.', 
    icon: 'BookOpen',
  },
];

/**
 * About photo and quote
 */
export const aboutPhoto: AboutPhotoData & { caption?: string } = {
  image: '/images/hero-portrait.webp',
  fallbackImage: '/images/hero-portrait.jpg',
  alt: 'Dawit Mahabaw - Full-Stack Developer at workstation',
  caption: 'Learning, building, and improving every day.',
  badge: 'Junior MERN Developer',
  subBadge: 'AAU InfoSci · Evangadi Graduate',
  status: 'Open to Work',
  location: 'Addis Ababa, Ethiopia',
};

/**
 * Retained learning path items for credentials/reference
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
    description: 'Academic foundations in software systems, relational database normalization (3NF SQL), data structures, and human-computer interaction.',
    highlights: [
      'Relational Database Systems (SQL modeling & 3NF normalization)',
      'Data Structures & Algorithms in practical problem solving',
      'Systems Analysis, Design, and Information Architecture',
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
    ],
    technologies: ['AI Tooling', 'MERN Architecture', 'REST APIs', 'Cloud Deployment'],
  },
];

