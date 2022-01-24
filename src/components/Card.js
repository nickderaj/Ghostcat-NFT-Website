import React from 'react';
import '../styles/Card.css';
import Button from './Button';
import ButtonExt from './ButtonExt';

const Card = ({ img, alt, title, body, btnText, btnLink, btnLinkExt }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img className="card-image" src={img} alt={alt} />
      </div>
      <div className="card-text-container">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{body}</p>
      </div>
      <div className="card-button">
        {btnLink && <Button location={btnLink} text={btnText} />}
        {btnLinkExt && <ButtonExt location={btnLinkExt} text={btnText} />}
      </div>
    </div>
  );
};

export default Card;
