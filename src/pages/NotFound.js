import React from 'react';
import Button from '../components/Button';

import logo from '../images/Kitten.png';
import Colours from '../styles/Colours';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-wrapper" style={{ backgroundColor: Colours.white }}>
      <div className="not-found-cat">
        <img src={logo} alt="Page Not Found" className="animated bounce" />
        <p>Page Not Found</p>
        <Button location="/" text="Back" />
      </div>
    </div>
  );
};

export default NotFound;
