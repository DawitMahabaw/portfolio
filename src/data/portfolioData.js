// Portfolio Single Source of Truth
// Fully populated with Dawit Mahabaw's verified background, projects, architecture, and credentials

export const personalData = {
  name: 'Dawit Mahabaw',
  firstName: 'Dawit',
  lastName: 'Mahabaw',
  title: 'Junior MERN Stack Developer',
  roleSubhead: 'React · Node.js · Express.js · MongoDB · MySQL',
  status: 'Open to work',
  heroStatusPill: 'Available for Junior Developer Roles & Internships',
  bio: 'Second-year Information Science student at Addis Ababa University and fresh MERN Stack graduate from Evangadi Tech (AI-Powered Full-Stack Application Development). I engineer responsive React user interfaces, modular Express REST APIs, and scalable MongoDB/MySQL schemas with clean code and practical problem-solving.',
  aboutIntro: 'I focus on building practical, full-stack web applications from clean UI components to robust server endpoints and database models. My training at Evangadi grounded me in modern full-stack workflows, Git collaboration, and AI-powered development, while my Information Science studies at AAU provide deep foundations in data modeling and systems architecture.',
  heroImage: '/images/hero-portrait.jpg',
  heroOriginalImage: '/images/dawit-original.jpg',
  heroImageAlt: 'Portrait of Dawit Mahabaw',
  aboutImage: '/images/about-workspace.jpg',
  aboutImageAlt: 'Developer workspace with code editor and modern multi-monitor setup',
  resumeUrl: '/assets/developer-CV.pdf',
  resumeFileName: 'Dawit-Mahabaw-Resume.pdf',
  socials: {
    email: 'dawitmahabaw03@gmail.com',
    github: 'https://github.com/DawitMahabaw',
    githubUsername: 'DawitMahabaw',
    linkedin: 'https://www.linkedin.com/in/dawit-mahabaw-b7035a361?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    linkedinUsername: 'dawit-mahabaw-b7035a361',
    telegram: 'https://t.me/dawitmahabaw',
  },
};

export const terminalData = {
  user: 'dawit',
  host: 'dev-lab',
  path: '~',
  commands: [
    { cmd: 'whoami', output: 'dawit — junior MERN developer & AAU Information Science student' },
    { cmd: 'stack', output: 'React, Node.js, Express.js, MongoDB, MySQL, JavaScript (ES6+), REST APIs' },
    { cmd: 'projects', output: '4 featured web applications: Evangadi Forum, Amazon Clone, Netflix Clone, TaskFlow Pro' },
    { cmd: 'education', output: 'Addis Ababa University (B.Sc. Info Science) + Evangadi (AI Full-Stack)' },
    { cmd: 'contact', output: 'Open to junior roles, internships, and contract builds. Email: dawitmahabaw03@gmail.com' },
  ],
};

export const professionalSummaryData = {
  tag: '01 // PROFESSIONAL SUMMARY',
  title: 'Engineering Full-Stack Web Solutions with Rigor & Passion',
  bio: 'Bridging university-level information architecture with production-ready MERN bootcamp engineering. I design modular frontends that react instantly to user actions and construct backend APIs that handle validation, security, and persistence reliably.',
  stackPills: [
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'expressjs' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'REST APIs', icon: 'api' },
  ],
  capabilities: [
    { name: 'Component Architecture', icon: 'Layers' },
    { name: 'RESTful API Design', icon: 'api' },
    { name: 'Git Teamwork & Commits', icon: 'github' },
    { name: 'Database Normalization', icon: 'terminal' },
  ],
  keySkillsTitle: 'Core Capabilities & Tooling',
  keySkillsChecklist: [
    'Component-Driven Development with React Hooks & Context API',
    'RESTful API Engineering with Express.js & Node.js',
    'JWT Authentication & Password Encryption (Bcrypt)',
    'Schema Modeling in MongoDB (Mongoose) & Relational MySQL',
    'Version Control with Conventional Git Commits & Branching',
    'Modern AI-Augmented Developer Tooling & Rapid Prototyping',
  ],
};

