// Portfolio Single Source of Truth
// Fully populated with Dawit Mahabaw's verified background, projects, architecture, and credentials

export const personalData = {
  name: 'Dawit Mahabaw',
  firstName: 'Dawit',
  lastName: 'Mahabaw',
  title: 'Junior MERN Stack Developer',
  roleSubhead: 'React · Node.js · Express.js · MongoDB',
  status: 'Open to work',
  heroStatusPill: 'Available for Junior Developer Roles & Internships',
  bio: 'Second-year Information Science student at Addis Ababa University and fresh MERN Stack graduate from Evangadi Tech (AI-Powered Full-Stack Application Development). I engineer responsive React user interfaces, modular Express REST APIs, and scalable MongoDB schemas with clean code and practical problem-solving.',
  aboutIntro: 'I focus on building practical, full-stack web applications from clean UI components to robust server endpoints and database models. My training at Evangadi grounded me in modern full-stack workflows, Git collaboration, and AI-powered development, while my Information Science studies at AAU provide deep foundations in data modeling and systems architecture.',
  heroImage: '/images/hero-portrait.jpg',
  heroImageAlt: 'Portrait of Dawit Mahabaw',
  aboutImage: '/images/about-workspace.jpg',
  aboutImageAlt: 'Developer workspace with dual displays and code editor',
  resumeUrl: '/assets/developer-CV.pdf',
  resumeFileName: 'Dawit-Mahabaw-Resume.pdf',
  socials: {
    email: 'dawitmahabaw@gmail.com',
    github: 'https://github.com/dawitmahabaw',
    linkedin: 'https://linkedin.com/in/dawit-mahabaw',
    telegram: 'https://t.me/dawitmahabaw',
  },
};

export const terminalData = {
  user: 'dawit',
  host: 'dev-lab',
  path: '~',
  commands: [
    { cmd: 'whoami', output: 'dawit — junior MERN developer & AAU Information Science student' },
    { cmd: 'stack', output: 'React, Node.js, Express.js, MongoDB, JavaScript (ES6+), REST APIs' },
    { cmd: 'projects', output: '4 featured web applications: TaskFlow Pro, ShopEase, NoteNest, Weatherly' },
    { cmd: 'education', output: 'Addis Ababa University (B.Sc. Info Science) + Evangadi (AI Full-Stack)' },
    { cmd: 'contact', output: 'Open to junior roles, internships, and contract builds. Email: dawitmahabaw@gmail.com' },
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
      { name: 'Schema Design', icon: 'mongodb', level: 'Comfortable' },
      { name: 'Data Validation', icon: 'mongoose', level: 'Comfortable' },
      { name: 'Relational & SQL Basics', icon: 'api', level: 'Foundation' },
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
      tech: 'MongoDB & Mongoose',
      role: 'Data Persistence & Modeling',
      description: 'Structured Mongoose schemas, document relationships, indexing, data validation, and resilient CRUD operations.',
      color: '#6366f1',
    },
  ],
  requestLifecycle: [
    '1. User interacts with responsive React component and triggers an action.',
    '2. Asynchronous HTTP request is dispatched with JSON payload & JWT headers.',
    '4. Controller processes business rules and communicates with MongoDB via Mongoose.',
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
    { id: 'review', layer: '04', tech: 'MongoDB / Mongoose', description: 'Structured schema modeling, document persistence, and resilient CRUD operations.', icon: 'check', color: '#6366f1' },
  ],
};

