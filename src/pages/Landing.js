import React from 'react';
import gen1 from '../images/gen1.gif';
import gen2 from '../images/gen2.gif';
import '../styles/Landing.css';

import Header from '../components/Header';
import Card from '../components/Card';
import Community from '../components/Community';
import Team from '../components/Team';
import Divider from '../components/Divider';

const Landing = () => {
  return (
    <div>
      <Header />
      <h1 className="landing-header">The Friendly Neighbourhood Ghost Cat</h1>
      <div className="landing-container">
        <div className="landing-card">
          <Card
            img={gen1}
            alt="Gen 1"
            title="Gen 1"
            body="100 unique hand-drawn NFTs living on the Tezos Blockchain. 
            They won't be forgotten and rewards will begiven to long-term holders!"
            btnText="Buy"
            btnLinkExt="https://objkt.com/profile/ghostcat/created"
          />
        </div>
        <div className="landing-card">
          <Card
            img={gen2}
            alt="Gen 2"
            title="Gen 2"
            body="1,188 randomly-generated unique NFTs living on the Ethereum Blockchain 
            with a mission to help lost animals find a home."
            btnText="More"
            btnLink="/about"
          />
        </div>
      </div>
      <Community />
      <Divider />
      <Team />
    </div>
  );
};

export default Landing;
