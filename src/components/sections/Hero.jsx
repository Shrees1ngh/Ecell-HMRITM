import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import CountUp from 'react-countup'
import DecryptedText from '../DecryptedText'
import './Hero.css'

function Hero({ startDecrypt = true }) {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const features = [
    {
      icon: '🚀',
      title: 'Launch Your Startup',
      description: 'Turn your innovative ideas into successful ventures with expert guidance'
    },
    {
      icon: '🤝',
      title: 'Network & Collaborate',
      description: 'Connect with founders, investors, and industry leaders'
    },
    {
      icon: '🎓',
      title: 'Learn & Grow',
      description: 'Access workshops, bootcamps, and mentorship programs'
    },
    {
      icon: '💡',
      title: 'Get Funded',
      description: 'Pitch to investors and secure funding for your startup'
    }
  ]

  const achievements = [
    { value: '₹10L+', label: 'Funding Secured' },
    { value: '25+', label: 'Industry Mentors' },
    { value: '15+', label: 'Successful Exits' }
  ]

  return (
    <section className="hero-section" id="home">
      {/* Floating Particles */}
      <div className="hero-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="hero-badge">
          <span className="hero-badge-icon"></span>
          <span>Building Tomorrow's Founders</span>
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="hero-title-container">
          <h1 className="hero-main-title">
            <span className="hero-title-line">
              <DecryptedText
                text="Entrepreneurship Cell"
                animateOn="load"
                startOn={startDecrypt}
                sequential
                speed={35}
                maxIterations={12}
                className="hero-title-revealed"
                encryptedClassName="hero-title-encrypted"
              />
            </span>
            <span className="hero-title-line">
              <DecryptedText
                text="HMRITM"
                animateOn="load"
                startOn={startDecrypt}
                sequential
                speed={35}
                maxIterations={12}
                className="hero-title-revealed"
                encryptedClassName="hero-title-encrypted"
              />
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="hero-subtitle-text">
          Empowering students to transform innovative ideas into successful startups through mentorship, resources, and a thriving entrepreneurial ecosystem
        </motion.p>

        {/* Stats */}
        <motion.div variants={itemVariants} className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">
              <CountUp end={50} duration={2.5} enableScrollSpy scrollSpyOnce />+
            </span>
            <span className="hero-stat-label">Startups</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">
              <CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce />+
            </span>
            <span className="hero-stat-label">Events</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">
              <CountUp end={500} duration={2.5} enableScrollSpy scrollSpyOnce />+
            </span>
            <span className="hero-stat-label">Members</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="hero-cta-group">
          <motion.button 
            className="hero-btn hero-btn-primary"
            onClick={() => navigate('/join')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join E-Cell
          </motion.button>
          <motion.button 
            className="hero-btn hero-btn-secondary"
            onClick={() => navigate('/events')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Events
          </motion.button>
        </motion.div>

        {/* Our Initiatives */}
        <motion.div 
          variants={itemVariants}
          className="hero-initiatives"
        >
          <h3 className="initiatives-title">Our Initiatives</h3>
          <div className="initiatives-tags">
            <span className="initiative-tag">Startup Incubation</span>
            <span className="initiative-tag">Pitch Competitions</span>
            <span className="initiative-tag">Founder Meetups</span>
            <span className="initiative-tag">Mentorship Programs</span>
            <span className="initiative-tag">Innovation Labs</span>
            <span className="initiative-tag">Industry Connections</span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={itemVariants}
          className="hero-features"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="hero-feature-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Banner */}
        <motion.div 
          variants={itemVariants}
          className="hero-achievements"
        >
          <div className="achievements-container">
            <div className="achievements-header">
              <h3 className="achievements-title">Our Impact</h3>
              <p className="achievements-subtitle">Building success stories since inception</p>
            </div>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="achievement-value">{achievement.value}</span>
                  <span className="achievement-label">{achievement.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial/Quote */}
        <motion.div 
          variants={itemVariants}
          className="hero-quote"
        >
          <div className="quote-content">
            <div className="quote-icon">"</div>
            <p className="quote-text">
              E-Cell HMRITM is where ideas meet execution. We provide the perfect platform for aspiring entrepreneurs to learn, connect, and build their dreams.
            </p>
            <div className="quote-author">
              <span className="author-name">E-Cell Team</span>
              <span className="author-role">HMRITM</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          variants={itemVariants}
          className="hero-scroll-indicator"
        >
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
