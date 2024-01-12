import { useState } from 'react';
import Header from './components/Header/Header';
import FeedbackItem from './components/FeedbakcItem/FeedbackItem';
import feedbackData from './components/FeedbackData/FeedbackData';
import FeedbackList from './components/FeedbackList/FeedbackList';

function App() {

  // Array of Feedback Data
  const [feedback, setFeedback] = useState(feedbackData);

  // Delete Feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete feeedback?')){
      setFeedback(feedback.filter((item) => {
        return id !== item.id
      }));
    }
  };


  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
