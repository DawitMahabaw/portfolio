import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Send, 
  Loader2, 
  Mail, 
  SendHorizontal, 
  User, 
  AtSign, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactData, personalData } from '../data';
import TechIcon from './TechIcon';
import MagneticLink from './MagneticLink';
import { Reveal } from './Reveal';
import { SectionHeading, Button, Card } from './ui';
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
  if (!formData.message.trim() || formData.message.trim().length < 10) {
    errors.message = 'Please enter at least 10 characters for context.';
  }
  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);

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
        message: 'Please review and fix the highlighted fields above.' 
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
      // 1. If EmailJS keys are provided, send via official SDK
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
          message: `Thank you, ${formData.name.trim()}! Your message has been sent directly to Dawit. I'll get back to you shortly.`,
        });
        return;
      }

      // 2. Fallback in development when keys are not yet configured: simulate smooth sending & inform user
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData(emptyForm);
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name.trim()}! Your message has been captured. (Note: Configure VITE_EMAILJS_* keys in .env to deliver real inbox emails).`,
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        message: err?.text || 'There was an issue sending your message. You can also reach me directly at ' + contactData.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <SectionHeading
            numberBadge="05 // INQUIRIES & COLLABORATION"
            title="Get In Touch"
            gradientWord="Touch"
            subtitle="Let's build something exceptional. Open for junior full-stack roles, software engineering internships, and discussions."
            id="contact-heading"
          />
        </Reveal>

        {/* 2-Column Main Contact Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Glass Card with Contact Form */}
          <Reveal variant="fade-right" delay={0.1} className="contact-form-column">
            <Card variant="glass" radius="xl" padding="none" className="contact-form-glass-card">
              <div className="contact-form-header">
                <div className="contact-header-eyebrow">
                  <Sparkles size={14} className="text-purple" />
                  <span>START A CONVERSATION</span>
                </div>
                <h3 className="contact-card-title">Get in touch</h3>
                <p className="contact-card-desc">
                  Have an open role, project inquiry, or technical challenge? Fill out the form below or connect via direct channels.
                </p>
              </div>

              <form className="contact-form-body" onSubmit={handleSubmit} noValidate>
                {/* Name Field */}
                <div className={`form-field-group ${activeField === 'name' ? 'is-focused' : ''} ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="contact-name" className="form-field-label">
                    <span>Name</span>
                    <span className="required-star">*</span>
                  </label>
                  <div className="form-input-container">
                    <User size={16} className="form-input-icon" />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      placeholder="Alex Mercer"
                      autoComplete="name"
                      disabled={isSubmitting}
                      className="form-control-input"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      required
                    />
                  </div>
                  {errors.name && (
                    <span id="name-error" className="field-error-notice" role="alert">
                      <AlertCircle size={13} />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className={`form-field-group ${activeField === 'email' ? 'is-focused' : ''} ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="contact-email" className="form-field-label">
                    <span>Email Address</span>
                    <span className="required-star">*</span>
                  </label>
                  <div className="form-input-container">
                    <AtSign size={16} className="form-input-icon" />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      placeholder="alex@company.com"
                      autoComplete="email"
                      disabled={isSubmitting}
                      className="form-control-input"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      required
                    />
                  </div>
                  {errors.email && (
                    <span id="email-error" className="field-error-notice" role="alert">
                      <AlertCircle size={13} />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className={`form-field-group ${activeField === 'message' ? 'is-focused' : ''} ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="contact-message" className="form-field-label">
                    <span>Message</span>
                    <span className="required-star">*</span>
                  </label>
                  <div className="form-input-container textarea-container">
                    <MessageSquare size={16} className="form-input-icon textarea-icon" />
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      placeholder="Hello Dawit, we have an open junior MERN position and would love to review your background..."
                      rows={5}
                      disabled={isSubmitting}
                      className="form-control-input form-control-textarea"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      required
                    />
                  </div>
                  {errors.message && (
                    <span id="message-error" className="field-error-notice" role="alert">
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Status Message Alert */}
                {status && (
                  <div className={`form-status-alert ${status.type}`} role="status" aria-live="polite">
                    {status.type === 'success' ? (
                      <CheckCircle2 size={18} className="status-icon-success" />
                    ) : (
                      <AlertCircle size={18} className="status-icon-error" />
                    )}
                    <span className="status-alert-text">{status.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="form-submit-wrapper">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="btn-send-message"
                    icon={isSubmitting ? <Loader2 size={16} className="spin-loader" /> : <Send size={16} />}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Sending Message…' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </Card>
          </Reveal>

          {/* Right Column: 3D Earth on Starfield Background */}
          <Reveal variant="fade-left" delay={0.15} className="contact-earth-column">
            <div className="contact-earth-box">
              <React.Suspense fallback={
                <div className="earth-loading-fallback">
                  <Loader2 size={32} className="spin-loader text-cyan" />
                  <span className="fallback-text">Initializing 3D Orbital Scene…</span>
                </div>
              }>
                <Earth3D />
              </React.Suspense>
            </div>
          </Reveal>
        </div>

        {/* Magnetic Hover Direct Contact Links */}
        <Reveal variant="fade-up" delay={0.25} className="contact-magnetic-section">
          <div className="magnetic-links-container">
            <div className="magnetic-section-header">
              <span className="magnetic-label-pill">DIRECT CHANNELS</span>
              <p className="magnetic-subhead">Hover to pull · Click to connect instantly</p>
            </div>

            <div className="magnetic-links-grid" aria-label="Direct contact channels">
              {/* Direct Email */}
              <MagneticLink
                href={`mailto:${contactData.email}`}
                ariaLabel={`Send direct email to ${contactData.email}`}
                className="magnetic-channel-btn email-channel"
              >
                <span className="magnetic-btn-icon">
                  <Mail size={18} />
                </span>
                <span className="magnetic-btn-text">
                  <span className="magnetic-channel-name">Direct Email</span>
                  <span className="magnetic-channel-detail">{contactData.email}</span>
                </span>
              </MagneticLink>

              {/* LinkedIn */}
              <MagneticLink
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Connect on LinkedIn"
                className="magnetic-channel-btn linkedin-channel"
              >
                <span className="magnetic-btn-icon">
                  <TechIcon name="linkedin" size={18} />
                </span>
                <span className="magnetic-btn-text">
                  <span className="magnetic-channel-name">LinkedIn</span>
                  <span className="magnetic-channel-detail">/in/dawit-mahabaw</span>
                </span>
              </MagneticLink>

              {/* GitHub */}
              <MagneticLink
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="View GitHub profile"
                className="magnetic-channel-btn github-channel"
              >
                <span className="magnetic-btn-icon">
                  <TechIcon name="github" size={18} />
                </span>
                <span className="magnetic-btn-text">
                  <span className="magnetic-channel-name">GitHub</span>
                  <span className="magnetic-channel-detail">@dawitmahabaw</span>
                </span>
              </MagneticLink>

              {/* Telegram */}
              <MagneticLink
                href={contactData.telegram}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Message on Telegram"
                className="magnetic-channel-btn telegram-channel"
              >
                <span className="magnetic-btn-icon">
                  <SendHorizontal size={18} />
                </span>
                <span className="magnetic-btn-text">
                  <span className="magnetic-channel-name">Telegram</span>
                  <span className="magnetic-channel-detail">@dawitmahabaw</span>
                </span>
              </MagneticLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
