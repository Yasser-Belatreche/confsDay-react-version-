import React, {useState, useEffect} from 'react';
import SingleConference from './SingleConference';
import {data} from './data';
import leftBtn from '../../../../../../../images/Group1310-1.png';
import rightBtn from '../../../../../../../images/Group1310.png';
import './conferences.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ConferencesSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(data.length - 1);
    }else if (index >= data.length) {
      setIndex(0);
    }
  }, [index]);


  return (
    <div className="conferences" id="conferences">
      <div className="title">
        <h1 className="title">CONFERENCES</h1>
      </div>

      <div className="conferences-container">
        <Carousel  emulateTouch={true} infiniteLoop={true} showThumbs={false}>
          {
            data.map((conference, key) => {
              let position = "next";
              let textPosition = `${conference.title.includes('Conf') ? "text-center" : ""}`;

              if (conference.index === index) {
                position = 'current';
              } else if (conference.index === index - 1 || (index === 0 && conference.index === data.length - 1)) {
                position = 'prev';
              }
              
              return (
                <SingleConference key={key} {...conference} position={position} textPosition={textPosition}/>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}

export default ConferencesSection;