export const projectsData = [
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro — Project Management App',
    category: 'Full-Stack MERN Application',
    tagline: 'A collaborative project and task management tool with drag-and-drop workflow.',
    image: '/images/project-taskflow.jpg',
    screenshots: ['/images/project-taskflow.jpg'],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT'],
    featured: true,
    liveUrl: 'https://taskflow-demo.vercel.app',
    githubUrl: 'https://github.com/dawitmahabaw/taskflow-pro',
    summary: 'A complete project management system allowing teams to create projects, organize tasks in Kanban boards, track progress visually, and collaborate in real-time.',
    caseStudy: {
      overview: 'Teams need a clear, intuitive way to organize work, track progress through milestones, and collaborate without bloated enterprise software.',
      userNeeds: [
        'Organize tasks into categorized boards (To Do, In Progress, Done).',
        'Visual drag-and-drop card status updates.',
        'Fast, responsive interface that works equally well on mobile and desktop.',
        'Secure user authentication ensuring members only access their authorized boards.',
      ],
      solution: 'Built a full-stack MERN application with a modular React frontend, an Express REST API backend with JWT authentication, and MongoDB document storage with referenced task collections.',
      technicalDecisions: [
        'React frontend with custom hooks for predictable state updates across board columns.',
        'Node.js & Express REST API with modular controllers, services, and route middleware.',
        'MongoDB schema design with indexed references for quick board task queries.',
        'JWT tokens stored securely with authorization headers protecting all mutating endpoints.',
      ],
      challenges: [
        'Challenge: Managing smooth optimistic UI updates when moving cards across columns.\nSolution: Implemented immediate local state transition followed by asynchronous API patch, rolling back on failure.',
        'Challenge: Preventing unauthorized task editing.\nSolution: Crafted custom ownership verification middleware in Express checking user IDs against board member arrays.',
      ],
      lessonsLearned: [
        'Clean separation between controller logic and database calls significantly simplifies debugging.',
        'Validating schemas on both frontend and backend prevents data corruption.',
        'Consistent Conventional Git commits make tracking feature regressions straightforward.',
      ],
      apiEndpoints: [
        { method: 'GET', path: '/api/boards', desc: 'Retrieve all boards for authenticated user' },
        { method: 'POST', path: '/api/boards/:id/tasks', desc: 'Create new task card in designated column' },
        { method: 'PUT', path: '/api/tasks/:id/status', desc: 'Update task progress state or column position' },
        { method: 'DELETE', path: '/api/tasks/:id', desc: 'Remove task with authorization check' },
      ],
    },
  },
  {
    id: 'shopease-ecommerce',
    title: 'ShopEase — Modern E-Commerce Platform',
    category: 'Full-Stack MERN Store',
    tagline: 'An end-to-end online store for browsing products, managing carts, and checking out.',
    image: '/images/project-shopease.jpg',
    screenshots: ['/images/project-shopease.jpg'],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Context API'],
    featured: true,
    liveUrl: 'https://shopease-store.vercel.app',
    githubUrl: 'https://github.com/dawitmahabaw/shopease-ecommerce',
    summary: 'A clean, responsive e-commerce web application featuring dynamic product catalog browsing, multi-category filtering, persistent shopping cart drawer, and order calculation.',
    caseStudy: {
      overview: 'Shoppers need an uncluttered, responsive store interface with instant search, category filtering, and reliable cart persistence across browser sessions.',
      userNeeds: [
        'Browse catalog by category with responsive grid layouts.',
        'Add/remove items from cart with real-time subtotal and tax calculation.',
        'Cart state preservation when navigating between product pages or refreshing.',
        'Structured checkout summary with customer details validation.',
      ],
      solution: 'Developed an e-commerce platform using React Context API for global cart state, paired with Express REST API product endpoints and MongoDB product catalog storage.',
      technicalDecisions: [
        'Context API with useReducer for clean action dispatching (ADD_TO_CART, UPDATE_QTY, REMOVE).',
        'Local storage synchronization with cart state for instant offline persistence.',
        'Express route pagination ensuring snappy load times even as inventory expands.',
      ],
      challenges: [
        'Challenge: Synchronizing cart quantities with server-side stock availability.\nSolution: Added pre-checkout inventory validation step before rendering the final order confirmation.',
      ],
      lessonsLearned: [
        'Atomic component architecture (ProductCard, CartItem, PriceTag) makes theme updates effortless.',
        'Defensive coding for missing images or descriptions prevents layout breakdown.',
      ],
      apiEndpoints: [
        { method: 'GET', path: '/api/products', desc: 'Fetch catalog with category & price query filters' },
        { method: 'GET', path: '/api/products/:id', desc: 'Fetch single product detail' },
        { method: 'POST', path: '/api/orders', desc: 'Validate stock and create order document' },
      ],
    },
  },
  {
    id: 'notenest-app',
    title: 'NoteNest — Smart Notes & Organization App',
    category: 'Productivity Web App',
    tagline: 'A clean and fast note-taking application with live search, tags, and instant auto-save.',
    image: '/images/project-notenest.jpg',
    screenshots: ['/images/project-notenest.jpg'],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    featured: false,
    liveUrl: 'https://notenest-demo.vercel.app',
    githubUrl: 'https://github.com/dawitmahabaw/notenest-notes-app',
    summary: 'A distraction-free notes application built for students and developers to jot thoughts, tag notes by subject, search instantaneously, and keep ideas organized.',
    caseStudy: {
      overview: 'Students often take quick notes across classes and need a lightweight, fast web tool to store, tag, and search without complex markdown syntax hurdles.',
      userNeeds: [
        'Instant note creation and auto-saving drafts.',
        'Categorization via color-coded tags and folders.',
        'High-speed client-side search filtering by title and content.',
      ],
      solution: 'Built a responsive React interface connected to a lightweight Express backend with MongoDB document storage.',
      technicalDecisions: [
        'Debounced search input reducing API hits during rapid typing.',
        'Mongoose text index on note title and body for fast server search.',
      ],
      challenges: [
        'Challenge: Auto-saving without overwhelming the backend with requests on every keystroke.\nSolution: Implemented a 600ms debounce timer that commits drafts cleanly when the user pauses.',
      ],
      lessonsLearned: [
        'Debouncing is critical for snappy input responsiveness and server efficiency.',
      ],
      apiEndpoints: [
        { method: 'GET', path: '/api/notes', desc: 'List notes with optional search & tag query' },
        { method: 'POST', path: '/api/notes', desc: 'Create new note document' },
        { method: 'PUT', path: '/api/notes/:id', desc: 'Update note title, body, or tags' },
        { method: 'DELETE', path: '/api/notes/:id', desc: 'Delete note document' },
      ],
    },
  },
  {
    id: 'weatherly-app',
    title: 'Weatherly — Real-Time Weather Application',
    category: 'API-Driven Web App',
    tagline: 'Real-time weather data with location search, 5-day forecasts, and atmospheric metrics.',
    image: '/images/project-weather.jpg',
    screenshots: ['/images/project-weather.jpg'],
    technologies: ['React', 'Node.js', 'OpenWeather API', 'Geolocation', 'CSS3'],
    featured: false,
    liveUrl: 'https://weatherly-forecast.vercel.app',
    githubUrl: 'https://github.com/dawitmahabaw/weatherly-app',
    summary: 'An elegant weather forecast dashboard utilizing OpenWeather REST API to display current conditions, temperature graphs, hourly forecasts, and air metrics for any city.',
    caseStudy: {
      overview: 'Users need quick access to reliable weather metrics with zero visual clutter and automatic local weather detection.',
      userNeeds: [
        'Detect local coordinates via browser geolocation with user permission.',
        'Search weather for any city worldwide with instant autocompletion.',
        'Display humidity, wind speed, pressure, UV index, and 5-day forecast.',
      ],
      solution: 'Designed an ambient weather app with dynamic gradient backgrounds reflecting current weather conditions and asynchronous API fetching.',
      technicalDecisions: [
        'Proxy endpoint in Express to protect API secret keys from being exposed in client bundles.',
        'Client-side caching in sessionStorage to avoid duplicate API calls for recently viewed cities.',
      ],
      challenges: [
        'Challenge: Handling rate limits and network latency from third-party APIs.\nSolution: Implemented robust fallback states, skeleton loaders, and intuitive error messages.',
      ],
      lessonsLearned: [
        'Always protect third-party API keys through backend proxy routes.',
        'Skeleton states make perceived loading times significantly faster.',
      ],
      apiEndpoints: [
        { method: 'GET', path: '/api/weather/current?city=', desc: 'Get sanitized weather data for city' },
        { method: 'GET', path: '/api/weather/forecast?lat=&lon=', desc: 'Get 5-day forecast coordinates' },
      ],
    },
  },
];

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
      'Architected 4 complete web applications using React, Node.js, Express, and MongoDB.',
      'Constructed RESTful API endpoints with structured validation, error handling, and JWT authentication.',
      'Implemented responsive, accessible user interfaces following modern design systems and WCAG standards.',
      'Maintained version control with descriptive Conventional Commits and modular git feature branches.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'Git'],
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
  summary: 'Junior MERN Stack Developer grounded in Information Science at Addis Ababa University and trained in modern full-stack web engineering through Evangadi Networks. Practical experience building responsive React applications, modular Node.js/Express APIs, and structured MongoDB schemas.',
  highlights: [
    'B.Sc. Information Science (2nd Year) — Addis Ababa University',
    'AI-Powered Full-Stack Development Graduate — Evangadi Networks',
    'MERN Stack Core: React, Node.js, Express.js, MongoDB',
    '4 Production-Quality Web Applications with Live Demos and Case Studies',
  ],
};
