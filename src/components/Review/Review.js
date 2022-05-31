import React from 'react';
import './Review.css';

function Review(props) {
  return (
      <div className='reviewsection'>
            <img src={props.review.profile} alt="images" />
            <div className="titles">
                  <h4>{props.review.profile_name}</h4>       
                  <h5>{props.review.product}</h5>
                  <h6>{props.review.review_text}</h6>
                  <h6>Ratings:{props.review.review_rating}</h6>          
            </div>
          </div>
  )
}

export default Review;