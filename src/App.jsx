import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './components/Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
          <h3>Home Page</h3>
      </div>
      <Hello />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