export const whyWorkWithMeData = {
  title: 'Why Work With Dawit?',
  description: 'A dedicated junior engineer combining theoretical foundations from Addis Ababa University with 400+ hours of practical bootcamp training from Evangadi. Committed to write clean, maintainable code, learn rapidly, and ship reliable features.',
  badges: [
    { name: 'React 18', icon: 'react' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'expressjs' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'REST APIs', icon: 'api' },
    { name: 'Clean Architecture', icon: 'Layers' },
    { name: 'Git Workflow', icon: 'github' },
    { name: 'Fast Learner', icon: 'Code' },
  ],
};

export const aboutHighlights = [
  { 
    id: 'fullstack', 
    title: 'Full-Stack Development', 
    description: 'Build complete web applications from responsive UI to database modeling.', 
    icon: 'Layout' 
  },
  { 
    id: 'problem-solving', 
    title: 'Practical Problem Solving', 
    description: 'Transform user requirements and complex logic into working software solutions.', 
    icon: 'Cpu' 
  },
  { 
    id: 'clean-code', 
    title: 'Clean & Scalable Code', 
    description: 'Modular React components, structured Express route layers, and consistent Git commits.', 
    icon: 'ShieldCheck' 
  },
  { 
    id: 'continuous-learning', 
    title: 'Continuous Growth', 
    description: 'Stay curious, adopt modern tools, and continuously refine software craftsmanship.', 
    icon: 'CheckCircle' 
  },
];

