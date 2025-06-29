import { Routes, Route } from 'react-router-dom'
import UploadPage from './pages/UploadPage'
import PreviewPage from './pages/PreviewPage'
import NotFoundPage from './pages/NotFoundPage'
import VideoEditorPage from './pages/VideoEditorPage'
import Layout from './components/Layout'
import WelcomePopup from './components/WelcomePopup'
import './App.css'

function App() {
  return (
    <Layout>
      <WelcomePopup />
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/videoeditor" element={<VideoEditorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App