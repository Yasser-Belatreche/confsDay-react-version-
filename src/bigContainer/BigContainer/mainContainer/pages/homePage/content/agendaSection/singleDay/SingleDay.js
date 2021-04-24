import React from 'react';
import SingleTopic from './SingleTopic';

const SingleDay = ({date, topics}) => {
  return (
    <div className="single-day">
      <div className="date">
        <p>{date}</p>
      </div>

      <div className="agenda-items">
        {
          topics.map((topic, index) => {
            return (
              <SingleTopic key={index} {...topic}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default SingleDay;