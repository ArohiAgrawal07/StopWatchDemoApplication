import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Stopwatch from './components/Stopwatch';
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
      </header>
      
      <main>
        <Stopwatch />
      </main>
    </div>
  )
}

export default App