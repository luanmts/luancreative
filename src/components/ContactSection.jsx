import { useState } from 'react'
import contactBackground from '../assets/banner2.jpg'

const initialValues = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  projectDetails: '',
  budget: '',
}

function ContactSection() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }

  function validate() {
    const nextErrors = {}

    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.'
    if (!values.projectType) nextErrors.projectType = 'Choose a project type.'
    if (!values.projectDetails.trim()) nextErrors.projectDetails = 'Tell me a little about your project.'
    if (!values.budget) nextErrors.budget = 'Choose an estimated budget.'

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <img className="contact-background" src={contactBackground} alt="" aria-hidden="true" />
      <div className="contact-overlay" aria-hidden="true" />

      <div className="page-container contact-inner">
        <div className="contact-intro" data-scroll-reveal>
          <p className="contact-label">Let&apos;s build something great</p>
          <h2 id="contact-title">Get in touch.</h2>
          <p>
            Tell me a little about your project, your goals and what you&apos;re
            looking to build. I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate data-scroll-reveal data-reveal-delay="1">
          <div className="contact-fields contact-fields--split">
            <div className="contact-field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                value={values.name}
                onChange={updateField}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                autoComplete="name"
              />
              {errors.name && <span id="contact-name-error" className="field-error">{errors.name}</span>}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={values.email}
                onChange={updateField}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                autoComplete="email"
              />
              {errors.email && <span id="contact-email-error" className="field-error">{errors.email}</span>}
            </div>
          </div>

          <div className="contact-fields contact-fields--split">
            <div className="contact-field">
              <label htmlFor="contact-company">Company / Brand</label>
              <input
                id="contact-company"
                name="company"
                value={values.company}
                onChange={updateField}
                autoComplete="organization"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-project-type">Project type</label>
              <select
                id="contact-project-type"
                name="projectType"
                value={values.projectType}
                onChange={updateField}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={errors.projectType ? 'contact-project-type-error' : undefined}
              >
                <option value="">Select an option</option>
                <option>Website Design</option>
                <option>Website Development</option>
                <option>Design + Development</option>
                <option>Landing Page</option>
                <option>Redesign</option>
                <option>Other</option>
              </select>
              {errors.projectType && <span id="contact-project-type-error" className="field-error">{errors.projectType}</span>}
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-project-details">Tell me about your project</label>
            <textarea
              id="contact-project-details"
              name="projectDetails"
              value={values.projectDetails}
              onChange={updateField}
              aria-invalid={Boolean(errors.projectDetails)}
              aria-describedby={errors.projectDetails ? 'contact-project-details-error' : undefined}
              rows="3"
            />
            {errors.projectDetails && <span id="contact-project-details-error" className="field-error">{errors.projectDetails}</span>}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-budget">Estimated budget</label>
            <select
              id="contact-budget"
              name="budget"
              value={values.budget}
              onChange={updateField}
              aria-invalid={Boolean(errors.budget)}
              aria-describedby={errors.budget ? 'contact-budget-error' : undefined}
            >
              <option value="">Select an option</option>
              <option>Under $1,000</option>
              <option>$1,000 – $2,500</option>
              <option>$2,500 – $5,000</option>
              <option>$5,000 – $10,000</option>
              <option>$10,000+</option>
            </select>
            {errors.budget && <span id="contact-budget-error" className="field-error">{errors.budget}</span>}
          </div>

          <button type="submit">Send Inquiry</button>
          {submitted && (
            <p className="form-success" role="status">
              Thanks — your inquiry is ready to be sent.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactSection
