import React from 'react';
import '../styles/Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ location, text, image, alt, btnFunction, disabled }) => {
  const navigate = useNavigate();
  const btnHandler = () => {
    if (location) navigate(location, { replace: true });
    if (btnFunction) btnFunction();
  };

  return (
    <button className={`button ${disabled ? 'button-disabled' : ''}`} onClick={btnHandler} disabled={disabled}>
      {text}
      {image && <img className="button--img" src={image} alt={alt} />}
    </button>
  );
};

export default Button;
