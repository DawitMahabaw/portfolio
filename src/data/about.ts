import type { AboutHighlight, LearningPathItem, AboutPhotoData, JourneyMilestone } from './types';

/**
 * Clean, concise first-person intro matching the portfolio design.
 */
export const aboutIntro = 
  "I build full-stack web apps with React, Node.js, Express and MySQL. I'm a second-year Information Science student at Addis Ababa University and finished 400+ hours of MERN training at Evangadi Networks. My projects include a Q&A forum with semantic search and an AI chatbot. I'm looking for a junior developer role where I can ship real features and keep growing.";

export const aboutBio = aboutIntro;

/**
 * Three evidence cards
 */
export const aboutHighlights: AboutHighlight[] = [
  { 
    id: 'projects', 
    title: '2 full-stack projects', 
    description: 'A Q&A forum with semantic search and an AI chatbot, both live.', 
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
  badge: 'Junior Developer',
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
    id: 'programming-foundations',
    step: '01',
    period: 'Jan 2022 — May 2022',
    title: 'Programming Foundations',
    summary: 'Sparked by an early curiosity for digital technology, I began coding with C++. I built my core foundation around variables, conditions, loops, functions, and structured problem solving.',
    tags: ['C++', 'Control Flow', 'Functions', 'Problem Solving'],
    icon: 'Terminal',
  },
  {
    id: 'frontend-development',
    step: '02',
    period: 'Jun 2022 — Aug 2023',
    title: 'Frontend Web Development',
    summary: 'Expanded into modern web development with HTML, CSS, and JavaScript. I focused on building responsive layouts, accessible markup, and interactive user interfaces.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive UI'],
    icon: 'Layout',
  },
  {
    id: 'education-and-training',
    step: '03',
    period: '2023 — Present',
    title: 'Higher Education & Professional Training',
    summary: 'Balanced academic coursework in information systems with intensive, hands-on full-stack engineering immersion.',
    subItems: [
      {
        type: 'University Degree',
        institution: 'Addis Ababa University (AAU)',
        period: '2023 — Present (2nd Year)',
        degree: 'B.Sc. in Information Science',
        note: 'Coursework in relational databases (SQL modeling), data structures, algorithms, and systems analysis.',
      },
      {
        type: 'Professional Bootcamp',
        institution: 'Evangadi Networks',
        period: '2024 — 2025 (Graduate)',
        degree: 'AI-Powered Full-Stack / MERN Program',
        note: '400+ hours covering React, Node.js, Express RESTful APIs, MySQL, JWT authentication, and Git teamwork.',
      },
    ],
    tags: ['AAU InfoSci', 'Evangadi Networks', 'MERN Stack', 'Relational Databases'],
    icon: 'GraduationCap',
  },
  {
    id: 'fullstack-applications',
    step: '04',
    period: '2024 — Present',
    title: 'Building Full-Stack Applications',
    summary: 'Progressed into end-to-end full-stack development, engineering complete web applications like the Evangadi Community Q&A Forum with semantic search and an AI chatbot with secure JWT auth, REST APIs, and MySQL persistence. I am continuously refining my craft and actively pursuing junior developer opportunities.',
    tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Junior Roles'],
    icon: 'Rocket',
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


