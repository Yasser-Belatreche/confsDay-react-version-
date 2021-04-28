import React, {useState, useEffect} from 'react';
import Header from './BigContainer/header/Header';
import Shapes from './BigContainer/shapes/Shapes';
import MainContainer from './BigContainer/mainContainer/MainContainer';
import Footer from './BigContainer/footer/Footer';

const BigContainer = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const resizeHandle = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
        return;
      }else {
        setIsMobile(false);
      }
    };
    resizeHandle();
    
    window.addEventListener('resize', resizeHandle);
    return () => {
      window.removeEventListener('resize', resizeHandle);
    }
  }, [])

  return (
    <div className="bigContainer">
      {
        isMobile ? (
          <div>
            <Shapes/>
            <MainContainer/>
          </div>) : (
          <div>
            <Header/>
            <Shapes/>
            <MainContainer/>
            <Footer/>
          </div>
        )
      }
    </div>
  )
}

export default BigContainer;