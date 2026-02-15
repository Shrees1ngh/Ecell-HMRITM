import { motion } from 'motion/react'
import CountUp from 'react-countup'
import './About.css'

const stats = [
  { num: 50, text: 'Workshops Conducted' },
  { num: 20, text: 'Startup Ideas Incubated' },
  { num: 500, text: 'Students Engaged' },
  { num: 15, text: 'Industry Mentors' },
]

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <h2 className="about-title">About E-Cell HMRITM</h2>
          <p className="about-description">
            Entrepreneurship Cell of HMR Institute of Technology & Management is a
            student-driven initiative dedicated to building a strong startup culture.
            We organize workshops, hackathons, startup bootcamps, mentorship sessions,
            and networking events to help students turn innovative ideas into successful businesses.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="stat-card"
            >
              <span className="stat-number">
                <CountUp end={item.num} duration={3} enableScrollSpy scrollSpyOnce />+
              </span>
              <span className="stat-text">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Mission Vision */}
        <div className="mission-vision">
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mission-card"
          >
            <h3 className="mission-title">
              <span>🚀</span>
              <span>Our Mission</span>
            </h3>
            <p className="mission-text">
              To inspire students to think innovatively, build startups, and
              develop leadership skills by providing real-world entrepreneurial exposure.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="vision-card"
          >
            <h3 className="vision-title">
              <span>🌟</span>
              <span>Our Vision</span>
            </h3>
            <p className="vision-text">
              To build a strong startup ecosystem at HMRITM where every student
              gets the opportunity to innovate, collaborate, and create impact.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
