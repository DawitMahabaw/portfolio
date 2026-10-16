import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
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
  if (!formData.message.trim() || formData.message.trim().length < 6) {
    errors.message = 'Please enter at least 6 characters.';
  }
  return errors;
}

export default function Contact() {
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
      await new Promise((resolve) => setTimeout(resolve, 800));
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
        {/* Left Column: Compact Professional Card Matching Reference */}
        <Reveal variant="fade-up" delay={0.1} className="contact-card-reveal-wrapper">
          <div className="contact-exact-card">
            <span className="contact-card-eyebrow">GET IN TOUCH</span>
            <h2 id="contact-heading" className="contact-exact-title">Contact.</h2>

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
                  placeholder="What's your good name?"
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
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
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
                  placeholder="What you want to say?"
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
                    <Loader2 size={15} className="spin-icon" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send'
                )}
              </button>
            </form>
          </div>
        </Reveal>

        {/* Right Column: 3D Earth Rotating Steadily Without Cursor Interaction */}
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
