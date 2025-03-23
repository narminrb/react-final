import React from 'react';
import './style.css';

const Instagram = ({ image }) => {
  return (
    <div className="imgcontainer">
      <img src={image} alt="Instagram" />
      <div className="overlay">
        <i className="ri-instagram-line"></i>
      </div>
    </div>
  );
};

export default Instagram;
