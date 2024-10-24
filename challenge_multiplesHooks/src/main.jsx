import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseFetch from './components/UseFetch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseFetch />
  </StrictMode>,
)
