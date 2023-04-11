import React, { useEffect ,useState} from 'react';
import './modal.scss';

const Modal = ({currentItem, onClose }) => {

    const {title, link, image} = currentItem;
   
console.debug('modal', currentItem)

  return (
    <div className="modal-overlay">
    <div className="modal">
      <h2 className='modal-text'>{title.label}</h2>
     
      <div className="modal-body">
        <a
          className=""
          href={link.attributes.href}
          target="_blank"
          rel="noopener noreferrer"
        >
         {title.label}
        </a>
      </div>
    <img src={image[0].label} alt={title.label} />  
    <button onClick={onClose}>Close</button>
    </div>
  
  </div>
  );
};

export default Modal;