import React from 'react';
import './Testimonials.css';
import SingleTestimonial from './SingleTestimonial';
import {data} from './data';
import topCircle from '../../../../../../../images/top.png';
import leftCircle from '../../../../../../../images/left-circle.png';
import bottomCircle from '../../../../../../../images/bottom-circle.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const TestimonialsSection = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="title">
        <h1 className="title">TESTIMONIALS</h1>
      </div>


      <div className="testimonials-container">
        <div className="shapes">
            <img src={topCircle} className="topCircle" alt=""/>
            <img src={leftCircle} className="leftCircle" alt=""/>
            <img src={bottomCircle} className="bottomCircle" alt=""/>
        </div>
        <Carousel  emulateTouch={true} stopOnHover={true} infiniteLoop={true} autoPlay={true} showThumbs={false}>
          {
            data.map((person, index) => {
              return <SingleTestimonial {...person} key={index}/>
            })
          }
        </Carousel>
        
      </div>
    </div>
  )
}

export default TestimonialsSection;