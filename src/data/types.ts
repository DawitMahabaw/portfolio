export interface SocialLinks {
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  telegram: string;
}

export interface PersonalData {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  roleSubhead: string;
  status: string;
  heroStatusPill: string;
  bio: string;
  aboutIntro: string;
  heroImage: string;
  heroOriginalImage: string;
  heroImageAlt: string;
  aboutImage: string;
  aboutImageAlt: string;
  resumeUrl: string;
  resumeFileName: string;
  socials: SocialLinks;
}

export interface JourneyMilestoneSubItem {
  type: string;
  institution: string;
  period: string;
  degree: string;
  note: string;
}

export interface JourneyMilestone {
  id: string;
  step: string;
  period: string;
  title: string;
  summary: string;
  subItems?: JourneyMilestoneSubItem[];
  tags: string[];
  icon: string;
}

export interface LearningPathItem {
  id: string;
  year: string;
  period: string;
  title: string;
  institution: string;
  role?: string;
  location?: string;
  type?: 'education' | 'bootcamp' | 'production' | 'certification';
  badge: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  credentialUrl?: string;
}

export interface AboutHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
}

export interface AboutPhotoData {
  image: string;
  fallbackImage?: string;
  alt: string;
  badge: string;
  subBadge?: string;
  status?: string;
  location?: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  color?: string;
  glowColor?: string;
  level?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  accentColor: string;
  description?: string;
  skills: SkillItem[];
}

export interface ProjectTechnology {
  name: string;
  icon: string;
}

export interface ProjectArchitecture {
  layer: string;
  tech: string;
  icon: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ApiEndpoint {
  method: string;
  path: string;
  desc: string;
}

export interface ProjectCaseStudy {
  overview: string;
  userNeeds: string[];
  solution: string;
  technicalDecisions: string[];
  challenges: string[];
  lessonsLearned: string[];
  apiEndpoints: ApiEndpoint[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  shortDescription: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  image: string;
  imageAlt: string;
  screenshots: string[];
  tags: string[];
  technologies: ProjectTechnology[];
  featured: boolean;
  liveUrl: string;
  liveDemoUrl: string;
  githubUrl: string;
  summary: string;
  keyFeatures: string[];
  architecture: ProjectArchitecture[];
  challenges: ProjectChallenge[];
  caseStudy: ProjectCaseStudy;
}

export interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  github: string;
  linkedin: string;
  telegram: string;
  location: string;
  availability: string;
  endpointUrl: string;
  emailjsServiceId?: string;
  emailjsTemplateId?: string;
  emailjsPublicKey?: string;
}

