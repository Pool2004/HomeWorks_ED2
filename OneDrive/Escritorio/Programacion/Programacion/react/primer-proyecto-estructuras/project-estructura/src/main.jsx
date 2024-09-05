import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { TaskChallenge } from './assets/components/TaskChallenge.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskChallenge/>
  </StrictMode>,
)
