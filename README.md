# Snake Arcade

A classic Snake game built with [React](https://reactjs.org). Eat apples, grow longer, and beat your high score — all in the browser.

![React](https://img.shields.io/badge/React-17-blue?logo=react)

## Features

- Smooth arcade-style gameplay with increasing speed
- Arrow keys or **W / A / S / D** controls
- High score saved in browser local storage
- Customizable board size, snake length, and colors via props
- Responsive layout that scales with the viewport

## Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Play

| Action | Keys |
|--------|------|
| Move up | `↑` or `W` |
| Move down | `↓` or `S` |
| Move left | `←` or `A` |
| Move right | `→` or `D` |
| Restart after game over | `Space` |

Guide the snake to eat apples. Each apple makes the snake longer and the game slightly faster. Avoid running into yourself!

## Use as a React Component

```javascript
import Snake from 'react-simple-snake'

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <Snake
        percentageWidth={80}
        startSnakeSize={6}
        snakeColor="#4ade80"
        appleColor="#ef4444"
      />
    </div>
  )
}
```

### Props

All props are optional.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `percentageWidth` | number | `40` | Board width as a percentage of the parent element |
| `startSnakeSize` | number | `6` | Initial snake length |
| `snakeColor` | string | `#4ade80` | Snake body color |
| `appleColor` | string | `#ef4444` | Apple color |

## High Score

Your best score is stored in `localStorage` under the key `snakeHighScore`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run the development demo server |
| `npm run build:demo` | Build the demo for production |
| `npm run build:lib` | Build the npm package |
| `npm run lint` | Lint and fix source files |
# snake-game
