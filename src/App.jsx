import { useState } from 'react'
import './App.css' 
import DigitalClock from './components/DigitalClock'
import CuentaAtras from './components/CuentaAtras'
import Cronometro from './components/Cronometro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DigitalClock />
      <CuentaAtras />
      <Cronometro />
    </div>
  )
}

export default App
