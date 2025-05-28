import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiRefreshCw } from 'react-icons/fi'
import { useVideo } from '../context/VideoContext'
import VideoPlayer from '../components/VideoPlayer'
import TranscriptViewer from '../components/TranscriptViewer'
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
        
        <button
          className="refresh-button"
          onClick={refreshVoiceover}
          disabled={voiceoverProcessing}
        >
          <FiRefreshCw />
          <span>Refresh Voiceover</span>
        </button>
      </div>

      <div className="preview-content">
        <div className="editor-section">
          {activeTab === 'script' && (
            <TranscriptViewer sheetLink={sheetLink} />
          )}
          {activeTab === 'aiVoice' && (
            <div className="voice-selector">
              <select 
                value={selectedVoice}
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="voice-dropdown"
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
          <VideoPlayer src={processedVideoUrl} />
        </div>
      </div>
    </div>
  )
}

export default PreviewPage