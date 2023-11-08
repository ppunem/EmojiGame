// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, topScore, emojisList, resetGame} = props

  const resultImageUrl =
    topScore === emojisList.length
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resutlText = topScore === emojisList.length ? 'You Won' : 'You Lose'
  const scoreText = topScore === emojisList.length ? 'Best Score' : 'Score'

  const restartGame = () => {
    resetGame()
  }

  return (
    <div className="result-card">
      <div className="result-text-container">
        <h1 className="result-text">{resutlText}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="result-score">
          {score}/{emojisList.length}
        </p>
        <button type="button" onClick={restartGame} className="reset-button">
          Play Again
        </button>
      </div>
      <img src={resultImageUrl} className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
