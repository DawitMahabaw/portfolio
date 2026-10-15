import { useState } from 'react';
import { AlertCircle, CheckCircle, Mail, Send, MapPin } from 'lucide-react';
import { contactData, personalData } from '../data/portfolioData';
import TechIcon from './TechIcon';
import '../styles/Contact.css';

const emptyForm = { name: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(formData) {
  const errors = {};
  if (formData.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!emailPattern.test(formData.email.trim())) errors.email = 'Enter a valid email address.';
  const messageLength = formData.message.trim().length;
  if (messageLength < 10) errors.message = 'Please add at least 10 characters so I have enough context.';
  if (messageLength > 2000) errors.message = 'Please keep your message under 2,000 characters.';
  return errors;
}

export default function Contact() {
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
      setStatus({ type: 'error', message: 'Please correct the highlighted fields.' });
      return;
    }

    if (!contactData.endpointUrl) {
      // Fallback: Open mailto client with prefilled details
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name.trim()}`);
      const body = encodeURIComponent(`Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`);
      window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
      setStatus({ type: 'success', message: 'Opening your email client to send your message directly to Dawit Mahabaw.' });
      setFormData(emptyForm);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch(contactData.endpointUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _subject: `Portfolio message from ${formData.name.trim()}` }),
      });
      if (!response.ok) throw new Error('The form service could not accept the message.');
      setFormData(emptyForm);
      setStatus({ type: 'success', message: 'Thanks — your message was sent successfully!' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'The message could not be sent. Please try again or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialCards = [
    personalData.socials.linkedin && { label: 'LinkedIn', value: 'Connect on LinkedIn', url: personalData.socials.linkedin, icon: 'linkedin' },
    personalData.socials.github && { label: 'GitHub', value: 'View GitHub profile', url: personalData.socials.github, icon: 'github' },
    personalData.socials.telegram && { label: 'Telegram', value: '@dawitmahabaw', url: personalData.socials.telegram, icon: 'api' },
  ].filter(Boolean);

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left-col">
            <div className="section-header">
              <span className="section-tag">Get in touch</span>
              <h2 id="contact-heading" className="section-title">{contactData.title}</h2>
              <p className="section-desc">{contactData.subtitle}</p>
            </div>
            
            <div className="contact-info-stack">
              <a href={`mailto:${contactData.email}`} className="contact-card-item" aria-label={`Email ${personalData.name}`}>
                <span className="contact-card-icon-box"><Mail size={20} /></span>
                <span className="contact-card-text">
                  <span className="contact-card-label">Direct Email</span>
                  <span className="contact-card-value">{contactData.email}</span>
                </span>
              </a>

              <div className="contact-card-item location-item">
                <span className="contact-card-icon-box"><MapPin size={20} /></span>
                <span className="contact-card-text">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-value">{contactData.location}</span>
                </span>
              </div>

              {socialCards.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="contact-card-item" aria-label={`${personalData.name} on ${social.label}`}>
                  <span className="contact-card-icon-box"><TechIcon name={social.icon} size={20} /></span>
                  <span className="contact-card-text">
                    <span className="contact-card-label">{social.label}</span>
                    <span className="contact-card-value">{social.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right-col">
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <Field label="Name" name="name" type="text" value={formData.name} error={errors.name} onChange={handleChange} autoComplete="name" />
                  <Field label="Email" name="email" type="email" value={formData.email} error={errors.email} onChange={handleChange} autoComplete="email" />
                </div>
                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="contact-message" className="form-label">Message <span aria-hidden="true">*</span></label>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`} 
                    value={formData.message} 
                    onChange={handleChange} 
                    aria-invalid={Boolean(errors.message)} 
                    aria-describedby={errors.message ? 'message-error' : 'message-hint'} 
                    rows="5" 
                    minLength="10" 
                    maxLength="2000" 
                    placeholder="Hello Dawit, I'd like to discuss a junior role / project..." 
                    required 
                  />
                  <span id="message-hint" className="form-hint">Minimum 10 characters.</span>
                  {errors.message && <ErrorMessage id="message-error" message={errors.message} />}
                </div>

                {status && (
                  <p className={`form-status ${status.type}`} role="status" aria-live="polite">
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    {status.message}
                  </p>
                )}

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary btn-contact-submit" disabled={isSubmitting}>
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending…' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, value, error, onChange, autoComplete }) {
  const id = `contact-${name}`;
  return (
    <div className={`form-group ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="form-label">{label} <span aria-hidden="true">*</span></label>
      <input 
        id={id} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange} 
        autoComplete={autoComplete} 
        className={`form-input ${error ? 'input-error' : ''}`} 
        aria-invalid={Boolean(error)} 
        aria-describedby={error ? `${name}-error` : undefined} 
        required 
      />
      {error && <ErrorMessage id={`${name}-error`} message={error} />}
    </div>
  );
}

function ErrorMessage({ id, message }) {
  return (
    <span id={id} className="field-error-msg" role="alert">
      <AlertCircle size={14} aria-hidden="true" />
      {message}
    </span>
  );
}
