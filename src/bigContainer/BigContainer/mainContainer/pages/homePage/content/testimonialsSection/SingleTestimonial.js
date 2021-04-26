import React from 'react';
import quote from '../../../../../../../images/Vector.png';

const SingleTestimonial = ({img, name, text}) => {
  return (
    <div className="single-testimonial">
      <div className="text-container">
        <img src={quote} alt=""/>
        <p>{text}</p>
        <h2 className="author">{name}</h2>
      </div>
      <div className="image">
        <img id='testimonial-img' src={img} alt=""/>
      </div>
    </div>
  )
}

export default SingleTestimonial;