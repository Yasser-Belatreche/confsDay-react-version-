import React from 'react'
import {data} from './data'
import './gallery.css'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const GallerySection = () => {
  
  return (
    <div className="gallery" id="gallery">
      <div className="title">
        <h1 className="title">GALLERY</h1>
      </div>

      <div className="gallery-container">
        <Carousel
          children = {data}
          isAutoPlaying = {false}
          hasMediaButton = {false}
          hasSizeButton = {false}
          hasIndexBoard = {false}
        />
      </div>
    </div>
  )
}

export default GallerySection;