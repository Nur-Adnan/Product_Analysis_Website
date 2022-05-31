import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import useReview from '../hooks/useReview';
import Algo from '../image/algo.jpg';
import './Home.css';

const Home = () => {
  const [review] = useReview();
  const items = review.slice(0, 3);
  return (
    <div className='full'>
      <div className='home'>
      <div className="leftSide_home">
        <h2>Books <span> World</span></h2>
        <p>
          Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.
        </p>
        <Link to='./review' className='home_button'>More Details</Link>
      </div>

      <div className="rightside_home">
        <img className = "mainPic" src={Algo} alt="laptop" />
      </div>
    </div>
    
      <div className='homesection_review'>
        <h1>Reviews of Customers</h1>
          <div className='Carousel_Items'>
        {
          items.map(review =>
            <Carousel
              key={review.id}
              review={review}
          ></Carousel>)
          }
          </div>
        <Link to='./review' className='home_button downBTN'>See All Reviews</Link>
      </div>
    </div>
  )
}

export default Home;