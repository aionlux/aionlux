// import { useState } from 'react'
import './App.css'

function App() {
  const aionluxLogo = "https://raw.githubusercontent.com/aionlux/.github/main/resources/img/logo5.png"
  return (
    <div className="App">
      <div>
        <a href="https://aionlux.com" target="_blank">
          <img src={aionluxLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Welcome to Aionlux</h1>
    </div>
  )
}

export default App
