import React from 'react';
import '../styles/TextContainer.css';

const TextContainer = ({ title, paragraph }) => {
  return (
    <div className="tc-container">
      <h3 className="tc-title">{title}</h3>
      <div className="tc-paragraph">{paragraph}</div>
    </div>
  );
};

export default TextContainer;
