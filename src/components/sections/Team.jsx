import './Team.css'
import shreeImage from '../../assets/team/shree.jpeg'

const coreTeam = [
  {
    id: 2,
    name: 'Shree Bhagwan',
    role: 'Website Developer',
    image: shreeImage,
    socials: {
      linkedin: 'https://www.linkedin.com/in/shreebhagwan/',
      instagram: 'https://www.instagram.com/shree_s1ngh/',
      github: 'https://github.com/Shrees1ngh'
    }
  },
  {
    id: 1,
    name: 'team member 2',
    role: 'Website Developer',
    image: '',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'team member 3',
    role: 'Technical Head',
    image: '',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'Team Member 4',
    role: 'R&D Lead',
    image: '',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#'
    }
  },
  {
    id: 5,
    name: 'Team Member 5',
    role: 'Event Coordinator',
    image: '',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#'
    }
  },
  {
    id: 6,
    name: 'Team Member 6',
    role: 'Operations Lead',
    image: '',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#'
    }
  },
  {
    id: 7,
    name: 'Team Member 7',
    role: 'Sponsorship Lead',
    image: '',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#'
    }
  },
  {
    id: 8,
    name: 'Team Member 8',
    role: 'Content Lead',
    image: '',
    socials: {
      linkedin: '#',
      instagram: '#',
      github: '#'
    }
  },
]

function Team() {
  return (
    <>
      <div className="committee-header">
        <h1 className="committee-title">CORE TEAM</h1>
      </div>

      <div className="committee-content">
        <div className="team-grid">
          {coreTeam.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="member-image"
                />
                <div className="member-socials-overlay">
                  <a href={member.socials.linkedin} className="social-icon-overlay linkedin" title="LinkedIn">
                    <img src="https://img.freepik.com/premium-vector/linkedin-logo-icon_1273375-1174.jpg" alt="LinkedIn" />
                  </a>
                  <a href={member.socials.instagram} className="social-icon-overlay instagram" title="Instagram">
                    <img src="https://img.freepik.com/premium-vector/instagram-logo-icon_1273375-1177.jpg" alt="Instagram" />
                  </a>
                  <a href={member.socials.github} className="social-icon-overlay github" title="GitHub">
                    <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="GitHub" />
                  </a>
                </div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Team
