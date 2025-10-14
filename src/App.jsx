import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(count + 1)} style={{ marginLeft: '10px' }}>
        Increase
      </button>
    </div>
  )
}

export default App
