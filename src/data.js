/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH: PORTFOLIO DATA
 * Edit this file to update all content on the portfolio without touching markup.
 * Every missing field has a visible "TODO:" comment clearly marked.
 * ============================================================================
 */

export const portfolioData = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION (MY REAL DATA)
  // --------------------------------------------------------------------------
  personal: {
    // TODO: Replace with your actual full name (e.g., "Abebe Bekele")
    fullName: "TODO: [YOUR FULL NAME]",
    
    // Official headline & professional target title
    title: "Junior Full-Stack Developer (MERN)",
    roleOneLiner: "Junior Full-Stack Developer (React, Node.js, MySQL)",
    
    // TODO: Update your location and remote availability preferences
    location: "Addis Ababa, Ethiopia",
    availability: "Open to junior roles and internships — Addis Ababa, Ethiopia / Remote (TODO: [open to remote? yes/no])",
    
    // Plain, humble, human-centered summary (max 90 words, no jargon)
    bio: "I am a junior full-stack developer grounded in Information Science at Addis Ababa University and trained in modern full-stack web engineering through Evangadi Networks. I build clean, component-driven React interfaces and reliable Node.js/Express REST APIs backed by structured MySQL databases. I enjoy understanding how data moves from database schemas to responsive user interfaces.",
    
    // 3 short bullets for quick recruiter scanning
    highlights: [
      "Education: 2nd-year B.Sc. in Information Science at Addis Ababa University (AAU)",
      "Bootcamp: Full-Stack Application Development graduate from Evangadi Networks",
      "Goal: Seeking junior full-stack engineering roles, frontend developer positions, or internships"
    ],

    // TODO: Replace with your real contact endpoints
    email: "TODO: [REAL EMAIL]", // e.g. "yourname@gmail.com"
    github: "TODO: [REAL URL]", // e.g. "https://github.com/yourusername"
    linkedin: "TODO: [REAL URL]", // e.g. "https://linkedin.com/in/yourusername"
    
    // Path to your real CV in public/assets/
    // TODO: Place your PDF file into public/assets/[name]-CV.pdf and update the filename below
    cvPath: "/assets/developer-CV.pdf",

    // Optional Formspree endpoint (e.g. "https://formspree.io/f/myformid")
    // If empty, the contact section will provide direct email copy and mailto action
    // TODO: Insert your Formspree endpoint or keep empty for direct email
    formEndpoint: "TODO: [ENDPOINT]"
  },

  // --------------------------------------------------------------------------
  // 2. SKILLS (HONEST TIERS ONLY - NO FAKE PERCENTAGES)
  // --------------------------------------------------------------------------
  skills: [
    {
      category: "Frontend",
      comfortable: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"],
      used: ["Context API", "Axios", "Vite"],
      learning: ["TypeScript", "Next.js"]
    },
    {
      category: "Backend",
      comfortable: ["Node.js", "Express", "REST APIs", "CRUD Operations"],
      used: ["JWT (JSON Web Tokens)", "Bcrypt Password Hashing", "Middleware"],
      learning: ["Serverless Functions", "Microservices Concepts"]
    },
    {
      category: "Database",
      comfortable: ["MySQL", "Relational Schema Design", "SQL Queries"],
      used: ["Database Normalization (1NF–3NF)", "Table Joins & Foreign Keys"],
      // Note: As specified, MongoDB/Mongoose is placed under learning because you learned MySQL
      learning: ["MongoDB", "Mongoose"]
    },
    {
      category: "Tools & Workflow",
      comfortable: ["Git", "GitHub", "npm", "VS Code"],
      used: ["Postman (API Testing)", "Chrome DevTools", "Render / Vercel"],
      learning: ["Docker Fundamentals", "CI/CD Actions"]
    }
  ],

  // --------------------------------------------------------------------------
  // 3. PROJECTS (3-4 BEST PROJECTS ONLY - REAL ARCHITECTURE)
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "evangadi-forum",
      name: "Evangadi Community Q&A Forum",
      problem: "Peer-to-peer programming community where students ask technical questions and share verified code answers.",
      role: "Built full-stack user authentication, question/answer endpoints, relational MySQL integration, and responsive React UI.",
      tech: ["React", "Node.js", "Express", "MySQL", "JWT", "REST API", "Git"],
      screenshot: "/images/forum.jpg",
      // TODO: Provide your real deployed demo URL (or leave empty to hide button)
      liveUrl: "", // e.g. "https://your-forum-demo.vercel.app"
      // TODO: Provide your real GitHub repository URL (or leave empty to hide button)
      githubUrl: "", // e.g. "https://github.com/yourname/evangadi-forum"
      caseStudy: {
        problem: "Students in fast-paced software training frequently encounter bugs and need an organized platform to search past discussions, submit new technical questions, and receive threaded peer answers.",
        whatIBuilt: "A complete full-stack Q&A web application featuring token-based authentication, user registration, question feeds, category tags, and threaded answer posting.",
        decisions: "Utilized MySQL for relational consistency between users, questions, and replies. Implemented JWT tokens stored securely on client sessions with custom auth middleware on Express routes.",
        challenge: "Managing token expiration gracefully during long question drafting so users never lose entered content.",
        improvement: "Add server-side pagination for question feeds to maintain fast initial page load times as question volume grows."
      }
    },
    {
      id: "amazon-clone",
      name: "Amazon-Inspired E-Commerce Platform",
      problem: "Online store replica solving product catalog browsing, cart persistence, and multi-step checkout review.",
      role: "Engineered client-side state management using React Context API, shopping cart actions, and responsive component UI.",
      tech: ["React", "JavaScript (ES6+)", "Context API", "CSS3", "Git"],
      screenshot: "/images/ecommerce.jpg",
      // TODO: Provide your real deployed demo URL (or leave empty to hide button)
      liveUrl: "", 
      // TODO: Provide your real GitHub repository URL (or leave empty to hide button)
      githubUrl: "",
      caseStudy: {
        problem: "Users needed a streamlined retail shopping experience where product selections remain intact across browsing and checkout steps.",
        whatIBuilt: "A modular e-commerce interface with dynamic product cards, category filtering, a real-time cart drawer, subtotal price calculation, and order review.",
        decisions: "Used React Context API with useReducer for predictable cart state transitions (ADD_TO_CART, REMOVE_ITEM, CLEAR) without prop drilling.",
        challenge: "Synchronizing cart state with browser localStorage so a user's cart survives page refreshes.",
        improvement: "Integrate a verified backend payment processing webhook to simulate live end-to-end order placement."
      }
    },
    {
      id: "netflix-clone",
      name: "Netflix-Inspired Media Catalog",
      problem: "Dynamic media browsing web application exploring external REST API consumption, movie trailers, and responsive media rows.",
      role: "Implemented asynchronous data fetching from TMDB API, dynamic billboard preview, and trailer overlay modal.",
      tech: ["React", "TMDB API", "Axios", "CSS3", "Git"],
      screenshot: "/images/streaming.jpg",
      // TODO: Provide your real deployed demo URL (or leave empty to hide button)
      liveUrl: "",
      // TODO: Provide your real GitHub repository URL (or leave empty to hide button)
      githubUrl: "",
      caseStudy: {
        problem: "Displaying responsive, horizontal-scroll media catalogues smoothly across mobile and desktop without layout jumping.",
        whatIBuilt: "A cinematic web app with dynamic hero banner selection, genre rows (Trending, Top Rated, Action), and interactive trailer playback.",
        decisions: "Created an Axios client instance with TMDB base parameters to streamline modular endpoint calls.",
        challenge: "Handling items with missing poster artwork or missing YouTube video trailer keys without crashing or showing blank tiles.",
        improvement: "Add client-side search filtering and bookmarking to allow users to save a custom watch list."
      }
    }
  ],

  // --------------------------------------------------------------------------
  // 4. EDUCATION & TRAINING (SINGLE-COLUMN VERTICAL TIMELINE)
  // --------------------------------------------------------------------------
  education: [
    {
      institution: "Addis Ababa University (AAU)",
      degree: "B.Sc. in Information Science",
      // TODO: Update expected graduation year (e.g. "Expected 2026")
      period: "2023 — Present (2nd Year Undergrad • Expected [Graduation Year])",
      bullets: [
        "Core coursework in Database Management Systems: SQL normalization (1NF–3NF), schema design, and query optimization.",
        "Systems Analysis & Design: software lifecycle processes, requirement modeling, and systems architecture.",
        "Foundational studies in Data Structures, Algorithms, and Information Storage & Retrieval."
      ]
    },
    {
      institution: "Evangadi Networks",
      degree: "AI-Powered Full-Stack Application Development",
      // TODO: Update exact dates if known
      period: "2024 — 2025 ([Bootcamp Dates])",
      bullets: [
        "Completed 400+ hours of full-stack engineering covering React, Node.js, Express, and MySQL.",
        "Built production-ready RESTful APIs with secure JWT authentication and password hashing (Bcrypt).",
        "Practiced collaborative Git workflows, code reviews, and deployment pipelines."
      ]
    },
    {
      institution: "Self-Directed Engineering & Hands-On Building",
      degree: "Practical Full-Stack Project Development",
      period: "2024 — Present",
      bullets: [
        "Building end-to-end web applications implementing real-world requirements (Q&A communities, e-commerce, media portals).",
        "Refining clean code habits: modular React components, structured Express route handling, and database integrity."
      ]
    }
  ]
};
