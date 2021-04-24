import React, {useState} from 'react';
import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';
import {MdLocationOn} from 'react-icons/md';

const SingleTopic = ({img, title, time, details, imgClass, last}) => {
  const [isItemOpen, setIsItemOpen] = useState(false);

  return (
    <div className={`single-topic ${last}`} >

      {/* topic head */}
      <div className="topic-header">
        <div className="topic-title">
          <div className="img">
            <img src={img} alt="image" className={imgClass}/>
          </div>
          <p>{title}</p>
        </div>

        <div className="topic-info">
          <div className="topic-time">
            <p>{time}</p>
          </div>

          <div className="icons">
            <div className="icon">
              <MdLocationOn/>
            </div>
            <div className="icon" onClick={() => setIsItemOpen(!isItemOpen)}>
              {
                isItemOpen ? <IoIosArrowUp/> :<IoIosArrowDown/> 
              }
            </div>
          </div>
        </div>
      </div>

      {/* topic details */}
      <div className={`topic-details ${isItemOpen ? "":"hidden"}`}>
        <ul>
          {
            details.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default SingleTopic;