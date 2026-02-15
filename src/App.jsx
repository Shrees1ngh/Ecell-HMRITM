import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DotGrid from './components/DotGrid'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Events from './components/sections/Events'
import Footer from './components/sections/Footer'
import Hero from './components/sections/Hero'
import JoinUs from './components/sections/JoinUs'
import Startups from './components/sections/Startups'
import Team from './components/sections/Team'
import LoadingScreen from './components/LoadingScreen'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <Router>
        <div className="page">
          <ScrollToTop />
          <DotGrid
            className="page-dot-grid"
            baseColor="#1a1d22"
            activeColor="#3a3f46"
            dotSize={10}
            gap={22}
            proximity={130}
          />
          <div className="page-content">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Hero startDecrypt={!isLoading} />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/startups" element={<Startups />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/join" element={<JoinUs />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
