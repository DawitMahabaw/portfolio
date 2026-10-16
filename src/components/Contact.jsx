import React, { useState } from 'react';
import { FileText, Loader2, Mail, MessageSquare, Send, UserRound } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactData, personalData } from '../data';
import { Reveal } from './Reveal';
import TechIcon from './TechIcon';
import '../styles/Contact.css';

const Earth3D = React.lazy(() => import('./Earth3D'));
const emptyForm = { name: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(formData) {
  const errors = {};
  if (!formData.name.trim() || formData.name.trim().length < 2) errors.name = 'Please provide your name (at least 2 characters).';
  if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) errors.email = 'Please provide a valid email address.';
  if (!formData.message.trim() || formData.message.trim().length < 6) errors.message = 'Please enter at least 6 characters.';
  return errors;
}

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
          to_name: personalData.name,
        }, publicKey);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 650));
      }

      const sender = formData.name.trim();
      setFormData(emptyForm);
      setStatus({ type: 'success', message: `Thanks, ${sender}. Your message is on its way.` });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({ type: 'error', message: error?.text || `There was an issue sending your message. Please email ${contactData.email} directly.` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-exact-section" aria-labelledby="contact-heading">
      <div className="contact-space-noise" aria-hidden="true" />
      <div className="contact-ambient-glow" aria-hidden="true" />

      <div className="contact-exact-container">
        <Reveal
          variant="fade-left"
          delay={0.08}
          duration={1.15}
          viewport={{ once: true, amount: 0.25 }}
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
                  <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about the project..." rows={4} disabled={isSubmitting} required />
                </div>
                {errors.message && <span className="contact-error-hint" role="alert">{errors.message}</span>}
              </div>

              {status && <div className={`contact-status-box ${status.type}`} role="status" aria-live="polite">{status.message}</div>}

              <button type="submit" disabled={isSubmitting} className="contact-exact-submit-btn">
                {isSubmitting ? <span className="btn-loading-state"><Loader2 size={17} className="spin-icon" />Sending...</span> : <><Send size={17} aria-hidden="true" />Send message</>}
              </button>
            </form>

            <div className="contact-quick-links" aria-label="Additional ways to connect">
              <button type="button" onClick={onOpenResume} className="contact-quick-link"><FileText size={16} />Resume</button>
              <span aria-hidden="true" />
              <a href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="contact-quick-link"><TechIcon name="linkedin" size={16} />LinkedIn</a>
              <span aria-hidden="true" />
              <a href={personalData.socials.github} target="_blank" rel="noopener noreferrer" className="contact-quick-link"><TechIcon name="github" size={16} />GitHub</a>
              <span aria-hidden="true" />
              <a href={`mailto:${contactData.email}`} className="contact-quick-link"><Mail size={16} />Email</a>
            </div>
          </div>
        </Reveal>

        <Reveal
          variant="fade-right"
          delay={0.2}
          duration={1.15}
          viewport={{ once: true, amount: 0.25 }}
          className="contact-earth-reveal-wrapper"
        >
          <div className="contact-earth-container">
            <React.Suspense fallback={<div className="contact-earth-loader" aria-label="Loading globe" />}>
              <Earth3D />
            </React.Suspense>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
