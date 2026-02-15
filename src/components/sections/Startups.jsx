import { useState } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import './Startups.css'

const startups = [
  {
    name: 'Voltify Labs',
    logo: '⚡',
    focus: 'Clean Energy Solutions',
    description: 'Developing sustainable and affordable clean energy solutions for campus housing and residential communities.',
    category: 'CleanTech',
    stage: 'Seed Stage',
    founder: 'Rajesh Kumar',
    year: '2024',
    tags: ['Solar Power', 'IoT', 'Energy Management'],
    website: '#',
    linkedin: '#'
  },
  {
    name: 'SkillSprint',
    logo: '🎓',
    focus: 'Micro-Learning Platform',
    description: 'AI-powered micro-learning platform focused on industry readiness and skill development for students and professionals.',
    category: 'EdTech',
    stage: 'MVP',
    founder: 'Priya Sharma',
    year: '2024',
    tags: ['AI', 'Education', 'Career Development'],
    website: '#',
    linkedin: '#'
  },
  {
    name: 'FarmGrid',
    logo: '🌾',
    focus: 'Smart Supply Chain',
    description: 'Connecting regional farmers directly to consumers and retailers through an intelligent supply chain management system.',
    category: 'AgriTech',
    stage: 'Growth',
    founder: 'Amit Verma',
    year: '2023',
    tags: ['Supply Chain', 'Agriculture', 'Logistics'],
    website: '#',
    linkedin: '#'
  },
  {
    name: 'HealthBridge',
    logo: '🏥',
    focus: 'Telemedicine Platform',
    description: 'Making quality healthcare accessible through telemedicine services connecting patients with verified doctors across India.',
    category: 'HealthTech',
    stage: 'Seed Stage',
    founder: 'Dr. Neha Patel',
    year: '2024',
    tags: ['Healthcare', 'Telemedicine', 'Digital Health'],
    website: '#',
    linkedin: '#'
  },
  {
    name: 'EcoWrap',
    logo: '♻️',
    focus: 'Sustainable Packaging',
    description: 'Creating biodegradable and eco-friendly packaging solutions to replace single-use plastics in food and e-commerce industries.',
    category: 'CleanTech',
    stage: 'MVP',
    founder: 'Arjun Singh',
    year: '2024',
    tags: ['Sustainability', 'Packaging', 'Circular Economy'],
    website: '#',
    linkedin: '#'
  },
  {
    name: 'CodeCraft Academy',
    logo: '💻',
    focus: 'Coding Education',
    description: 'Interactive coding bootcamps and mentorship programs preparing students for tech careers with hands-on projects.',
    category: 'EdTech',
    stage: 'Growth',
    founder: 'Vikram Reddy',
    year: '2023',
    tags: ['Programming', 'Bootcamp', 'Career Training'],
    website: '#',
    linkedin: '#'
  },
  {
    name: 'UrbanGrow',
    logo: '🌱',
    focus: 'Urban Farming',
    description: 'Innovative hydroponic farming solutions enabling urban communities to grow fresh produce in limited spaces.',
    category: 'AgriTech',
    stage: 'Seed Stage',
    founder: 'Sneha Gupta',
    year: '2024',
    tags: ['Hydroponics', 'Urban Farming', 'Food Security'],
    website: '#',
    linkedin: '#'
  },
  {
    name: 'PayEase',
    logo: '💳',
    focus: 'Digital Payments',
    description: 'Simplified digital payment solutions for small businesses and local vendors with multilingual support and low transaction fees.',
    category: 'FinTech',
    stage: 'MVP',
    founder: 'Rohit Jain',
    year: '2024',
    tags: ['Payments', 'Financial Inclusion', 'SMB'],
    website: '#',
    linkedin: '#'
  },
  {
    name: 'StyleAI',
    logo: '👗',
    focus: 'Fashion Tech',
    description: 'AI-powered personal styling and virtual try-on platform helping users discover fashion that fits their personality.',
    category: 'Fashion Tech',
    stage: 'Seed Stage',
    founder: 'Ananya Chopra',
    year: '2024',
    tags: ['AI', 'Fashion', 'E-commerce'],
    website: '#',
    linkedin: '#'
  }
]

const categories = ['All', 'EdTech', 'CleanTech', 'AgriTech', 'HealthTech', 'FinTech', 'Fashion Tech']

function Startups() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredStartups = activeFilter === 'All' 
    ? startups 
    : startups.filter(startup => startup.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="startups-section" id="startups">
      <div className="startups-container">
        
        {/* Header */}
        <motion.div 
          className="startups-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="startups-kicker">OUR PORTFOLIO</p>
          <h2 className="startups-title">Startup Showcase</h2>
          <p className="startups-description">
            Meet the innovative startups incubated at E-Cell HMRITM. These ventures are transforming industries
            and solving real-world problems with cutting-edge technology and entrepreneurial spirit.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="startups-filters"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Startups Grid */}
        <motion.div 
          className="startups-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredStartups.map((startup, index) => (
            <motion.div
              key={startup.name}
              className="startup-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="startup-card-header">
                <div className="startup-logo">{startup.logo}</div>
                <div className="startup-header-info">
                  <h3 className="startup-name">{startup.name}</h3>
                  <span className="startup-stage">
                    <span>•</span>
                    {startup.stage}
                  </span>
                </div>
              </div>

              <div className="startup-card-body">
                <p className="startup-focus">{startup.focus}</p>
                <p className="startup-description">{startup.description}</p>

                <div className="startup-meta">
                  <div className="meta-row">
                    <span className="meta-icon">📂</span>
                    <span className="meta-label">Category:</span>
                    <span className="meta-value">{startup.category}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-icon">📅</span>
                    <span className="meta-label">Founded:</span>
                    <span className="meta-value">{startup.year}</span>
                  </div>
                </div>

                <div className="startup-tags">
                  {startup.tags.map((tag, idx) => (
                    <span key={idx} className="startup-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="startup-card-footer">
                <div className="startup-founder">
                  By <span className="founder-name">{startup.founder}</span>
                </div>
                <div className="startup-links">
                  <motion.a 
                    href={startup.website}
                    className="startup-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Website"
                  >
                    🌐
                  </motion.a>
                  <motion.a 
                    href={startup.linkedin}
                    className="startup-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="LinkedIn"
                  >
                    💼
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="startups-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="cta-title">Have a Startup Idea?</h3>
          <p className="cta-description">
            Join E-Cell HMRITM and turn your vision into reality. Get access to mentorship,
            resources, and a network of entrepreneurs ready to support your journey.
          </p>
          <motion.button 
            className="cta-button"
            onClick={() => navigate('/join')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Incubation
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}

export default Startups
