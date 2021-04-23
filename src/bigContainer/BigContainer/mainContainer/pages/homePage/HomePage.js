import React from 'react'
import HomeNavBar from './navBar/HomeNavBar';
import Content from './content/Content'

const HomePage = () => {
  return (
    <div className="home-container">
      <HomeNavBar />
      <Content />
    </div>
  )
}

export default HomePage;
