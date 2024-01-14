import {createContext, useState} from 'react'

const FeedbackContext = createContext();

// Feedback Context Provider
export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ]);

     // Delete Feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete feeedback?')){
      setFeedback(feedback.filter((item) => {
        return id !== item.id
      }));
    }
  };

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;