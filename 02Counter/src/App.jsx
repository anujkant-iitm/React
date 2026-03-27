import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((prevCount) => prevCount +1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((prevCount) => prevCount > 0 ? prevCount - 1 : prevCount)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
