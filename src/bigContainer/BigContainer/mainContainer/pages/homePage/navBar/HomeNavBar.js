import React from 'react';
import './homeNavBar.css';

const HomeNavBar = () => {
  return (
    <div className="navBar">
      <ul className="home-nav-links">
        <li className='home-link'>
          <a href="#hero">What's</a>
        </li>
        <li className='home-link'>
          <a href="#about">About</a>
        </li>
        <li className='home-link'>
          <a href="#conferences">Conferences</a>
        </li>
        <li className='home-link'>
          <a href="#agenda">Agenda</a>
        </li>
        <li className='home-link'>
          <a href="#speakers">Speakers</a>
        </li>
        <li className='home-link'>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className='home-link'>
          <a href="#sponsors">Sponsors</a>
        </li>
      </ul>
    </div>
  )
}

export default HomeNavBar;