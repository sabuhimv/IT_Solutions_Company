import React from 'react'
import './FeedbackItem.css'
const FeedbackItem = ({feedback_img,feedback_name,feedback_job}) => {
  return (
    <div className='feedback-item-container'>
        <div className="feedback-item-top">
            <p>Sed ut persiciatis undente natus error sit voluptatem sant doloremque laudantiume aperi eaque quae abillo inventorecy tatis et quasi architecto beavit dicta sunt explica enime</p>
        </div>
        <div className="feedback-item-bottom">
            <div className='feedback-item-img'>
                <img src={feedback_img} alt="" />
            </div>
            <div className='feedback-item-text'>
                <h3>{feedback_name}</h3>
                <p>{feedback_job}</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackItem