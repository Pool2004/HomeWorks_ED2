import { useState } from 'react'
import '../public/styles/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <span>10</span>
    </>
  )
}

export default App
