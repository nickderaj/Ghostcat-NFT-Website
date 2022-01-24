import React from 'react';
import '../styles/ImageContainer.css';

const ImageContainer = ({ title, paragraph, img, alt }) => {
  return (
    <div className="ic-container">
      <div className="ic-grid-wrapper">
        <img src={img} alt={alt} />
      </div>
      <div className="ic-grid-wrapper">
        <h3 className="ic-title">{title}</h3>
        <div className="ic-paragraph">{paragraph}</div>
      </div>
    </div>
  );
};

export default ImageContainer;
