import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseCounter from './components/UseCounter.jsx'
import UseFetch from './components/UseFetch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCounter value={0}/>
    <br />
    <hr />
    <UseFetch />
  </StrictMode>,
)
