import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiRefreshCw } from 'react-icons/fi'
import VideoPlayer from '../components/VideoPlayer'
import TranscriptViewer from '../components/TranscriptViewer'
import { useVideo } from '../context/VideoContext'
import './PreviewPage.css'

function PreviewPage() {
  const [activeTab, setActiveTab] = useState('script')
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
          <FiRefreshCw />
          <span>Refresh Voiceover</span>
        </motion.button>
      </div>

      <div className="preview-content">
        <div className="video-section">
          <VideoPlayer src={processedVideoUrl} />
        </div>
        
        <div className="editor-section">
          {activeTab === 'script' && (
            <TranscriptViewer sheetLink={sheetLink} />
          )}
          {activeTab === 'aiVoice' && (
            <div className="coming-soon">AI Voice features coming soon</div>
          )}
          {activeTab === 'zoom' && (
            <div className="coming-soon">Zoom features coming soon</div>
          )}
          {activeTab === 'aiAvatar' && (
            <div className="coming-soon">AI Avatar features coming soon</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PreviewPage