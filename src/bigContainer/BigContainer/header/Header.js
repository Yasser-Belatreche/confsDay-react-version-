import React from 'react';
import cselogo from '../../../images/cseLogo.svg';
import facebookIcon from '../../../images/facebook-icon.png';
import twitterIcon from '../../../images/twitter-icon.png';
import instaIcon from '../../../images/instagram.png';
import youtubeIcon from '../../../images/youtube.png';
import webIcon from '../../../images/web-icon.png';
import './Header.css';

const months = [
    "Jany",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const weekdays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];


const Header = () => {

  // get the new date
  const date = new Date();
  
  const dayName = weekdays[date.getDay()];
  const dayNumber = date.getDate();
  const month = months[date.getMonth()]; 
  const year = date.getFullYear();


  return (
    <header className='header'>
      <p>{dayName}, {dayNumber} {month} {year}</p>

      <div className="cseLogo">
        <img src={cselogo} alt="cse logo"/>
      </div>

      <div className="social-icons">
        <a href="" className='icon' style={{marginLeft: '0'}}>
          <img src={webIcon} alt="web icon"/>
        </a>
        <a href="" className='icon'>
          <img src={facebookIcon} alt="facebook icon"/>
        </a>
        <a href="" className='icon'>
          <img src={instaIcon} alt="instagram icon"/>
        </a>
        <a href="" className='icon'>
          <img src={youtubeIcon} alt="youtube icon"/>
        </a>
        <a href="" className='icon'>
          <img src={twitterIcon} alt="twitter icon"/>
        </a>
      </div>
    </header>
  )
}

export default Header;