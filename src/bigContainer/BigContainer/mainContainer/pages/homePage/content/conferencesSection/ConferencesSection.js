import React, {useState, useEffect} from 'react';
import SingleConference from './SingleConference';
import {data} from './data';
import './conferences.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ConferencesSection = () => {
  return (
    <div className="conferences" id="conferences">
      <div className="title">
        <h1 className="title">CONFERENCES</h1>
      </div>

      <div className="conferences-container">
        <Carousel  emulateTouch={true} infiniteLoop={true} autoPlay={true} showThumbs={false}>
          {
            data.map((conference, key) => {   
              let textPosition = `${conference.title.includes('Conf') ? "text-center" : ""}`;
              return (
                <SingleConference key={key} {...conference} textPosition={textPosition}/>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}

export default ConferencesSection;