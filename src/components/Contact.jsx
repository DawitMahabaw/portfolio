import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Loader2, Mail, MessageSquare, Send, UserRound } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactData, personalData } from '../data';
import TechIcon from './TechIcon';
import '../styles/Contact.css';

const Earth3D = React.lazy(() => import('./Earth3D'));

const slideIn = (direction, delay = 0, duration = 1, shouldReduceMotion = false) => ({
  hidden: {
    x: shouldReduceMotion ? 0 : direction === 'left' ? -72 : direction === 'right' ? 72 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration: shouldReduceMotion ? 0.25 : duration,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});
const emptyForm = { name: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(formData) {
  const errors = {};
  if (!formData.name.trim() || formData.name.trim().length < 2) errors.name = 'Please provide your name (at least 2 characters).';
  if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) errors.email = 'Please provide a valid email address.';
  if (!formData.message.trim() || formData.message.trim().length < 6) errors.message = 'Please enter at least 6 characters.';
  return errors;
}

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactData.email)}&su=${encodeURIComponent('Portfolio inquiry')}`;
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status?.type !== 'success') return undefined;

    const dismissTimer = window.setTimeout(() => setStatus(null), 5000);
    return () => window.clearTimeout(dismissTimer);
  }, [status]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(formData);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus({ type: 'error', message: 'Please complete all fields with valid information.' });
      return;
    }

    setErrors({});
    setStatus(null);
    setIsSubmitting(true);

    try {
      const { emailjsServiceId: serviceId, emailjsTemplateId: templateId, emailjsPublicKey: publicKey } = contactData;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('The email service is not configured.');
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.name.trim(),
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        message: formData.message.trim(),
        to_name: personalData.name,
        title: `Portfolio Inquiry from ${formData.name.trim()}`,
      }, publicKey);

      const sender = formData.name.trim();
      setFormData(emptyForm);
      setStatus({ type: 'success', message: `Thanks, ${sender}. Your message was sent successfully.` });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({ type: 'error', message: `There was an issue sending your message. Please email ${contactData.email} directly.` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-exact-section" aria-labelledby="contact-heading">
      <div className="contact-space-noise" aria-hidden="true" />
      <div className="contact-ambient-glow" aria-hidden="true" />

      <motion.div
        className="contact-exact-container"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.32 }}
      >
        <motion.div
          variants={slideIn('left', 0.1, 1.3, shouldReduceMotion)}
          className="contact-card-reveal-wrapper"
        >
          <div className="contact-exact-card">
            <div className="contact-card-intro">
              <span className="contact-availability"><span aria-hidden="true" />Open to work</span>
              <span className="contact-card-eyebrow">Get in touch</span>
              <h2 id="contact-heading" className="contact-exact-title">Let&apos;s <span>Connect.</span></h2>
            </div>

            <form className="contact-exact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-input-group">
                <label htmlFor="contact-name" className="contact-exact-label">Your Name</label>
                <div className={`contact-field-shell ${errors.name ? 'input-has-error' : ''}`}>
                  <UserRound size={17} aria-hidden="true" />
                  <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="What&apos;s your name?" autoComplete="name" disabled={isSubmitting} required />
                </div>
                {errors.name && <span className="contact-error-hint" role="alert">{errors.name}</span>}
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-email" className="contact-exact-label">Your Email</label>
                <div className={`contact-field-shell ${errors.email ? 'input-has-error' : ''}`}>
                  <Mail size={17} aria-hidden="true" />
                  <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="What&apos;s your email?" autoComplete="email" disabled={isSubmitting} required />
                </div>
                {errors.email && <span className="contact-error-hint" role="alert">{errors.email}</span>}
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-message" className="contact-exact-label">Your Message</label>
                <div className={`contact-field-shell contact-message-shell ${errors.message ? 'input-has-error' : ''}`}>
                  <MessageSquare size={17} aria-hidden="true" />
                  <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="What you want to say?" rows={4} disabled={isSubmitting} required />
                </div>
                {errors.message && <span className="contact-error-hint" role="alert">{errors.message}</span>}
              </div>

              {status && <div className={`contact-status-box ${status.type}`} role="status" aria-live="polite">{status.message}</div>}

              <button type="submit" disabled={isSubmitting} className="contact-exact-submit-btn">
                {isSubmitting ? <span className="btn-loading-state"><Loader2 size={17} className="spin-icon" />Sending...</span> : <><Send size={17} aria-hidden="true" />Send message</>}
              </button>
            </form>

            <div className="contact-quick-links" aria-label="Additional ways to connect">
              <a href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="contact-quick-link" title="LinkedIn Profile">
                <TechIcon name="linkedin" size={16} />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" />
              <a href={personalData.socials.github} target="_blank" rel="noopener noreferrer" className="contact-quick-link" title="GitHub Profile">
                <TechIcon name="github" size={16} />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" />
              <a 
                href={emailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-link"
                title="Compose email in Gmail"
                aria-label="Compose email in Gmail"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn('right', 0.18, 1.3, shouldReduceMotion)}
          className="contact-earth-reveal-wrapper"
        >
          <div className="contact-earth-container">
            <React.Suspense fallback={<div className="contact-earth-loader" aria-label="Loading globe" />}>
              <Earth3D />
            </React.Suspense>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
