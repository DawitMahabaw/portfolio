import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Permanently lock into dark mode
document.documentElement.setAttribute('data-theme', 'dark');
try {
  localStorage.setItem('portfolio-theme', 'dark');
} catch {
  // Ignore localStorage errors
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
