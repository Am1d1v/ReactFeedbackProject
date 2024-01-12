import FeedbackItem from "../FeedbakcItem/FeedbackItem";

function FeedbackList({feedback, handleDelete}) {


    if(!feedback || feedback.length === 0){
        return <h3>No Feedback Yet</h3>
    }

  return (
    <div className="feedback-list">
        {feedback.map((item, index) => {
          return  <FeedbackItem item={item} key={index} handleDelete={handleDelete}/>
        })}
    </div>
  )
}

export default FeedbackList;