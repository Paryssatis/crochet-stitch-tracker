import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [stitchesPerRow, setStitchesPerRow] = useState<number[]>([]) // generics (research)

  function increment() {
    setCount(()=> count + 1)
  }

  function save() {
    const newStitchesPerRow = [...stitchesPerRow, count]
    setStitchesPerRow(newStitchesPerRow)
    setCount(0)
  }

  function reset(e) {
    if (!confirm('Are you sure?')) {
      e.preventDefault();
    } else {
      setStitchesPerRow([])
      setCount(0)
    }
  }

  return (
    <>
      <h1 className="title">Crochet Stitch Counter</h1>
      <div className="container">
        <div className="child">
          <h1>Stitches entered:</h1>
          <h2 id="count-el">{count}</h2>
          <button id="increment-btn" onClick={increment}>STITCH</button>
          <button id="save-btn" onClick={save}>NEXT ROW</button>
          <button id="reset-btn" onClick={reset}>CLEAR ENTRIES</button>
          <p id="save-el">Stitches Finished per Row:</p>
          <div>
            {stitchesPerRow.join(", ")}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
