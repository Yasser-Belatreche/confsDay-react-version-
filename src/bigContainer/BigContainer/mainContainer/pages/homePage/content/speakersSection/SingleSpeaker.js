import React from 'react';

const SingleSpeaker = ({name, image, desc}) => {
  return (
    <div className="single-speaker">
      <div className="img">
        <img src={image} alt=""/>
      </div>
      <h1 className="speaker-name">{name}</h1>
      <p className="speaker-desc">{desc}</p>
    </div>
  )
}

export default SingleSpeaker ;