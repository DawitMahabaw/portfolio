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
    email: 'dawitmahabaw@gmail.com',
    github: 'https://github.com/dawitmahabaw',
    githubUsername: 'dawitmahabaw',
    linkedin: 'https://linkedin.com/in/dawit-mahabaw',
    linkedinUsername: 'dawit-mahabaw',
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
    { cmd: 'contact', output: 'Open to junior roles, internships, and contract builds. Email: dawitmahabaw@gmail.com' },
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

export const projectsData = [
  {
    id: 'evangadi-forum',
    title: 'Evangadi Community Q&A Forum',
    subtitle: 'Peer-to-Peer Developer Discussion & Knowledge Base',
    category: 'Full-Stack MERN / MySQL Application',
    tagline: 'A full-stack developer discussion forum for asking technical questions and sharing verified code answers.',
    shortDescription: 'Full-stack developer forum featuring token-based authentication, question feeds with category tags, and threaded answer posting.',
    description: 'A complete full-stack Q&A web platform where developers and bootcamp students ask technical questions, vote on verified code answers, and collaborate across technical topics.',
    overview: 'Students in fast-paced software training frequently encounter bugs and need an organized platform to search past discussions, submit new technical questions, and receive threaded peer answers with code formatting.',
    problem: 'Bootcamp students needed a fast, structured forum to get peer answers to programming blockers without losing conversation threads in chat apps.',
    solution: 'Built an end-to-end full-stack web application featuring token authentication, secure password hashing, categorical question feeds, and real-time reply threads.',
    image: '/images/forum.jpg',
    imageAlt: 'Evangadi Community Q&A Forum Interface',
    screenshots: ['/images/forum.jpg'],
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'REST API'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'expressjs' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'Git', icon: 'github' },
    ],
    featured: true,
    liveUrl: 'https://evangadi-forum-demo.vercel.app',
    liveDemoUrl: 'https://evangadi-forum-demo.vercel.app',
    githubUrl: 'https://github.com/dawitmahabaw/evangadi-forum',
    summary: 'A full-stack Q&A community platform with JWT authentication, relational question-and-answer data architecture, and responsive React UI.',
    keyFeatures: [
      'User registration and login secured with Bcrypt password hashing and JWT authorization.',
      'Interactive question feed with search, category filtering, and author attribution.',
      'Threaded answer section allowing users to contribute solutions and follow discussions.',
      'Responsive interface ensuring smooth usage on mobile, tablet, and desktop.',
    ],
    architecture: [
      { layer: 'Frontend', tech: 'React 18 & Axios', icon: 'react' },
      { layer: 'API Layer', tech: 'Express REST Endpoints', icon: 'expressjs' },
      { layer: 'Security', tech: 'JWT & Bcrypt Middleware', icon: 'api' },
      { layer: 'Database', tech: 'Relational MySQL', icon: 'mysql' },
    ],
    challenges: [
      {
        challenge: 'Managing token expiration gracefully during long question drafting so users never lose entered content.',
        solution: 'Implemented client-side session checking with token persistence in local storage and pre-flight validation before draft submit.',
      },
      {
        challenge: 'Maintaining relational data integrity between users, questions, and cascading answer deletions.',
        solution: 'Structured foreign key constraints with ON DELETE CASCADE in MySQL schemas to guarantee database consistency.',
      },
    ],
    caseStudy: {
      overview: 'Students in fast-paced software training frequently encounter bugs and need an organized platform to search past discussions, submit new technical questions, and receive threaded peer answers.',
      userNeeds: [
        'Secure user registration and authentication.',
        'Post questions with descriptive titles, categories, and code blocks.',
        'View threaded answers contributed by fellow developers.',
        'Clean, accessible design that works on mobile devices.',
      ],
      solution: 'Constructed a full-stack system with a modular React frontend communicating through Express REST routes to a relational database.',
      technicalDecisions: [
        'Utilized MySQL for relational consistency between users, questions, and replies.',
        'JWT tokens stored securely on client sessions with custom auth middleware on Express routes.',
        'Component-based architecture allowing reusable card and feed layouts.',
      ],
      challenges: [
        'Challenge: Managing token expiration gracefully during long question drafting.\nSolution: Implemented client-side session checking with draft preservation.',
      ],
      lessonsLearned: [
        'Relational integrity via foreign keys prevents orphaned answer records.',
        'Auth middleware in Express cleanly separates business logic from route security.',
      ],
      apiEndpoints: [
        { method: 'POST', path: '/api/users/register', desc: 'Register a new developer account' },
        { method: 'POST', path: '/api/users/login', desc: 'Authenticate and receive JSON Web Token' },
        { method: 'GET', path: '/api/questions', desc: 'Fetch question list with pagination' },
        { method: 'POST', path: '/api/answers', desc: 'Submit a new answer to a specific question' },
      ],
    },
  },
  {
    id: 'amazon-clone',
    title: 'Amazon-Inspired E-Commerce Platform',
    subtitle: 'End-to-End Online Shopping & Cart Experience',
    category: 'Full-Stack E-Commerce Web App',
    tagline: 'An end-to-end online store featuring dynamic product browsing, persistent cart drawer, and checkout review.',
    shortDescription: 'Modular e-commerce interface with dynamic product catalog, category filters, real-time cart drawer, and subtotal calculation.',
    description: 'A modular e-commerce store with product catalog browsing, category filtering, persistent shopping cart state, and order summary calculation.',
    overview: 'Online shoppers expect instant cart reactivity, persistent item selection, and responsive layouts across handheld and desktop screens.',
    problem: 'Shoppers needed an intuitive retail shopping experience where product selections remain intact across navigation and browser reloads.',
    solution: 'Engineered a modern web store utilizing React Context API and useReducer for predictable cart state transitions, synchronized with browser storage.',
    image: '/images/ecommerce.jpg',
    imageAlt: 'Amazon Clone E-Commerce Platform Interface',
    screenshots: ['/images/ecommerce.jpg'],
    tags: ['React', 'JavaScript', 'Context API', 'CSS3', 'REST API'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'Git', icon: 'github' },
    ],
    featured: true,
    liveUrl: 'https://amazon-clone-store.vercel.app',
    liveDemoUrl: 'https://amazon-clone-store.vercel.app',
    githubUrl: 'https://github.com/dawitmahabaw/amazon-clone',
    summary: 'A clean, responsive e-commerce web application featuring dynamic catalog browsing, multi-category filtering, persistent shopping cart drawer, and order calculation.',
    keyFeatures: [
      'Interactive product catalog with category filter chips and instant search.',
      'Slide-over shopping cart drawer with quantity adjustments and real-time subtotal.',
      'Persistent cart state stored in browser storage across page refreshes.',
      'Responsive checkout review screen with order summary and shipping details.',
    ],
    architecture: [
      { layer: 'UI Layer', tech: 'React 18 & CSS Modules', icon: 'react' },
      { layer: 'State Engine', tech: 'Context API + useReducer', icon: 'react' },
      { layer: 'Persistence', tech: 'Local Storage Sync', icon: 'api' },
      { layer: 'Tooling', tech: 'Vite & Git Workflow', icon: 'github' },
    ],
    challenges: [
      {
        challenge: 'Synchronizing cart state across component trees without repetitive prop drilling.',
        solution: 'Implemented React Context API with useReducer to provide a centralized dispatch system (ADD_TO_CART, REMOVE, UPDATE_QTY).',
      },
      {
        challenge: 'Preventing state desynchronization between browser storage and in-memory cart.',
        solution: 'Built custom synchronization hook with defensive parsing and error boundaries.',
      },
    ],
    caseStudy: {
      overview: 'Users needed a streamlined retail shopping experience where product selections remain intact across browsing and checkout steps.',
      userNeeds: [
        'Browse catalog by category with responsive grid layouts.',
        'Add/remove items from cart with real-time subtotal and tax calculation.',
        'Cart state preservation when navigating between product pages or refreshing.',
      ],
      solution: 'Developed an e-commerce platform using React Context API for global cart state paired with structured component boundaries.',
      technicalDecisions: [
        'Context API with useReducer for clean action dispatching.',
        'Local storage synchronization with cart state for instant offline persistence.',
      ],
      challenges: [
        'Challenge: Synchronizing cart quantities with server-side stock availability.\nSolution: Added pre-checkout validation logic.',
      ],
      lessonsLearned: [
        'Atomic component architecture makes layout adaptations effortless.',
      ],
      apiEndpoints: [
        { method: 'GET', path: '/api/products', desc: 'Fetch catalog with category filters' },
        { method: 'GET', path: '/api/products/:id', desc: 'Fetch single product detail' },
        { method: 'POST', path: '/api/orders', desc: 'Create simulated order review document' },
      ],
    },
  },
  {
    id: 'netflix-clone',
    title: 'Netflix-Inspired Media Catalog',
    subtitle: 'Cinematic Media Discovery & Preview App',
    category: 'API-Driven Media Application',
    tagline: 'A cinematic media browsing web app exploring external REST API consumption, movie trailers, and responsive media rows.',
    shortDescription: 'Cinematic web app with dynamic hero billboard, genre rows (Trending, Top Rated, Action), and interactive YouTube trailer playback.',
    description: 'A dynamic streaming catalog application powered by the TMDB REST API, featuring billboard hero banners, horizontal genre carousels, and trailer playback.',
    overview: 'Media enthusiasts need a fluid, visually rich interface to explore trending films, view ratings, and watch preview trailers without lag.',
    problem: 'Displaying high-resolution media carousels smoothly across mobile and desktop without layout shifts or slow image decoding.',
    solution: 'Constructed an asynchronous React interface with optimized image loading, TMDB REST API integration, and modular movie trailer overlays.',
    image: '/images/streaming.jpg',
    imageAlt: 'Netflix Clone Media Catalog Interface',
    screenshots: ['/images/streaming.jpg'],
    tags: ['React', 'TMDB API', 'Axios', 'CSS3', 'REST API'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'Git', icon: 'github' },
    ],
    featured: false,
    liveUrl: 'https://netflix-clone-media.vercel.app',
    liveDemoUrl: 'https://netflix-clone-media.vercel.app',
    githubUrl: 'https://github.com/dawitmahabaw/netflix-clone',
    summary: 'A cinematic web app with dynamic hero banner selection, genre rows (Trending, Top Rated, Action), and interactive trailer playback.',
    keyFeatures: [
      'Dynamic hero billboard showcasing featured movies with random rotation on load.',
      'Horizontal scroll genre rows (Trending, Top Rated, Action, Comedy, Documentaries).',
      'Embedded trailer video modal fetching YouTube keys via movie trailer library.',
      'Optimized image loading with responsive srcset and fallback posters.',
    ],
    architecture: [
      { layer: 'Presentation', tech: 'React 18 & Flexbox/Grid', icon: 'react' },
      { layer: 'HTTP Client', tech: 'Axios Instance Config', icon: 'api' },
      { layer: 'Data Source', tech: 'TMDB REST API v3', icon: 'api' },
      { layer: 'Media Layer', tech: 'YouTube Video Embed', icon: 'html5' },
    ],
    challenges: [
      {
        challenge: 'Handling items with missing poster artwork or missing YouTube video trailer keys without crashing.',
        solution: 'Implemented fallback poster SVGs and graceful alert notifications when official trailers are unavailable.',
      },
      {
        challenge: 'Preventing UI stuttering when loading multiple horizontal image carousels simultaneously.',
        solution: 'Applied CSS contain-intrinsic-size and lazy loading to keep scrolling butter-smooth.',
      },
    ],
    caseStudy: {
      overview: 'Displaying responsive, horizontal-scroll media catalogues smoothly across mobile and desktop without layout jumping.',
      userNeeds: [
        'Browse trending films and popular categories effortlessly.',
        'View ratings, synopsis, and release dates.',
        'Watch preview trailers directly inside the application.',
      ],
      solution: 'Created an Axios client instance with TMDB base parameters to streamline modular endpoint calls and trailer modals.',
      technicalDecisions: [
        'Custom Axios client instance configured with environment API keys.',
        'CSS backdrop filters and gradient overlays for authentic cinematic aesthetic.',
      ],
      challenges: [
        'Challenge: Handling missing media assets gracefully.\nSolution: Defensive fallback renderers.',
      ],
      lessonsLearned: [
        'Clean error handling for third-party APIs is vital to user experience.',
      ],
      apiEndpoints: [
        { method: 'GET', path: '/trending/all/week', desc: 'Fetch weekly trending titles from TMDB' },
        { method: 'GET', path: '/movie/top_rated', desc: 'Retrieve top rated films' },
        { method: 'GET', path: '/discover/movie?with_genres=', desc: 'Filter titles by genre ID' },
      ],
    },
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro — Project Management App',
    subtitle: 'Collaborative Kanban & Workflow Management',
    category: 'Full-Stack MERN Application',
    tagline: 'A collaborative project and task management tool with drag-and-drop workflow.',
    shortDescription: 'Collaborative Kanban board application with project management, real-time status updates, and MongoDB persistence.',
    description: 'A complete project management system allowing teams to create projects, organize tasks in Kanban boards, track progress visually, and collaborate in real-time.',
    overview: 'Teams need a clear, intuitive way to organize work, track progress through milestones, and collaborate without bloated enterprise software.',
    problem: 'Managing project tasks across multiple members often suffers from confusing UI and lost updates.',
    solution: 'Engineered a full-stack MERN application with modular React components, an Express REST backend with JWT authentication, and MongoDB document collections.',
    image: '/images/project-taskflow.jpg',
    imageAlt: 'TaskFlow Pro Application Interface',
    screenshots: ['/images/project-taskflow.jpg'],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'expressjs' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Mongoose', icon: 'mongoose' },
      { name: 'REST APIs', icon: 'api' },
    ],
    featured: true,
    liveUrl: 'https://taskflow-demo.vercel.app',
    liveDemoUrl: 'https://taskflow-demo.vercel.app',
    githubUrl: 'https://github.com/dawitmahabaw/taskflow-pro',
    summary: 'A complete project management system allowing teams to create projects, organize tasks in Kanban boards, track progress visually, and collaborate in real-time.',
    keyFeatures: [
      'Visual Kanban workflow columns (To Do, In Progress, In Review, Done).',
      'Secure user authentication with JWT protecting workspace endpoints.',
      'Task filtering by priority level, due date, and assigned team member.',
      'Responsive drawer for task editing, description markdown, and activity logging.',
    ],
    architecture: [
      { layer: 'UI Presentation', tech: 'React 18 & Hooks', icon: 'react' },
      { layer: 'REST API', tech: 'Express Controllers', icon: 'expressjs' },
      { layer: 'Runtime', tech: 'Node.js Engine', icon: 'nodejs' },
      { layer: 'Database', tech: 'MongoDB & Mongoose', icon: 'mongodb' },
    ],
    challenges: [
      {
        challenge: 'Managing smooth optimistic UI updates when moving cards across columns.',
        solution: 'Implemented immediate local state transition followed by asynchronous API patch, rolling back on failure.',
      },
      {
        challenge: 'Preventing unauthorized task editing between users.',
        solution: 'Crafted custom ownership verification middleware in Express checking user IDs against board member arrays.',
      },
    ],
    caseStudy: {
      overview: 'Teams need a clear, intuitive way to organize work, track progress through milestones, and collaborate without bloated enterprise software.',
      userNeeds: [
        'Organize tasks into categorized boards (To Do, In Progress, Done).',
        'Visual card status updates.',
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
      ],
      lessonsLearned: [
        'Clean separation between controller logic and database calls significantly simplifies debugging.',
        'Validating schemas on both frontend and backend prevents data corruption.',
      ],
      apiEndpoints: [
        { method: 'GET', path: '/api/boards', desc: 'Retrieve all boards for authenticated user' },
        { method: 'POST', path: '/api/boards/:id/tasks', desc: 'Create new task card in designated column' },
        { method: 'PUT', path: '/api/tasks/:id/status', desc: 'Update task progress state or column position' },
        { method: 'DELETE', path: '/api/tasks/:id', desc: 'Remove task with authorization check' },
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
