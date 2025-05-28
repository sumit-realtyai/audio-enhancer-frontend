import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiRefreshCw } from 'react-icons/fi'
import VideoPlayer from '../components/VideoPlayer'
import TranscriptViewer from '../components/TranscriptViewer'
import { useVideo } from '../context/VideoContext'
import './PreviewPage.css'

function PreviewPage() {
  const [activeTab, setActiveTab] = useState('script')
  const [selectedVoice, setSelectedVoice] = useState('anshul')
  const { 
    processedVideoUrl,
    voiceoverProcessing,
    refreshVoiceover,
    sheetLink
  } = useVideo()

  const tabs = [
    { id: 'script', label: 'Script' },
    { id: 'aiVoice', label: 'AI Voice' },
    { id: 'zoom', label: 'Zoom' },
    { id: 'aiAvatar', label: 'AI Avatar' }
  ]

  return (
    <div className="preview-page">
      <div className="preview-header">
        <div className="tabs-container">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <motion.button
          className="refresh-button"
          onClick={refreshVoiceover}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={voiceoverProcessing}
        >
          <FiRefreshCw className={voiceoverProcessing ? 'spinning' : ''} />
          <span>{voiceoverProcessing ? 'Processing...' : 'Refresh Voiceover'}</span>
        </motion.button>
      </div>

      <div className="preview-content">
        <div className="editor-section">
          {activeTab === 'script' && (
            <TranscriptViewer sheetLink={sheetLink} />
          )}
          {activeTab === 'aiVoice' && (
            <div className="voice-selector">
              <select 
                className="voice-dropdown"
                value={selectedVoice}
                onChange={(e) => setSelectedVoice(e.target.value)}
              >
                <option value="anshul">Anshul</option>
                <option value="ai">AI Voice</option>
              </select>
            </div>
          )}
          {activeTab === 'zoom' && (
            <div className="coming-soon">Zoom features coming soon</div>
          )}
          {activeTab === 'aiAvatar' && (
            <div className="coming-soon">AI Avatar features coming soon</div>
          )}
        </div>
        
        <div className="video-section">
          <AnimatePresence mode="wait">
            {voiceoverProcessing ? (
              <motion.div 
                className="video-processing-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="processing-spinner" />
                <p>Generating new video with selected voice...</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="video-player"
              >
                <VideoPlayer src={processedVideoUrl} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default PreviewPage