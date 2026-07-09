import React from 'react'

function GameOver(props) {
  return (
    <div className="snake-game">
      <div
        id="GameBoard"
        style={{
          width: props.width,
          height: props.height,
        }}>
        <div id="GameOver" style={{ fontSize: props.width / 18 }}>
          <div id="GameOverText">GAME OVER</div>
          <div className="game-over-score">Score: {props.score}</div>
          <div className="game-over-high-score">
            {props.newHighScore ? 'New high score! ' : 'Best: '}
            {props.highScore}
          </div>
          <div id="PressSpaceText">Press Space to play again</div>
        </div>
      </div>
    </div>
  )
}

export default GameOver
