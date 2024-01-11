import Card from "../shared/Card"

function FeedbackItem({rating, text}) {

  return (
    <Card reverse={false}>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
    </Card>
  )
}

export default FeedbackItem