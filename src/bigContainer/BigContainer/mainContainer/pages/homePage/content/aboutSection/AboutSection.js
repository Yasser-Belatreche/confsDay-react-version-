import React from 'react'
import './AboutSection.css' 
import image from '../../../../../../../images/teaser.png'

const AboutSection = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1 className="title">ABOUT US</h1>
      </div>

      <div className="photo">
        <img src={image} alt="teaser"/> 
      </div>

      <div className="club-info">
        <p>The CSE (Scientific Club of ESI) is ESI's oldest students club. Founded in 2008 by a group of ambitious students to escape the study routine and create a place where creativity and energy have no limits. Through our training, hackathons and technological events, we aim to provide Algerian students with great technological knowledge as well as to prepare them for the professional world.</p>
      </div>
    </div>
  )
}

export default AboutSection;