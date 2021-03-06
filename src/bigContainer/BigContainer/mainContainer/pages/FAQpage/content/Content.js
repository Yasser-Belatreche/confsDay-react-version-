import React from 'react';
import './content.css';
import Questions from './Questions';
import {data} from './Questions/data';


const Content = () => {
  return (
    <div className="home-content">
      <div className="faq" id="FAQ">
        <div className="title">
          <h1 className="title">FAQ</h1>
        </div>

        <div className="faq-container agenda-container">
          {
            data.map((questions, index) => {
              return (
                <Questions key={index} {...questions}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Content;