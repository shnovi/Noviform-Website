import React, { useRef, useState } from 'react'

// Real submission endpoint (Formspree / Formspark / own API route).
// Set VITE_CONTACT_ENDPOINT in your .env to enable a true POST.
// If it is not set, we hand off to the visitor's email client via mailto
// so an enquiry is never silently dropped (no false "we received it" promise).
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const FALLBACK_EMAIL = 'hello@noviform.ai'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errors, setErrors] = useState({})

  const nameRef = useRef(null)
  const emailRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[A-Za-z\s'\-]+$/;

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    } else if (!namePattern.test(formData.name.trim())) {
      nextErrors.name = 'Name must contain only letters, spaces, apostrophes, or hyphens.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your work email.';
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid work email.';
    }

    setErrors(nextErrors);
    return nextErrors;
  }

  const focusFirstError = (nextErrors) => {
    if (nextErrors.name && nameRef.current) {
      nameRef.current.focus()
    } else if (nextErrors.email && emailRef.current) {
      emailRef.current.focus()
    }
  }

  const buildMailto = () => {
    const subject = `Enquiry from ${formData.name}${formData.company ? ` (${formData.company})` : ''}`
    const body =
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || '-'}\n\n` +
      `${formData.message || ''}`
    return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return

    const nextErrors = validateForm()
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors)
      return
    }

    // No backend configured: hand the enquiry to the visitor's email client
    // so nothing is lost and no false confirmation is shown.
    if (!ENDPOINT) {
      window.location.href = buildMailto()
      setStatus('success')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section relative-container">
      <div className="container">

        <div className="grid-2 contact-grid">

          {/* Left Column: Invitation + primary call CTA */}
          <div className="contact-info reveal-on-scroll">
            <span className="section-tag">Not sure where to start?</span>
            <h2 className="section-title">Start with a conversation, not a pitch.</h2>
            <p className="section-desc-left">
              Book a short call and you will speak to someone senior, the person who would actually do the work, not a sales team. You will get a straight view on whether we can help and what a sensible first move looks like. If it is not a fit, we will say so.
            </p>

            <div className="contact-call-box">
              <div className="call-box-copy">
                <span className="call-box-eyebrow">The quickest way in</span>
                <p className="call-box-text">A 30 minute introduction. No preparation, no obligation.</p>
              </div>
              <a
                href="https://calendly.com/asheikh-noviform/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent call-box-btn"
              >
                <span>Book a Call</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div className="corporate-details-list">
              <div className="corp-item">
                <span className="corp-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                  </svg>
                </span>
                <div className="corp-text">
                  <span className="corp-label">Based in</span>
                  <span className="corp-value">London, United Kingdom</span>
                </div>
              </div>

              <div className="corp-item">
                <span className="corp-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <div className="corp-text">
                  <span className="corp-label">Email us</span>
                  <a href="mailto:hello@noviform.ai" className="corp-value corp-link">hello@noviform.ai</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: write-first form (secondary path) */}
          <div className="contact-form-wrapper reveal-on-scroll">
            {status !== 'success' ? (
              <div className="card-glass form-card">
                <h3 className="form-card-title">Rather write first?</h3>
                <p className="form-card-desc">Send a short note. Someone senior will read it properly before replying, usually within one business day.</p>

                <form onSubmit={handleSubmit} className="actual-form">
                  <div className="form-group">
                    <label className="form-label required" htmlFor="name">Full Name</label>
                    <input
                      ref={nameRef}
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control ${errors.name ? 'input-error' : ''}`}
                      placeholder="e.g. Elizabeth Mercer"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p className="field-error" id="name-error" role="alert">{errors.name}</p>}
                  </div>

                  <div className="grid-2-form">
                    <div className="form-group">
                      <label className="form-label required" htmlFor="email">Work Email</label>
                      <input
                        ref={emailRef}
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${errors.email ? 'input-error' : ''}`}
                        placeholder="e.g. name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        required
                        aria-required="true"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && <p className="field-error" id="email-error" role="alert">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company Name <span className="optional-label">(optional)</span></label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-control"
                        placeholder="e.g. Your organisation"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">What are you trying to solve?</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="A few lines on where you are and what is getting in the way."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="form-submit-error" role="alert">
                      <p className="form-submit-error-text">
                        Something went wrong sending your note. Please try again, or email us directly at{' '}
                        <a href={`mailto:${FALLBACK_EMAIL}`} className="form-submit-error-link">{FALLBACK_EMAIL}</a>.
                      </p>
                    </div>
                  )}

                  {status === 'submitting' ? (
                    <button type="button" className="btn btn-secondary btn-full-width cursor-wait" disabled>
                      <span className="spinner-mini"></span>
                      <span>Sending...</span>
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary btn-full-width">
                      <span>{status === 'error' ? 'Try Again' : 'Send Enquiry'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </button>
                  )}
                </form>
              </div>
            ) : (
              <div className="card-glass success-card animate-fade-in" role="status" aria-live="polite" aria-label="Enquiry submitted successfully">
                <div className="success-icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" className="teal-check-large">
                    <circle cx="12" cy="12" r="10"/><polyline points="16 9 11 14 8 11"/>
                  </svg>
                </div>
                <h3 className="success-title">We're on it</h3>
                <p className="success-desc">
                  Thanks, <strong>{formData.name}</strong>. Your note is in.
                </p>
                <p className="success-note">
                  Someone senior will reply to <strong>{formData.email}</strong> within one business day. We will read what you sent properly before we come back to you.
                </p>
                <button className="btn btn-secondary" onClick={() => setStatus('idle')}>
                  Send another note
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      <style jsx="true">{`
        .contact-section {
          padding: 80px 0;
          background-color: var(--bg-secondary);
          transition: background-color 0.5s ease;
        }

        .contact-grid {
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .section-desc-left {
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          max-width: 580px;
        }

        /* Primary call CTA */
        .contact-call-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          background-color: var(--bg-primary);
          border: 1px solid var(--accent-gold);
          border-radius: var(--border-radius-md);
          padding: 1.5rem 1.75rem;
          margin-bottom: 3rem;
          box-shadow: var(--glass-shadow);
        }

        .call-box-eyebrow {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 0.35rem;
        }

        .call-box-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          margin: 0;
        }

        .call-box-btn {
          flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .contact-call-box {
            flex-direction: column;
            align-items: stretch;
          }
          .call-box-btn {
            justify-content: center;
          }
        }

        .corporate-details-list {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .corp-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .corp-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--accent-gold);
          box-shadow: var(--glass-shadow);
        }

        .corp-text {
          display: flex;
          flex-direction: column;
        }

        .corp-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .corp-value {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .corp-link {
          position: relative;
          width: max-content;
        }

        .corp-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--accent-gold);
          transition: var(--transition-fast);
        }

        .corp-link:hover {
          color: var(--accent-gold);
        }

        /* Form card */
        .form-card, .success-card {
          padding: 3.5rem;
        }

        @media (max-width: 480px) {
          .form-card, .success-card {
            padding: 2.5rem 1.25rem;
          }
        }

        .form-card-title {
          font-size: 1.75rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }

        .form-label.required::after { content: " *"; color: #ef4444; margin-left: 0.2rem; }

        .optional-label {
          text-transform: none;
          letter-spacing: 0;
          color: var(--text-secondary);
          font-size: 0.72rem;
          font-weight: 400;
          margin-left: 0.35rem;
        }

        .input-error {
          border-color: #ef4444;
        }

        .field-error {
          color: #ef4444;
          font-size: 0.78rem;
          font-weight: 600;
          margin-top: 0.45rem;
        }

        .form-submit-error {
          padding: 0.9rem 1.1rem;
          border-radius: var(--border-radius-sm);
          background-color: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.35);
        }

        .form-submit-error-text {
          margin: 0;
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--text-primary);
        }

        .form-submit-error-link {
          color: #ef4444;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .actual-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .grid-2-form {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 580px) {
          .grid-2-form {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        /* Success card */
        .success-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .success-icon-wrap {
          margin-bottom: 1.5rem;
        }

        .teal-check-large {
          color: var(--accent-teal);
        }

        .success-title {
          font-size: 2rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .success-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 440px;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .success-note {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 440px;
          margin-bottom: 2.5rem;
        }
      `}</style>
    </section>
  )
}
