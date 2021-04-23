import React from 'react'
import eventLogo from '../../../images/ConfsDayLogo.png';
import shape_1 from '../../../images/Octagon.svg';
import shape_2 from '../../../images/Ellipse 39.svg';
import shape_3 from '../../../images/Ellipse 38.svg';
import './shapes.css'

const Shapes = () => {
  return (
    <div className="shapes">
      <div className="logoContainer">
        <img src={eventLogo} className='eventLogo' alt="ConfsDayLogo"/> 
      </div>
      <img src={shape_1} className='octagon' alt="shape" />
      <img src={shape_2} alt="shape" className='bigCircle' height='200px' width="200px"/>
      <img src={shape_3} alt="shape" className='smallCircle' height='100px' width="100px"/>
    </div>
  )
}

export default Shapes;