import {FaTimes} from 'react-icons/fa'
import Card from "../shared/Card"

function FeedbackItem({rating, text}) {

  return (
    <Card reverse={true}>
        <div className="num-display">{rating}</div>
        <button className="close">
          <FaTimes color="purple"/>
        </button>
        <div className="text-display">{text}</div>
    </Card>
  )
}

export default FeedbackItem