import React from 'react';
import SingleQuestion from './SingleQuestion';

const Questions = ({questions}) => {
  return (
    <div className="single-day">
      <div className="agenda-items">
        {
          questions.map((question, index) => {
            return (
              <SingleQuestion key={index} {...question}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Questions;