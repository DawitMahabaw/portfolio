import type { ContactData } from './types';
import { personalData } from './personal';

export const contactData: ContactData = {
  title: "Let's Build Something Great Together.",
  subtitle: "I'm actively looking for junior developer roles, frontend/full-stack internships, and collaborative engineering opportunities. Feel free to reach out directly or send a message below.",
  email: personalData.socials.email,
  github: personalData.socials.github,
  linkedin: personalData.socials.linkedin,
  telegram: personalData.socials.telegram,
  location: 'Addis Ababa, Ethiopia',
  availability: 'Available for full-time, part-time, internship, and remote junior roles',
  endpointUrl: (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT || '',
  emailjsServiceId: (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || '',
  emailjsTemplateId: (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || '',
  emailjsPublicKey: (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || '',
};
