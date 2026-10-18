# Dawit Mahabaw — Full-Stack Developer Portfolio

A responsive, high-performance personal developer portfolio built with **React 19**, **Vite**, **Vanilla CSS**, and **Three.js**. This application showcases production full-stack applications, core technical proficiencies, an interactive learning journey, and an interactive 3D WebGL contact interface.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Environment Variables](#environment-variables)
- [Getting Started & Local Setup](#getting-started--local-setup)
- [Available Scripts](#available-scripts)
- [Performance & Design Principles](#performance--design-principles)
- [Author & Contact](#author--contact)

---

## Project Overview

This portfolio serves as a central hub presenting full-stack software engineering projects, technical milestones, and educational qualifications to peers, instructors, and hiring teams. 

Rather than relying on heavy CSS frameworks or static templates, the interface is engineered with custom Vanilla CSS for precise design control, smooth Framer Motion reveal animations, and an interactive 3D Earth model powered by Three.js.

### Highlighted Highlights
- **12+ Projects Built**: Including full-stack MERN/MySQL web platforms and responsive front-end builds.
- **1000+ Hours Intensive Bootcamp**: AI-powered full-stack immersion completed at Evangadi Networks.
- **Academic Grounding**: Second-year Information Science undergraduate at Addis Ababa University (AAU) with focus on relational databases, procedural programming, and object-oriented programming (OOP).

---

## Key Features

### 1. Interactive Hero Section
- **Typewriter Role Presentation**: Dynamically transitions through developer specialties (MERN Stack Developer, Node.js & REST API Builder, React & Frontend Engineer, Full-Stack Web Specialist).
- **Direct Navigation & Social Connectors**: Instant anchor jump links to projects and contact, plus direct links to GitHub, LinkedIn, and Gmail compose.
- **Atmospheric Background**: Layered SVG wave gradients with smooth CSS neon accent rails.

### 2. About & Verified Evidence Pillars
- **Three Core Pillars**:
  1. *12+ Projects Built*: Highlights live full-stack builds, including a Q&A community forum with semantic search and an AI chatbot.
  2. *1000+ Hours*: Hands-on training covering React, Node.js, Express, MySQL, REST APIs, and AI workflow integration.
  3. *Information Science Degree*: Academic foundations in relational database design, data modeling, procedural logic, and OOP.
- **Profile Presentation**: Authentic student developer portrait with academic badge tags and real-time availability status indicator.

### 3. "My Path to Full-Stack" Learning Journey
- **Alternating Two-Sided Timeline**: A clean, balanced desktop timeline with milestone date badges, custom icon nodes, narrative milestones, and categorized skill tags.
- **Progressive Milestones**: Traces the path from initial C++ problem-solving foundations through Udacity front-end certification, AAU Information Science coursework, and Evangadi Networks full-stack capstones.
- **Responsive Stacking**: Automatically collapses to a clean single-column line layout on smaller viewports with zero horizontal overflow.

### 4. Interactive Tech Stack Showcase
- **Infinite Marquee Carousel**: Smoothly animated row featuring core developer technologies:
  - React, Node.js, Express.js, MySQL, JavaScript (ES6+), REST APIs, Git, Postman, and VS Code.
- **User Controllable**: Supports mouse drag, touch swiping, and wheel scrubbing with automatic resume after interaction.

### 5. Featured Projects & Case Studies
- **Production Showcases**: Highlights live applications including:
  - **Evangadi Community Q&A Forum**: Full-stack MERN/MySQL developer discussion platform with JWT authorization, category filtering, and threaded replies.
  - **EthioGPT AI Assistant**: Interactive chatbot application with streaming responses.
  - **EthioMovie**: Dynamic entertainment web portal consuming external REST endpoints.
  - **Ethio-Apple**: High-fidelity e-commerce product interface.
- **In-Depth Case Study Modal**: Detailed views explaining user problems, architectural decisions (frontend, backend, database), key technical challenges, and solutions.

### 6. Interactive 3D Contact Section
- **Three.js 3D Earth Globe**: Interactive, rotating celestial sphere using `@react-three/fiber` and `@react-three/drei` with WebGL controls.
- **Graceful Error Boundary**: Includes a fallback wireframe sphere if WebGL is unavailable or fails on lower-end devices.
- **Validated Contact Form**: Client-side validation ensuring valid sender name, well-formed email syntax, and minimum message length.
- **Direct Email Delivery**: Integrated directly with EmailJS for serverless inbox delivery, featuring an auto-dismissing success status alert.
- **Direct Mail Fallback**: One-click direct link to compose an email in Gmail.

---

## Technology Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Core** | React 19 | Component-driven declarative UI architecture |
| **Build Tool** | Vite 8 | Fast ESM-based dev server and optimized Rollup production bundler |
| **Styling** | Vanilla CSS3 | Custom tokens, CSS Grid, Flexbox, clamp(), and media queries |
| **3D Graphics** | Three.js | WebGL rendering engine |
| **React 3D Bridge**| `@react-three/fiber` & `@react-three/drei` | Declarative Three.js scene graph and OrbitControls |
| **Motion** | Framer Motion | Viewport scroll reveals, staggered child transitions, and spring animations |
| **Card Micro-Interactions** | React Parallax Tilt | Gyroscopic 3D mouse tilt effects |
| **Icons** | Lucide React | Clean, scalable vector icon library |
| **Email Service** | EmailJS Browser SDK | Direct client-to-inbox form dispatch without custom server overhead |
| **Code Quality** | ESLint & Oxlint | Static code analysis and linting verification |

---

## Project Architecture

```text
desPortfolio/
├── public/
│   ├── images/               # Portraits, workstation graphics, project screenshots
│   ├── planet/               # 3D GLTF model files for Earth sphere
│   ├── favicon.svg           # Site favicons
│   ├── robots.txt            # Search engine crawler instructions
│   └── sitemap.xml           # SEO sitemap
├── src/
│   ├── components/           # Modular React components
│   │   ├── ui/               # Reusable primitives (Buttons, AnimatedBackground)
│   │   ├── About.jsx         # Bio, evidence cards, and journey timeline
│   │   ├── Contact.jsx       # Form, validation, and direct email dispatch
│   │   ├── Earth3D.jsx       # Three.js canvas & WebGL fallback boundary
│   │   ├── Footer.jsx        # Navigation links & back-to-top trigger
│   │   ├── Hero.jsx          # Headline, typewriter role, call-to-actions
│   │   ├── Navbar.jsx        # Desktop nav & mobile drawer menu
│   │   ├── ProjectCard.jsx   # Project showcase card with tags and links
│   │   ├── ProjectModal.jsx  # Detailed case study dialog modal
│   │   ├── Projects.jsx      # Projects grid and category filters
│   │   ├── Reveal.jsx        # Reusable Framer Motion scroll wrappers
│   │   ├── Skills.jsx        # Infinite marquee carousel
│   │   ├── TechIcon.jsx      # Inline SVG tech stack iconography
│   │   └── TypewriterRole.jsx# Looping typewriter role text
│   ├── data/                 # Decoupled content and application data
│   │   ├── about.ts          # Highlights, bio narrative, and timeline milestones
│   │   ├── contact.ts        # Contact configuration and social endpoints
│   │   ├── personal.ts       # Identity, titles, and avatar references
│   │   ├── projects.ts       # Projects list, architecture specs, case studies
│   │   ├── skills.ts         # Tech stack list and categorization
│   │   └── types.ts          # TypeScript interfaces for structured data
│   ├── styles/               # Component-specific Vanilla CSS stylesheets
│   │   ├── About.css
│   │   ├── Contact.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Navbar.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   └── index.css         # Global variables, reset, and theme tokens
│   ├── App.jsx               # Main page layout container
│   └── main.jsx              # Application bootstrap entry
├── .env                      # Local environment keys (ignored by git)
├── .env.example              # Template for required environment variables
├── index.html                # HTML5 entry with meta tags, SEO, and Google Fonts
├── package.json              # Dependency declarations and build scripts
└── vite.config.js            # Vite configuration and React plugin setup
```

---

## Environment Variables

To enable the contact form to dispatch messages directly to your email inbox, configure an `.env` file in the root directory:

```env
# EmailJS Service Configuration
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

An [`.env.example`](file:///.env.example) file is provided in the repository for reference.

---

## Getting Started & Local Setup

Follow these instructions to run the project locally on your machine:

### 1. Prerequisites
- **Node.js**: `v18.0.0` or higher recommended
- **npm**: `v9.0.0` or higher

### 2. Clone the Repository
```bash
git clone https://github.com/DawitMahabaw/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory and populate it with your EmailJS credentials:
```bash
cp .env.example .env
```

### 5. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles and optimizes assets into production-ready bundle in `dist/` |
| `npm run preview` | Locally serves the production `dist/` build for verification |

---

## Performance & Design Principles

- **Zero CSS Framework Overhead**: Styled completely in custom CSS without the bundle weight of Tailwind or UI component kits.
- **WCAG AA Compliance**: High-contrast typography (`#f1f5f9` / `#cbd5e1` on dark `#050713` backdrops) and minimum body text size of 14px+.
- **Lazy Loading**: Heavy 3D components (`Earth3D`) are code-split using `React.lazy` and `Suspense` to preserve fast initial page loads.
- **Defensive Error Handling**: WebGL rendering is wrapped in a React Error Boundary with an SVG/CSS fallback sphere if GPU canvas initialization fails.
- **Fully Responsive**: Adapts across mobile devices (320px+), tablets, and widescreen desktop monitors with zero horizontal overflow.

---

## Author & Contact

**Dawit Mahabaw**
- **Role**: Full-Stack MERN Developer
- **Education**: 2nd-Year B.Sc. in Information Science, Addis Ababa University
- **Bootcamp**: Evangadi Networks (AI-Powered Full-Stack Application Development)
- **GitHub**: [github.com/DawitMahabaw](https://github.com/DawitMahabaw)
- **LinkedIn**: [linkedin.com/in/dawit-mahabaw-b7035a361](https://www.linkedin.com/in/dawit-mahabaw-b7035a361)
- **Email**: [dawitmahabaw03@gmail.com](mailto:dawitmahabaw03@gmail.com)
