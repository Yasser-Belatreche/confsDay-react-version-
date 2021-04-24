import React, {useState, useRef} from 'react';
import './Agenda.css';
import {data} from './data';
import SingleDay from './singleDay/SingleDay';

const AgendaSection = () => {
  return (
    <div className="agenda" id="agenda">
      <div className="title">
        <h1 className="title">AGENDA</h1>
      </div>

      <div className="agenda-container">
        {
          data.map((singleDay, index) => {
            return (
              <SingleDay key={index} {...singleDay}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default AgendaSection;