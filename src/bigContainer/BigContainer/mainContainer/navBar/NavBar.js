import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './navBar.css';
import BlueDot from '../../../../images/bluedot.png';
import YellowDot from '../../../../images/yellowdot.png';
import RedDot from '../../../../images/reddot.png';

const NavBar = () => {
  const [current, setCurrent] = useState('home');
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <nav className="main navBar">
      <p className="title">confsday</p>

      <ul className="navLinks">
        <li className={`link ${current === 'home' ? 'current': '' }`} >
          <Link to='/' onClick={() => setCurrent('home')}>Home</Link>
        </li>
        <li className={`link ${current === 'FAQ' ? 'current': '' }`}  >
          <Link to='/FAQ' onClick={() => setCurrent('FAQ')}>FAQ</Link>
        </li>
        <li className={`link ${current === 'lastEdition' ? 'current': '' }`} >
          <Link to='/LastEdition' onClick={() => setCurrent('lastEdition')}>Last Edition</Link>
        </li>
      </ul>

      {/* responsive nav bar  */}
      <div className={`bars ${isNavBarOpen ? 'active' : '' }`} onClick={() => setIsNavBarOpen(!isNavBarOpen)}>
        <div className="bar top-bar"></div>
        <div className="bar middle-bar" ></div>
        <div className="bar bottom-bar"></div>
      </div>

      <div className={`nav-toggle ${isNavBarOpen ? 'active' : '' }`}>
        <ul className="navLinks">
          <li className="link" onClick={() => setIsNavBarOpen(false)}>
            <Link to='/'>Home</Link>
          </li>
          <li className="link"  onClick={() => setIsNavBarOpen(false)}>
            <Link to='/FAQ'>FAQ</Link>
          </li>
          <li className="link" onClick={() => setIsNavBarOpen(false)}>
            <Link to='/LastEdition'>Last Edition</Link>
          </li>
        </ul>
      </div>
      {/* end responsive nav bar */}

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