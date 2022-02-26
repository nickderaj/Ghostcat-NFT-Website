import React from 'react';
import '../styles/Mint.css';
import mint from '../images/main/mint.gif';
import ButtonExt from './ButtonExt';

const Mint = () => {
  return (
    <div className="mint-container">
      <div className="mint-grid-wrapper">
        <h3 className="mint-title">Sign the Adoption Papers</h3>
        <p className="mint-paragraph">
          Adopt your very own randomly generated Ghost Cat. Every cat is unique, but all equally cute! <br /> <br />
          Signing the adoption papers will be <b>0.06 ETH</b> furever!
        </p>
        <ButtonExt text={'Mint'} disabled={true} />
        <span style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>Minting will be available March 5th!</span>
      </div>
      <div className="mint-grid-wrapper">
        <img src={mint} alt="Ghost Cat" />
      </div>
    </div>
  );
};

export default Mint;
