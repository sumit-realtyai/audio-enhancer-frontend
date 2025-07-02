import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiVideo, FiEdit3, FiZap, FiPlay, FiArrowRight, FiMonitor, FiStar } from 'react-icons/fi'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
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
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <div className="landing-page">
      <motion.div 
        className="landing-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section className="hero-section" variants={itemVariants}>
          <div className="hero-content">
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <FiStar className="badge-icon" />
              <span>All-in-One Video Platform</span>
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Record, Edit & Enhance Videos with 
              <span className="gradient-text"> AI-Powered Features</span>
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              This platform allows you to record, edit, and enhance videos using AI-powered features — all in one place. 
              Create professional-quality content with our intuitive tools and cutting-edge technology.
            </motion.p>

            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              <div className="stat-item">
                <FiVideo className="stat-icon" />
                <span>Screen Recording</span>
              </div>
              <div className="stat-item">
                <FiEdit3 className="stat-icon" />
                <span>Video Editing</span>
              </div>
              <div className="stat-item">
                <FiZap className="stat-icon" />
                <span>AI Enhancement</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Features Section */}
        <motion.section className="features-section" variants={itemVariants}>
          <div className="features-grid">
            {/* Screen Recording & Editing Card */}
            <motion.div 
              className="feature-card recording-card"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => navigate('/videoeditor')}
            >
              <div className="card-header">
                <div className="card-icon recording-icon">
                  <FiMonitor />
                </div>
                <div className="card-badge">Editor</div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">Screen Recording & Editing</h3>
                <p className="card-description">
                  Record your screen and edit videos with powerful built-in tools. 
                  Add zoom effects, transitions, and professional touches to create 
                  engaging content effortlessly.
                </p>
                
                <div className="card-features">
                  <div className="feature-item">
                    <FiPlay className="feature-icon" />
                    <span>Screen Recording</span>
                  </div>
                  <div className="feature-item">
                    <FiEdit3 className="feature-icon" />
                    <span>Timeline Editing</span>
                  </div>
                  <div className="feature-item">
                    <FiZap className="feature-icon" />
                    <span>Auto Zoom Effects</span>
                  </div>
                </div>
              </div>
              
              <motion.button 
                className="card-button primary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Open Video Editor</span>
                <FiArrowRight className="button-icon" />
              </motion.button>
            </motion.div>

            {/* Video Enhancer Card */}
            <motion.div 
              className="feature-card enhancer-card"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => navigate('/video-enhancer')}
            >
              <div className="card-header">
                <div className="card-icon enhancer-icon">
                  <FiZap />
                </div>
                <div className="card-badge">AI Powered</div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">Video Enhancer</h3>
                <p className="card-description">
                  Enhance your videos using cutting-edge AI technology for clarity and style. 
                  Transform ordinary footage into professional-quality content with intelligent 
                  voice replacement and audio enhancement.
                </p>
                
                <div className="card-features">
                  <div className="feature-item">
                    <FiZap className="feature-icon" />
                    <span>AI Voice Replacement</span>
                  </div>
                  <div className="feature-item">
                    <FiEdit3 className="feature-icon" />
                    <span>Audio Enhancement</span>
                  </div>
                  <div className="feature-item">
                    <FiVideo className="feature-icon" />
                    <span>Quality Upscaling</span>
                  </div>
                </div>
              </div>
              
              <motion.button 
                className="card-button secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Use Video Enhancer</span>
                <FiArrowRight className="button-icon" />
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Additional Info Section */}
        <motion.section className="info-section" variants={itemVariants}>
          <div className="info-content">
            <h2 className="info-title">Why Choose Our Platform?</h2>
            <div className="info-grid">
              <div className="info-item">
                <FiZap className="info-icon" />
                <h4>AI-Powered</h4>
                <p>Leverage cutting-edge AI technology for automatic enhancements and intelligent editing.</p>
              </div>
              <div className="info-item">
                <FiEdit3 className="info-icon" />
                <h4>Professional Tools</h4>
                <p>Access professional-grade editing features with an intuitive, user-friendly interface.</p>
              </div>
              <div className="info-item">
                <FiVideo className="info-icon" />
                <h4>All-in-One</h4>
                <p>Record, edit, and enhance all in one platform. No need for multiple applications.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default LandingPage