import React from 'react';
import './sponsors.css';
import vazii from '../../../../../../../images/vazii.png';
import icosnet from '../../../../../../../images/icosnet.png';

const SponsorsSection = () => {
  return (
    <div className="sponsors" id="sponsors">
      <div className="title">
        <h1 className="title">SPONSORS</h1>
      </div>

      <div className="sponsors-container">
        <div className="sponsor-logo">
          <img src={icosnet} alt=""/>
        </div>
        <div className="sponsor-logo">
          <img src={vazii} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default SponsorsSection;
