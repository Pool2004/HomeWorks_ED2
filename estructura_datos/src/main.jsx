import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrimerChallenge from './components/PrimerChallenge.jsx'
import { SegundoChallenge } from './components/SegundoChallenge.jsx'
import './public/styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SegundoChallenge valorLlegada={0} />
  </StrictMode>,
)
