import React from 'react';
import CalendarImg from '../../../../../../../images/calendar.png';
import LocationImg from '../../../../../../../images/location.png';
import arrowImg from '../../../../../../../images/arrow.png';

const HeroSection = () => {
  return (
    <div className="hero" id="Hero">
      <div className="title">
        <h1 className="title">2019 CONFS DAY</h1>
      </div>

      <div className="desc">
        <p>CSE Confs Day is a day of themed conferences where people from the business world as well as professionals from the 'Tech' professions come share with students their experiences and knowledge around a theme predefined.</p>
      </div>

      <div className="more-info">
        <div className="date">
          <img src={CalendarImg} alt="calendar"/>
          <p>Sat, 02 Mar 2019</p>
        </div>

        <div className="place">
          <img src={LocationImg} alt="location"/>
          <p>ESI, Oued Smar</p>
        </div>

      </div>
      <div className="arrow">
        <a href="#gallery">
          <img src={arrowImg} alt="arrow" width='17px'/>  
        </a>
      </div>
    </div>
  )
}

export default HeroSection;