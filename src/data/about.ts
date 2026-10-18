import type { AboutHighlight, LearningPathItem, AboutPhotoData, JourneyMilestone } from './types';

/**
 * Clean, concise first-person intro matching the portfolio design.
 */
export const aboutIntro = 
  "I build full-stack web apps with React, Node.js, Express and MySQL. I'm a second-year Information Science student at Addis Ababa University and finished 400+ hours of MERN training at Evangadi Networks. My projects include a Q&A forum with semantic search and an AI chatbot. I'm looking for a developer role where I can ship real features and keep growing.";

export const aboutBio = aboutIntro;

/**
 * Three evidence cards
 */
export const aboutHighlights: AboutHighlight[] = [
  { 
    id: 'projects', 
    title: '12+ projects built', 
    description: '2+ full-stack and 10+ front-end builds. Highlights: a Q&A forum with semantic search and an AI chatbot.', 
    icon: 'Code2',
  },
  { 
    id: 'bootcamp', 
    title: '400+ hours', 
    description: 'Hands-on MERN bootcamp training at Evangadi Networks.', 
    icon: 'Clock',
  },
  { 
    id: 'education', 
    title: 'Information Science', 
    description: 'Second-year student at Addis Ababa University.', 
    icon: 'GraduationCap',
  },
];

/**
 * About photo and quote
 */
export const aboutPhoto: AboutPhotoData & { caption?: string } = {
  image: '/images/dawit-portrait.jpg',
  fallbackImage: '/images/dawit-portrait.jpg',
  alt: 'Dawit Mahabaw - Full-Stack Developer',
  caption: 'Dawit Mahabaw · Full-stack developer · Addis Ababa',
  badge: 'Full-Stack Developer',
  subBadge: 'AAU InfoSci · Evangadi Graduate',
  status: 'Open to Work',
  location: 'Addis Ababa, Ethiopia',
};

/**
 * Concise "My Learning Journey" Milestones (20-30s scan)
 * Early Tech Interest -> C++ Foundations -> Frontend Dev -> Higher Ed & Bootcamp -> Full-Stack Engineering
 */
export const learningJourneyMilestones: JourneyMilestone[] = [
  {
    id: 'foundations',
    period: '2022 – 2023',
    title: 'Learning the foundations',
    summary: 'Started with C++ (variables, loops, functions, problem solving), then moved into HTML, CSS and JavaScript and built several responsive web pages.',
    tags: ['C++', 'HTML/CSS', 'JavaScript'],
    icon: 'Terminal',
  },
  {
    id: 'academic-excellence',
    period: '2023 – 2025',
    title: 'Academic excellence',
    summary: 'Took part in national high school competitions while studying programming on my own, then ranked among the top scorers in the national entrance exam.',
    tags: ['Competitions', 'Self-study'],
    icon: 'Trophy',
  },
  {
    id: 'frontend-certification',
    period: '2025',
    title: 'Front-end certification',
    summary: 'Earned a Front-End Web Developer certification from Udacity.',
    tags: ['Udacity', 'Front-end'],
    icon: 'Award',
  },
  {
    id: 'aau-infosci',
    period: '2025 – Present',
    title: 'Information Science at Addis Ababa University',
    summary: 'Studying relational databases, data structures, algorithms and systems design.',
    tags: ['Databases', 'Algorithms', 'Systems design'],
    icon: 'GraduationCap',
    inProgress: true,
  },
  {
    id: 'evangadi-bootcamp',
    period: 'Mar – Oct 2026',
    title: 'Full-stack bootcamp at Evangadi Networks',
    summary: 'Completed 400+ hours of MERN training, then built a Q&A forum with semantic search and an AI chatbot.',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    icon: 'Rocket',
    highlighted: true,
  },
];

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
      'Designed relational schemas with MySQL',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Git'],
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


