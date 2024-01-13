import React from 'react';
import Card from '../shared/Card';
import { useState } from 'react';
import Button from '../Button/Button';


function FeedbackForm() {

    // Review Text
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);

    const handleTextChange = (event) => {
        setText(event.target.value);

        // If Feedback text length less than 10 symbols we cannot send feedback message
        if(text.length < 10){
            setBtnDisabled(true);
        } else {
            setBtnDisabled(false)
        }
    }

  return (
    <Card>
        <form>
            <h2>How would you rate this app ?</h2>
            <div className="input-group">
                <input type="text" placeholder='Write a review' onChange={handleTextChange} value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm