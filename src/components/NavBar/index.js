// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, showResult} = props

  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      {showResult ? null : (
        <div className="scores-container">
          <p className="nav-score-text">Score: {score}</p>
          <p className="nav-score-text">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
