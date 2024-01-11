import FeedbackItem from "../FeedbakcItem/FeedbackItem";

function FeedbackList({feedback}) {

    console.log(feedback);

    if(!feedback || feedback.length === 0){
        return <h3>No Feedback Yet</h3>
    }

  return (
    <div className="feedback-list">
        {feedback.map((item, index) => {
          return  <FeedbackItem rating={item.rating} text={item.text} key={index} />
        })}
    </div>
  )
}

export default FeedbackList;