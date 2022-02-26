import React from 'react';
import '../styles/Button.css';

const ButtonExt = ({ location, text, image, alt, disabled }) => {
  return (
    <a
      className={`button ${disabled ? 'button-disabled' : ''}`}
      href={location}
      target="_blank"
      rel="noreferrer"
      disabled={disabled}
    >
      {text}
      {image && <img className="button--img" src={image} alt={alt} />}
    </a>
  );
};

export default ButtonExt;
