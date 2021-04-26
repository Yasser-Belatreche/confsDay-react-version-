import React from 'react'
import LastEditionNav from './navBar/LastEditionNav';
import Content from './content/Content'

const HomePage = () => {
  return (
    <div className="home-container">
      <LastEditionNav />
      <Content />
    </div>
  )
}

export default HomePage;