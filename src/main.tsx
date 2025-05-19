import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/reset.css'
import './css/index.css'
import App from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
