import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiUpload } from 'react-icons/fi'
import VideoUploader from '../components/VideoUploader'
import ProcessingIndicator from '../components/ProcessingIndicator'
import { useVideo } from '../context/VideoContext'
import './UploadPage.css'

function UploadPage() {
  const navigate = useNavigate()
  const { videoFile, processing, processVideo } = useVideo()
  
  const handleProcessVideo = async () => {
    await processVideo()
    navigate('/preview')
  }
  
  return (
    <div className="upload-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1>Upload Your Video</h1>
        <p className="page-description">
          Upload a video to process. We'll generate a transcript and allow you to change the voiceover.
        </p>
      </motion.div>
      
      <div className="upload-section">
        <VideoUploader />
        
        {processing ? (
          <ProcessingIndicator text="Processing your video. This may take a few moments..." />
        ) : (
          <motion.button
            className={`btn btn-primary btn-icon ${!videoFile ? 'btn-disabled' : ''}`}
            disabled={!videoFile || processing}
            onClick={handleProcessVideo}
            whileHover={videoFile && !processing ? { scale: 1.02 } : {}}
            whileTap={videoFile && !processing ? { scale: 0.98 } : {}}
          >
            <FiUpload />
            <span>Process Video</span>
          </motion.button>
        )}
      </div>
    </div>
  )
}

export default UploadPage