export const skillCategories = [
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

export const architectureData = {
  tag: '05 // TECHNICAL ARCHITECTURE',
  title: 'How My Applications Work',
  subtitle: 'A clean, decoupled MERN architecture ensuring scalable data flow and maintainability.',
  flow: [
    {
      step: '01',
      title: 'Browser / UI',
      tech: 'React 18',
      role: 'Frontend Presentation',
      description: 'Component-driven interface, responsive layouts, local and global state management, asynchronous Axios HTTP requests.',
      color: '#06b6d4',
    },
    {
      step: '02',
      title: 'REST API',
      tech: 'HTTP / JSON',
      role: 'Secure Communication',
      description: 'Standardized JSON request/response payloads, Bearer JWT authorization headers, status codes, and input sanitization.',
      color: '#38bdf8',
    },
    {
      step: '03',
      title: 'Server & Logic',
      tech: 'Express.js & Node.js',
      role: 'Backend Controller & Middleware',
      description: 'Modular routing, authentication middleware, business logic processing, error handling, and environment configuration.',
      color: '#10b981',
    },
    {
      step: '04',
      title: 'Database Engine',
      tech: 'MongoDB / MySQL',
      role: 'Data Persistence & Modeling',
      description: 'Structured Mongoose schemas, relational table foreign keys, indexing, data validation, and resilient CRUD operations.',
      color: '#6366f1',
    },
  ],
  requestLifecycle: [
    '1. User interacts with responsive React component and triggers an action.',
    '2. Asynchronous HTTP request is dispatched with JSON payload & JWT headers.',
    '3. Express route middleware authenticates JWT token and sanitizes incoming body.',
    '4. Controller processes business rules and communicates with MongoDB / MySQL.',
    '5. Database returns sanitized records; Express returns HTTP 200/201 JSON.',
    '6. React updates UI state seamlessly with zero full-page reload.',
  ],
};

export const fullStackApproachData = {
  tag: '05 // TECHNICAL ARCHITECTURE',
  title: 'Full-Stack Engineering Pipeline',
  subtitle: 'How requests flow through my applications from UI presentation to database persistence.',
  pipeline: [
    { id: 'plan', layer: '01', tech: 'Browser / UI', description: 'React 18 components, responsive layouts, client state, and asynchronous Axios requests.', icon: 'clipboard', color: '#06b6d4' },
    { id: 'api', layer: '02', tech: 'REST API', description: 'Secure JSON communication, input validation, and JWT authorization headers.', icon: 'code', color: '#38bdf8' },
    { id: 'build', layer: '03', tech: 'Express & Node', description: 'Modular routing controllers, auth middleware, business logic, and error handlers.', icon: 'code', color: '#10b981' },
    { id: 'review', layer: '04', tech: 'MongoDB / MySQL', description: 'Structured schema modeling, document persistence, and resilient CRUD operations.', icon: 'check', color: '#6366f1' },
  ],
};

export { projectsData } from './projects';

export const educationData = [
  {
    id: 'aau',
    institution: 'Addis Ababa University (AAU)',
    degree: 'B.Sc. in Information Science',
    period: '2023 — Present (Second Year Undergrad)',
    location: 'Addis Ababa, Ethiopia',
    description: 'Undergraduate degree program focusing on software engineering principles, information architecture, relational databases, data structures, and human-computer interaction.',
    coursework: [
      'Database Systems & SQL Modeling',
      'Data Structures & Algorithms',
      'Systems Analysis & Design',
      'Web Technologies & Programming',
      'Information Storage & Retrieval',
    ],
  },
  {
    id: 'evangadi',
    institution: 'Evangadi Networks',
    degree: 'AI-Powered Full-Stack Application Development',
    period: '2024 — 2025 (Intensive Bootcamp Graduate)',
    location: 'Remote / Global',
    description: 'Comprehensive 400+ hours full-stack software development program covering modern MERN architecture, AI-augmented developer workflows, Git teamwork, and real-world project defense.',
    coursework: [
      'React Components, Hooks & State Management',
      'Node.js & Express RESTful Server Architecture',
      'MongoDB & Mongoose Document Schemas',
      'MySQL Relational Databases & Schema Normalization',
      'JWT Authentication & Password Security',
      'Full-Stack Capstone Project Defense',
    ],
  },
];

export const experienceData = [
  {
    id: 'practical-dev',
    role: 'Junior Full-Stack Developer (MERN Projects)',
    organization: 'Independent Engineering & Practical Projects',
    period: '2024 — Present',
    location: 'Addis Ababa, Ethiopia',
    description: 'Designing, architecting, and building production-grade web applications from UI components down to database schemas.',
    responsibilities: [
      'Architected 4 complete web applications using React, Node.js, Express, and MongoDB/MySQL.',
      'Constructed RESTful API endpoints with structured validation, error handling, and JWT authentication.',
      'Implemented responsive, accessible user interfaces following modern design systems and WCAG standards.',
      'Maintained version control with descriptive Conventional Commits and modular git feature branches.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'Git'],
  },
  {
    id: 'evangadi-training',
    role: 'Full-Stack Developer Trainee',
    organization: 'Evangadi Tech Bootcamp',
    period: '2024 — 2025',
    location: 'Addis Ababa / Remote',
    description: 'Intensive immersion in full-stack web engineering, collaborative problem solving, code reviews, and API design.',
    responsibilities: [
      'Completed rigorous weekly coding assignments across React, Node.js, Express, and SQL/NoSQL databases.',
      'Participated in pair programming sessions, debugging challenges, and architectural code reviews.',
      'Built and defended full-stack team projects demonstrating secure authentication and database integration.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Postman', 'Git'],
  },
];

export const certificationsData = {
  enabled: true,
  title: 'Credentials & Verifications',
  subtitle: 'Verified training and professional competencies.',
  items: [
    {
      id: 'cert-evangadi',
      title: 'Full-Stack Application Development Certificate',
      issuer: 'Evangadi Networks',
      date: '2025',
      description: 'AI-Powered Full-Stack Web Development certification covering MERN stack architecture, RESTful API design, and modern web application deployment.',
      credentialUrl: '',
    },
  ],
};

export const contactData = {
  title: "Let's Build Something Great Together.",
  subtitle: "I'm actively looking for junior developer roles, frontend/full-stack internships, and collaborative opportunities. Feel free to reach out directly or send a message below.",
  email: personalData.socials.email,
  github: personalData.socials.github,
  linkedin: personalData.socials.linkedin,
  telegram: personalData.socials.telegram,
  location: 'Addis Ababa, Ethiopia',
  availability: 'Available for full-time, part-time, internship, and remote junior roles',
  endpointUrl: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
};

export const resumeDetails = {
  summary: 'Junior MERN Stack Developer grounded in Information Science at Addis Ababa University and trained in modern full-stack web engineering through Evangadi Networks. Practical experience building responsive React applications, modular Node.js/Express APIs, and structured MongoDB/MySQL schemas.',
  highlights: [
    'B.Sc. Information Science (2nd Year) — Addis Ababa University',
    'AI-Powered Full-Stack Development Graduate — Evangadi Networks',
    'MERN Stack Core: React, Node.js, Express.js, MongoDB, MySQL',
    '4 Production-Quality Web Applications with Live Demos and Case Studies',
  ],
};
