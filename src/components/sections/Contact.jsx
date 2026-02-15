function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2>Let us build together</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Visit the E-Cell Office</h3>
          <p>HMR Institute of Technology and Management, New Delhi</p>
          <p>Email: ecell@hmritm.edu.in</p>
          <p>Phone: +91 90000 00000</p>
          <div className="contact-cta">We respond within 48 hours.</div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Your idea" />
          <textarea rows="4" placeholder="Tell us more" />
          <button type="button" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
