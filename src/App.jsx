import { useState } from 'react';
import Header from './components/Header/Header';
import FeedbackItem from './components/FeedbakcItem/FeedbackItem';
import feedbackData from './components/FeedbackData/FeedbackData';
import FeedbackList from './components/FeedbackList/FeedbackList';

function App() {

  // Array of Feedback Data
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  );
}

export default App;
