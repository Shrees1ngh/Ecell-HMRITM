import './JoinUs.css'

function JoinUs() {
  return (
    <section className="join-section">
      <div className="join-hero">
        <h1>
          Join <span>E-Cell</span>
        </h1>
        <p>Be part of India's most vibrant entrepreneurship community.</p>
      </div>

      <div className="join-card">
        <h2>Personal Information</h2>
        <div className="join-grid">
          <div className="form-field">
            <label htmlFor="fullName">Full Name *</label>
            <input id="fullName" type="text" placeholder="Enter your full name" />
          </div>
          <div className="form-field">
            <label htmlFor="enrollment">Enrollment Number *</label>
            <input id="enrollment" type="text" placeholder="Enter your enrollment number" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email *</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone Number *</label>
            <input id="phone" type="tel" placeholder="10 digit number" />
          </div>
          <div className="form-field">
            <label htmlFor="college">College/University *</label>
            <input id="college" type="text" placeholder="Enter your institution name" />
          </div>
          <div className="form-field">
            <label htmlFor="year">Year of Study *</label>
            <select id="year" defaultValue="">
              <option value="" disabled>Select your year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Final Year</option>
              <option value="pg">Postgraduate</option>
            </select>
          </div>
          <div className="form-field full">
            <label htmlFor="domain">Preferred Domain *</label>
            <select id="domain" defaultValue="">
              <option value="" disabled>Select domain</option>
              <option value="operations">Operations</option>
              <option value="marketing">Marketing</option>
              <option value="design">Design</option>
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
              <option value="content">Content</option>
            </select>
          </div>
        </div>

        <div className="join-upload">
          <h3>Upload Your Resume</h3>
          <div className="upload-box">
            <input id="resume" type="file" />
            <p>Click to upload your resume</p>
            <span>PDF, DOC, or DOCX (Max 5MB)</span>
          </div>
        </div>

        <div className="join-idea">
          <h3>Pitch Your Startup Idea (Optional)</h3>
          <div className="join-grid">
            <div className="form-field full">
              <label htmlFor="ideaTitle">Idea Title</label>
              <input id="ideaTitle" type="text" placeholder="Your startup idea name" />
            </div>
            <div className="form-field full">
              <label htmlFor="ideaDesc">Describe Your Idea</label>
              <textarea
                id="ideaDesc"
                rows="5"
                placeholder="Tell us about your startup idea, the problem it solves, and how you plan to execute it."
              />
            </div>
            <div className="form-field full">
              <label htmlFor="team">Team Members (if any)</label>
              <input id="team" type="text" placeholder="Names of your co-founders or team members" />
            </div>
          </div>
        </div>

        <button type="button" className="join-submit">
          Submit Application
        </button>
      </div>
    </section>
  )
}

export default JoinUs
