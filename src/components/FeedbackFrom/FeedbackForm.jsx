import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'


function FeedbackForm() {

    // Review Text
    const [text, setText] = useState('');

  return (
    <Card>
        <form>
            <h2>How would you rate this app ?</h2>
            <div className="input-group">
                <input type="text" placeholder='Write a review'/>
                <button type="submit">Send</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm