import { useState } from "react"

function FeedbackItem() {

  // Rating rate and text
  const [ratingRate, setRatingRate] = useState(6);
  const [ratingText, setRatingText] = useState('');


  return (
    <div className="card">
        <div className="num-display">{ratingRate}</div>
        <div className="text-display">{ratingText}</div>
    </div>
  )
}

export default FeedbackItem