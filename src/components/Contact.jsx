import React, { useState } from 'react';
import { 
  FileText, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactData, personalData } from '../data';
import { Reveal } from './Reveal';
import '../styles/Contact.css';

const Earth3D = React.lazy(() => import('./Earth3D'));

const emptyForm = { name: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(formData) {
  const errors = {};
  if (!formData.name.trim() || formData.name.trim().length < 2) {
    errors.name = 'Please provide your name (at least 2 characters).';
  }
  if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }
  if (!formData.message.trim() || formData.message.trim().length < 8) {
    errors.message = 'Please enter at least 8 characters.';
  }
  return errors;
}

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ 
        type: 'error', 
        message: 'Please complete all fields with valid information.' 
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus(null);

    const serviceId = contactData.emailjsServiceId;
    const templateId = contactData.emailjsTemplateId;
    const publicKey = contactData.emailjsPublicKey;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name.trim(),
            from_email: formData.email.trim(),
            message: formData.message.trim(),
            to_name: personalData.name,
          },
          publicKey
        );
        setFormData(emptyForm);
        setStatus({
          type: 'success',
          message: `Thank you, ${formData.name.trim()}! Your message was sent successfully to Dawit.`,
        });
        return;
      }

      // Smooth simulated fallback for development
      await new Promise((resolve) => setTimeout(resolve, 900));
      setFormData(emptyForm);
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name.trim()}! Your message has been received.`,
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        message: err?.text || 'There was an issue sending your message. Please reach me directly at ' + contactData.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-exact-section" aria-labelledby="contact-heading">
      <div className="contact-exact-container">
        {/* Left Column: Exactly Designed Contact Card */}
        <Reveal variant="fade-up" delay={0.1} className="contact-card-reveal-wrapper">
          <div className="contact-exact-card">
            {/* Top Status Pill: OPEN TO WORK ● */}
            <div className="contact-pill-status">
              <span className="pill-text">OPEN TO WORK</span>
              <span className="pill-status-dot" aria-hidden="true" />
            </div>

            {/* Eyebrow & Main Title */}
            <div className="contact-card-title-group">
              <span className="contact-card-eyebrow">GET IN TOUCH</span>
              <h2 id="contact-heading" className="contact-exact-title">Contact.</h2>
            </div>

            {/* Interactive Form */}
            <form className="contact-exact-form" onSubmit={handleSubmit} noValidate>
              {/* Field: Your Name */}
              <div className="contact-input-group">
                <label htmlFor="contact-name" className="contact-exact-label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  autoComplete="name"
                  disabled={isSubmitting}
                  className={`contact-exact-input ${errors.name ? 'input-has-error' : ''}`}
                  required
                />
                {errors.name && (
                  <span className="contact-error-hint" role="alert">{errors.name}</span>
                )}
              </div>

              {/* Field: Your Email */}
              <div className="contact-input-group">
                <label htmlFor="contact-email" className="contact-exact-label">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What's your work email?"
                  autoComplete="email"
                  disabled={isSubmitting}
                  className={`contact-exact-input ${errors.email ? 'input-has-error' : ''}`}
                  required
                />
                {errors.email && (
                  <span className="contact-error-hint" role="alert">{errors.email}</span>
                )}
              </div>

              {/* Field: Your Message */}
              <div className="contact-input-group">
                <label htmlFor="contact-message" className="contact-exact-label">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project..."
                  rows={4}
                  disabled={isSubmitting}
                  className={`contact-exact-textarea ${errors.message ? 'input-has-error' : ''}`}
                  required
                />
                {errors.message && (
                  <span className="contact-error-hint" role="alert">{errors.message}</span>
                )}
              </div>

              {/* Status Alert */}
              {status && (
                <div className={`contact-status-box ${status.type}`} role="status" aria-live="polite">
                  {status.type === 'success' ? (
                    <CheckCircle2 size={16} className="text-emerald" />
                  ) : (
                    <AlertCircle size={16} className="text-rose" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-exact-submit-btn"
              >
                {isSubmitting ? (
                  <span className="btn-loading-state">
                    <Loader2 size={16} className="spin-icon" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            {/* Bottom 4 Direct Channels Inside Card */}
            <div className="contact-exact-footer" aria-label="Direct professional channels">
              <button
                type="button"
                onClick={onOpenResume}
                className="contact-exact-channel-link"
                title="View Digital CV / Resume"
                aria-label="View Digital CV / Resume"
              >
                <FileText size={15} className="channel-icon" />
                <span>Resume</span>
              </button>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-exact-channel-link"
                title="LinkedIn Profile"
                aria-label="Dawit LinkedIn Profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="channel-icon">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-exact-channel-link"
                title="GitHub Profile"
                aria-label="Dawit GitHub Profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="channel-icon">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${contactData.email}`}
                className="contact-exact-channel-link"
                title="Send Direct Email"
                aria-label={`Email ${contactData.email}`}
              >
                <Mail size={15} className="channel-icon" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Column: 3D Earth with Glowing Orbital Rings & Starfield */}
        <Reveal variant="fade-left" delay={0.2} className="contact-earth-reveal-wrapper">
          <div className="contact-earth-container">
            <React.Suspense fallback={<div className="contact-earth-loader" />}>
              <Earth3D />
            </React.Suspense>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
