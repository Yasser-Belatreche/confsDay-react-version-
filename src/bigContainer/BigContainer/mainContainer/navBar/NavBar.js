import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './navBar.css';
import BlueDot from '../../../../images/bluedot.png';
import YellowDot from '../../../../images/yellowdot.png';
import RedDot from '../../../../images/reddot.png';

const NavBar = () => {
  return (
    <nav className="navBar">
      <p className="title">confsday</p>

      <ul className="navLinks">
        <li className='link current'>
          <Link to='/'>Home</Link>
        </li>
        <li className='link'>
          <Link to='/FAQ'>FAQ</Link>
        </li>
        <li className='link'>
          <Link to='/LastEdition'>Last Edition</Link>
        </li>
        <li className='link'>
          <Link to='/Registration'>Registration</Link>
        </li>
      </ul>

      <div className="dots">
        <div className="dot">
          <img src={BlueDot} alt=""/>
        </div>
        <div className="dot">
          <img src={YellowDot} alt=""/>
        </div>
        <div className="dot">
          <img src={RedDot} alt=""/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;