import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    currentScore: 0,
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    showResult: false,
  }

  resetGame = () => {
    this.setState({score: 0, currentScore: 0, showResult: false})
  }

  setValues = id => {
    const {currentScore, topScore, clickedEmojisList} = this.state
    const {emojisList} = this.props
    const filteredEmoji = emojisList.filter(each => each.id === id)
    const emojiItem = clickedEmojisList.find(each => each.id === id)

    if (emojiItem === undefined) {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, filteredEmoji],
        currentScore: prevState.currentScore + 1,
        score: prevState.score + 1,
      }))
    } else {
      if (currentScore > topScore) {
        this.setState({topScore: currentScore, showResult: true})
      } else {
        this.setState(prevState => ({
          topScore: prevState.topScore,
          showResult: true,
        }))
      }
    }
    console.log(clickedEmojisList)
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiCard = () => {
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <ul className="emojis-container">
        {shuffledEmojis.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            setValues={this.setValues}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, showResult} = this.state
    const {emojisList} = this.props

    return (
      <>
        <NavBar score={score} topScore={topScore} showResult={showResult} />
        <div className="bg">
          {showResult ? (
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              emojisList={emojisList}
              resetGame={this.resetGame}
            />
          ) : (
            this.renderEmojiCard()
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
