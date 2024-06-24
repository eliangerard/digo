import { wordlist } from './assets/index';
import { useTts } from 'tts-react'
import './App.css'
import { useState } from 'react';

function App() {

  const [rate, setRate] = useState(0.8)
  const [index, setIndex] = useState(Math.random() * wordlist.length | 0)

  const word = wordlist[index];
  const { play } = useTts({
    children: word,
    markTextAsSpoken: true,
    rate,
  })

  return (
    <>
      <p>
        {
          word
        }
      </p>
      <button
        onClick={play}
      >Play</button>
      <button
        onClick={() => setIndex(Math.random() * wordlist.length | 0)}
      >Next</button>
      <br />
      <input type="range" name="rate" id="rate" max={100} min={0}  value={rate*100} onChange={(e) => {setRate(e.target.value/100)}}/>
    </>
  )
}

export default App
