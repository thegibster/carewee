import React from 'react';
import './card.scss';

const Card = ({ title, link, image, setShowModal, setCurrenItem }) => {

    const executeSetters = () => {
        setShowModal(true);
        setCurrenItem({title, link, image})
    }
  return (
    <div className="card">
      <div className="card-body">
        <span className='card-title'>
        <a
          className=""
          href={link.attributes.href}
          target="_blank"
          rel="noopener noreferrer"
        >
         {title.label}
        </a>
        </span>
     
      </div>
      <div>  <button onClick={() => executeSetters()}>Show More</button></div>
    </div>
  );
};

export default Card;