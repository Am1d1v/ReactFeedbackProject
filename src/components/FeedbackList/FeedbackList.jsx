import { useContext } from "react";
import FeedbackItem from "../FeedbakcItem/FeedbackItem";
import { AnimatePresence, motion } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
 

function FeedbackList({handleDelete}) {

  const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <h3>No Feedback Yet</h3>
    }

  // Default Return
  // return (
  //   <div className="feedback-list">
  //       {feedback.map((item, index) => {
  //         return  <FeedbackItem item={item} key={index} handleDelete={handleDelete}/>
  //       })}
  //   </div>
  // )

  // Animated Return
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => 
          <motion.div 
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
            <FeedbackItem item={item} key={index} handleDelete={handleDelete}/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

}

export default FeedbackList;