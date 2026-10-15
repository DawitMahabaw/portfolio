import type { AboutHighlight, LearningPathItem } from './types';

export const aboutHighlights: AboutHighlight[] = [
  { 
    id: 'fullstack', 
    title: 'Full-Stack Development', 
    description: 'Build complete web applications from responsive UI components to RESTful APIs and database schemas.', 
    icon: 'Layout' 
  },
  { 
    id: 'problem-solving', 
    title: 'Practical Problem Solving', 
    description: 'Translate user requirements, UI flows, and complex business logic into clean, robust software solutions.', 
    icon: 'Cpu' 
  },
  { 
    id: 'clean-code', 
    title: 'Clean & Scalable Code', 
    description: 'Modular React component hierarchies, structured Express route middleware, and atomic Git commit discipline.', 
    icon: 'ShieldCheck' 
  },
  { 
    id: 'continuous-learning', 
    title: 'Continuous Growth', 
    description: 'Fast learner applying AI-augmented tooling, staying current with modern web standards, and mastering best practices.', 
    icon: 'CheckCircle' 
  },
];

export const learningPath: LearningPathItem[] = [
  {
    id: 'aau',
    year: '2023 — Present',
    period: 'Second-Year Undergraduate',
    title: 'B.Sc. in Information Science',
    institution: 'Addis Ababa University (AAU)',
    role: 'Undergraduate Student',
    location: 'Addis Ababa, Ethiopia',
    type: 'education',
    badge: 'University Degree',
    description: 'Rigorous academic foundations in software systems, information architecture, relational database normalization, data structures, and human-computer interaction.',
    highlights: [
      'Database Systems & Relational SQL Modeling (3NF normalization)',
      'Data Structures & Algorithms in practical problem solving',
      'Systems Analysis, Design, and Information Architecture',
      'Web Technologies & Human-Computer Interface Principles',
    ],
    technologies: ['SQL', 'Relational DBs', 'Systems Analysis', 'Information Architecture', 'Data Structures'],
  },
  {
    id: 'evangadi',
    year: '2024 — 2025',
    period: '400+ Hours Intensive Immersion',
    title: 'AI-Powered Full-Stack Application Development',
    institution: 'Evangadi Networks',
    role: 'Full-Stack Engineering Trainee & Graduate',
    location: 'Remote / Global',
    type: 'bootcamp',
    badge: 'Certified Bootcamp',
    description: 'Comprehensive industry-aligned bootcamp covering modern MERN architecture, token-based authentication, modular REST endpoints, Git branching, and capstone project defense.',
    highlights: [
      'Mastered React hooks, Context API, responsive component design, and Axios',
      'Engineered Express.js REST APIs with JWT auth and Bcrypt hashing',
      'Designed dual-database schemas with MongoDB (Mongoose) and MySQL',
      'Built and defended collaborative full-stack capstone projects',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JWT', 'Git'],
    credentialUrl: '',
  },
  {
    id: 'practical-production',
    year: '2024 — Present',
    period: 'Production Builds & Engineering Practice',
    title: 'Full-Stack Web Engineering & Capstone Builds',
    institution: 'Independent Software Craftsmanship',
    role: 'Junior Full-Stack Developer',
    location: 'Addis Ababa, Ethiopia',
    type: 'production',
    badge: 'Practical Experience',
    description: 'Shipped 4 production-grade web applications with live deployments, robust RESTful APIs, relational/document database integration, and responsive mobile-first interfaces.',
    highlights: [
      'Built Evangadi Forum: full-stack Q&A platform with MySQL, JWT, and threaded replies',
      'Constructed Amazon Clone: e-commerce platform with Cart context and checkout flow',
      'Created TaskFlow Pro: Kanban board with optimistic UI updates and MongoDB persistence',
      'Developed Netflix Clone: dynamic streaming catalogue consuming the TMDB REST API',
    ],
    technologies: ['React 18', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs', 'Vercel'],
  },
];
