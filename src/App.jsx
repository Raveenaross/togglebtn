
import { useState } from 'react'
import './App.css'

function App() {

  const [isHappy , setMode] = useState(true)

  const toggleMode = () => {
    setMode(!isHappy)
  }
 
  return (
    <>
     <h1>useStates in Hooks</h1>
     <div className='container'>
     <p onClick={toggleMode} className='toggler'>
      { isHappy ? '😊' : '😂'}
      </p>
      </div>
    </>
  )
}

export default App
