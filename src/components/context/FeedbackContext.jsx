import {createContext, useState} from 'react'

const FeedbackContext = createContext();

// Feedback Context Provider
export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item 1 is from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item 2 is from context',
            rating: 5
        },
        {
            id: 3,
            text: 'This item 3 is from context',
            rating: 1
        },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    });


    // Edit Feedback
    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit: true
      })
    };

     // Delete Feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete feeedback?')){
      setFeedback(feedback.filter((item) => {
        return id !== item.id
      }));
    }
  };

  // Add New Feedback
  const addNewFeedback = (newFeedback) => {
    // "Unique" id for feedbaack
    newFeedback.id = Math.random();

    // Array of feedbacks
    setFeedback([newFeedback, ...feedback]);
  };


    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        addNewFeedback,
        
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;