import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Header.css'

function Header() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  // Don't show header on landing page
  if (isLandingPage) {
    return null
  }

  return (
    <header className="header">
      <div className="header-content">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" className="logo-link">
            VoiceSwap
          </Link>
        </motion.div>
        
        <motion.nav 
          className="nav"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/video-enhancer" className="nav-link">Video Enhancer</Link>
          <Link to="/videoeditor" className="nav-link">Video Editor</Link>
        </motion.nav>
      </div>
    </header>
  )
}

export default Header