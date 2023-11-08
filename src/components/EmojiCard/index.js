// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, setValues} = props

  const setScores = () => {
    setValues(emojiDetails.id)
  }

  return (
    <button className="card-container" type="button" onClick={setScores}>
      <img
        src={emojiDetails.emojiUrl}
        alt={emojiDetails.emojiName}
        className="image"
      />
    </button>
  )
}

export default EmojiCard
