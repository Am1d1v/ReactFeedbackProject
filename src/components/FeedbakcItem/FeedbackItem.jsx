import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from "../shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item, id}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => deleteFeedback(item.id)} >
          <FaTimes color="pink"/>
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color='pink'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem