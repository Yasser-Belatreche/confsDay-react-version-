import React from 'react'
import FaqNavBar from './navBar/FaqNav';
import Content from './content/Content';

const HomePage = () => {
  return (
    <div className="home-container">
      <FaqNavBar />
      <Content />
    </div>
  )
}

export default HomePage;