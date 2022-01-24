import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connectWalletHandler } from '../store/ethSlice';
import '../styles/Mint.css';
import mint from '../images/main/mint.gif';
import Button from './Button';

const Mint = () => {
  const dispatch = useDispatch();
  const { account, error, balance } = useSelector((state) => state.ethReducer);

  return (
    <div className="mint-container">
      <div className="mint-grid-wrapper">
        <h3 className="mint-title">Sign the Adoption Papers</h3>
        <p className="mint-paragraph">
          Adopt your very own randomly generated Ghost Cat. Every cat is unique, but all equally cute! <br /> <br />
          Signing the adoption papers will be <b>0.06 ETH</b> furever!
        </p>
        {!account && <Button btnFunction={() => dispatch(connectWalletHandler())} text={'Sync'} />}
        {account && <Button text={'Mint'} />}
        {account && (
          <div>
            <div className="balanceDisplay">
              <p style={{ marginTop: '1rem', textAlign: 'center' }}>
                Balance: {balance} {balance !== 'Loading...' && 'ETH'} <br />
                {balance < 0.06 && (
                  <span>
                    Time to top up! 🐾
                    <br />
                  </span>
                )}
              </p>
            </div>
          </div>
        )}
        <span style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>Minting will be available soon!</span>
      </div>
      <div className="mint-grid-wrapper">
        <img src={mint} alt="Ghost Cat" />
      </div>
      {error && <p style={{ margin: '1rem 0 0 0', textAlign: 'center', color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Mint;
