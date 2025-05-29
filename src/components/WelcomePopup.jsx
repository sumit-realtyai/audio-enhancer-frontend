import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiX, FiMonitor, FiZoomIn, FiMessageCircle, FiDownload } from 'react-icons/fi'
import './WelcomePopup.css'

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div 
        className="welcome-popup-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="welcome-popup"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <button 
            className="close-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close popup"
          >
            <FiX />
          </button>

          <div className="welcome-header">
            <div className="logo-container">
              <FiMonitor className="logo-icon" />
            </div>
            <h2 className="welcome-title">Welcome to Screenify</h2>
            <p className="welcome-subtitle">A powerful screen recording tool by RealtyAI</p>
          </div>
          
          <div className="features-list">
            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">
                <FiZoomIn />
              </div>
              <span className="feature-text">Automatic zoom-in effects</span>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">
                <FiMessageCircle />
              </div>
              <span className="feature-text">Smart auto-captioning</span>
            </motion.div>
          </div>
          
          <motion.a 
            href="https://realtyai.in/screenify" 
            className="download-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FiDownload className="download-icon" />
            <span>Download Screenify</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default WelcomePopup