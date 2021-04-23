import React from 'react'
import NavBar from './navBar/NavBar';
import Pages from './pages/Pages';
import './MainContainer.css';

const MainContainer = () => {
  return (
    <div className="container">
      <NavBar/>
      <Pages/>
    </div>
  )
}

export default MainContainer;