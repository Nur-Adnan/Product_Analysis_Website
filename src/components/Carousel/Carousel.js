import React from 'react';
import './Carousel.css';

const Carousel = (props)=> {
  return (
    <div className='Carousel__Item'>
      <img src={props.review.profile} alt="images" />
      <div className="titles">
        <h2>{props.review.profile_name}</h2>       
        <h4>{props.review.product}</h4>
        <h6>{props.review.review_text}</h6>      
      </div>
    </div>
  )
}

export default Carousel;