import React from 'react';
import logo from '../images/OG.gif';
import '../styles/LoadingCat.css';

const LoadingCat = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-cat">
        <img src={logo} alt="Loading" />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingCat;
