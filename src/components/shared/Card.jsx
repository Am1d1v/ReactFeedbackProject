import FeedbackItem from "../FeedbakcItem/FeedbackItem"

function Card({children, reverse}) {
  return (
    // Condition Style
    <div className={reverse ? 'card reverse' : 'card'}>{children}</div>
  )
}

export default Card