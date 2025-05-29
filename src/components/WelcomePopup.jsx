import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <div className="welcome-header">
            <h2 className="welcome-title">Welcome to Screenify</h2>
            <p className="welcome-subtitle">A powerful screen recording tool by RealtyAI</p>
          </div>
          
          <ul className="features-list">
            <li>Automatic zoom-in effects for engaging content</li>
            <li>Smart auto-captioning for better accessibility</li>
            <li>Professional-grade video processing</li>
          </ul>
          
          <a 
            href="https://realtyai.in/screenify" 
            className="download-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Download Screenify
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default WelcomePopup