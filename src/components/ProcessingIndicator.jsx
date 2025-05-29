import { motion } from 'framer-motion'
import './ProcessingIndicator.css'

function ProcessingIndicator({ text = 'Processing...' }) {
  return (
    <div className="processing-container">
      <motion.div 
        className="processing-spinner"
        animate={{ rotate: 360 }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5, 
          ease: "linear" 
        }}
      />
      
      <motion.div 
        className="processing-bar-container"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="processing-bar"
          initial={{ width: '5%' }}
          animate={{ width: '100%' }}
          transition={{ 
            duration: 3, 
            ease: [0.4, 0.0, 0.2, 1] 
          }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="processing-text">{text}</p>
      </motion.div>
    </div>
  )
}