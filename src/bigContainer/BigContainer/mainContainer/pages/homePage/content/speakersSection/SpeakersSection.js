import React from 'react';
import './SpeakersSection.css';
import {data} from './data';
import SingleSpeaker from './SingleSpeaker';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SpeakersSection = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll:1  
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="speakers" id="speakers">
      <div className="title">
        <h1 className="title">Speakers</h1>
      </div>
      <div className="speakers-container">
        <Slider  {...settings}>
          {
            data.map((person, index) => {
              return (
                <SingleSpeaker key={index} {...person} /> 
              )
            })
          }
       </Slider>
      </div>
    </div>
  )
}

export default SpeakersSection;