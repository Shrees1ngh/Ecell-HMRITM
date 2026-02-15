import { motion } from 'motion/react'
import './Events.css'

const events = [
  { 
    title: 'Pitch Night', 
    date: 'April 18, 2026',
    time: '6:00 PM - 9:00 PM',
    location: 'HMRITM Auditorium',
    detail: 'Top 10 startups present their innovative ideas to a panel of industry investors and venture capitalists.',
    highlights: ['Live Pitching', 'Investor Panel', 'Networking', 'Cash Prizes'],
    category: 'Competition',
    icon: '🚀'
  },
  { 
    title: 'Founder Stories', 
    date: 'May 02, 2026',
    time: '4:00 PM - 6:00 PM',
    location: 'Virtual & Campus',
    detail: 'Candid conversations with successful alumni founders sharing their entrepreneurial journey, challenges, and lessons learned.',
    highlights: ['Alumni Founders', 'Q&A Session', 'Career Insights', 'Mentorship'],
    category: 'Workshop',
    icon: '💡'
  },
  { 
    title: 'Prototype Sprint', 
    date: 'June 12, 2026',
    time: '48 Hours',
    location: 'Innovation Lab',
    detail: '48-hour intensive build marathon where teams create working prototypes with guidance from industry mentors.',
    highlights: ['Team Building', 'Technical Support', 'Mentorship', 'Demo Day'],
    category: 'Hackathon',
    icon: '⚡'
  },
]

function Events() {
  return (
    <section className="events-section" id="events">
      <motion.div 
        className="events-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="events-kicker">WHAT'S HAPPENING</p>
        <h2 className="events-title">Upcoming Events</h2>
      </motion.div>
      
      <div className="scroll-stack">
        {events.map((event, index) => (
          <div key={index} className="stack-item">
            <motion.div 
              className="event-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="event-card-header">
                <div className="event-icon">{event.icon}</div>
                <span className="event-category">{event.category}</span>
              </div>

              <div className="event-content">
                <div className="event-info">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-detail">{event.detail}</p>
                  
                  <div className="event-meta">
                    <div className="meta-item">
                      <span className="meta-icon">📅</span>
                      <span className="meta-text">{event.date}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">⏰</span>
                      <span className="meta-text">{event.time}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📍</span>
                      <span className="meta-text">{event.location}</span>
                    </div>
                  </div>

                  <div className="event-highlights">
                    {event.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                </div>

                <div className="event-cta">
                  <button className="register-btn">Register Now</button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events
