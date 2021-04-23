import React from 'react';
import './HeroSection.css';
import CalendarImg from '../../../../../../../images/calendar.png';
import LocationImg from '../../../../../../../images/location.png';
import arrowImg from '../../../../../../../images/arrow.png';

const HeroSection = () => {
  return (
    <div className="hero" id="hero">
      <div className="title">
        <h1 className="title">CSE CONFS DAY</h1>
      </div>

      <div className="desc">
        <p>The CSE Confs Day is an event dedicated to conferences and panels led by speakers from the professional world about the Data at the service of the company: towards a new revolution.</p>
      </div>

      <div className="more-info">
        <div className="date">
          <img src={CalendarImg} alt="calendar"/>
          <p>Sun, 11 apr 2021</p>
        </div>

        <div className="place">
          <img src={LocationImg} alt="location"/>
          <p>ESI, Oued Smar</p>
        </div>

      </div>
      <div className="arrow">
        <a href="#about">
          <img src={arrowImg} alt="arrow" width='17px'/>  
        </a>
      </div>
    </div>
  )
}

export default HeroSection;