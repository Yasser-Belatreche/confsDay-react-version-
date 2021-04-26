import React from 'react';
import Hero from './HeroSection/HeroSection';
import Gallery from './GallerySection/GallerySection';
import Testimonials from '../../homePage/content/testimonialsSection/TestimonialsSection';


const Content = () => {

  return (
    <div className="home-content">
      <Hero />
      <Gallery/>
      <Testimonials/>
    </div>
  )
}

export default Content;