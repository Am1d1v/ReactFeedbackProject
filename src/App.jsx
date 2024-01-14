import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import feedbackData from './components/FeedbackData/FeedbackData';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackForm from './components/FeedbackFrom/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/shared/AboutIconLink';
import {FeedbackProvider} from './components/context/FeedbackContext'


function App() {

  // Array of Feedback Data
  const [feedback, setFeedback] = useState(feedbackData);

  // Add New Feedback
  const addNewFeedback = (newFeedback) => {
    // "Unique" id for feedbaack
    newFeedback.id = Math.random();

    // Array of feedbacks
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete feeedback?')){
      setFeedback(feedback.filter((item) => {
        return id !== item.id
      }));
    }
  };


  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<>
              <FeedbackForm handleAdd={addNewFeedback} />
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </>}>
            </Route>
            
            
            <Route path='/about' element={<AboutPage />}/>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
