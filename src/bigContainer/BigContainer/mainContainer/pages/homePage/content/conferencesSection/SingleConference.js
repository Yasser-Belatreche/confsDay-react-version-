import React from 'react'

const SingleConference = ({image, title, index, desc, position, textPosition}) => {

  return (
    <div className={`conference ${position}`} >
      <div className="conference-title" style={{backgroundImage: `url(${image})`}}>
        <div className="conference-desc">
          <h1 className={textPosition}>{title}</h1>
          <p> {desc}</p>
          <p className='conference-num'>{index + 1}/5</p>
        </div>
      </div>
    </div>
  )
}

export default SingleConference;