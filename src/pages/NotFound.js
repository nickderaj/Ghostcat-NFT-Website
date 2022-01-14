import React from 'react';

const UnderConstruction = () => {
  const ghostCat = require('../images/OG Cat.gif').default;

  return (
    <div style={{ background: '#f5dcff', width: '100vw', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={ghostCat} alt={'Ghost Cat'} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '5rem' }}>Page Not Found</h2>
      </div>
    </div>
  );
};

export default UnderConstruction;
