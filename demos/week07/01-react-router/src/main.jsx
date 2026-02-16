import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* makes it work */}
    {/* provides 'context' to your application about what the url is and other stuff */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
