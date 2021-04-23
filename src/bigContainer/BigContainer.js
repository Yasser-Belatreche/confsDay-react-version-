import React from 'react';
import Header from './BigContainer/header/Header';
import Shapes from './BigContainer/shapes/Shapes';
import MainContainer from './BigContainer/mainContainer/MainContainer';
import Footer from './BigContainer/footer/Footer';

const BigContainer = () => {
  return (
    <div className="bigContainer">
      <Header/>
      <Shapes/>
      <MainContainer/>
      <Footer/>
    </div>
  )
}

export default BigContainer;