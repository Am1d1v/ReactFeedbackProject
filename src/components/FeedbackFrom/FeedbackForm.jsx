import React from 'react';
import Card from '../shared/Card';
import { useState } from 'react';
import Button from '../Button/Button';
import RatingSelect from '../RatingSelect/RatingSelect';


function FeedbackForm() {

    // Review Text
    const [text, setText] = useState('');

    // isDisabled btn toggle
    const [btnDisabled, setBtnDisabled] = useState(true);

    // Feedback warning message
    const [message, setMessage] = useState('');

    // Set Rating
    const [rating, setRating] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);

        // If Feedback text length less than 10 characters we cannot send feedback message
        if(text.trim().length < 10){
            setBtnDisabled(true);
            setMessage('Text must be longer than 10 characters')
        } else {
            setBtnDisabled(false);
            setMessage('');
        }
    }

    // Submit New Feedback
    const handleSubmit = (event) => {
        event.preventDefault();

        const newFeedback = {
            text: text,
            rating: rating
        }
        console.log(newFeedback);
        
    };  

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate this app ?</h2>
            <RatingSelect selectRating={(rating) => setRating(rating)}></RatingSelect>
            <div className="input-group">
                <input type="text" placeholder='Write a review' onChange={handleTextChange} value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm