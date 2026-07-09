import React from 'react'
import ReactDOM from 'react-dom'
import SnakeGame from '../src/SnakeGame.jsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <header className="app-header">
      <h1 className="app-title">Snake Arcade</h1>
      <p className="app-tagline">Eat apples. Grow longer. Don&apos;t crash.</p>
      <div className="controls-hint">
        <kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd>
        <span>or</span>
        <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>
      </div>
    </header>

    <div className="game-container">
      <SnakeGame percentageWidth={90} />
    </div>

    <footer className="app-footer">
      Built with{' '}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </a>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
)
