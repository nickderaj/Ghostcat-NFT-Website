import React from 'react';
import Colours from '../styles/Colours';
import '../styles/About.css';

import about from '../images/main/about.png';
import Header from '../components/Header';
import Mint from '../components/Mint';
import TextContainer from '../components/TextContainer';
import ImageContainer from '../components/ImageContainer';
import adoptCat from '../images/main/adoptme.jpg';
import Divider from '../components/Divider';

const About = () => {
  return (
    <>
      <Header />
      <h1 className="about-header">The Friendly Neighbourhood Ghost Cat</h1>
      <div className="about-wrapper">
        <div className="grid-wrapper">
          <img src={about} alt="Ghost Cat" />
        </div>
        <div className="grid-wrapper">
          <h1 className="about--title" style={{ color: Colours.black }}>
            Ghost Cat... who?
          </h1>
          <p className="about--paragraph" style={{ color: Colours.black }}>
            <span>10,000</span> unique Cats living on the Ethereum Blockchain.
            <br />
            <br />
            <span>20%</span> of sales will be donated to shelter animals & given back to the community.
          </p>
        </div>
      </div>
      <Divider />
      <Mint />
      <Divider />
      <TextContainer
        title={'Roadmap & Perks'}
        paragraph={
          <p>
            1) Every 100 adoptions, we will donate 1 ETH to animal shelters & giveaway 1 ETH to the community - Ghost Cat holders
            are prioritised. <br /> <br />
            2) Every 1,000, this is increased to 3ETH donated & given back for a total of 12 ETH per 1,000 adoptions! <br />{' '}
            <br />
            3) Games & Competitions will be held on{' '}
            <a href="https://discord.com/invite/BtvMy8AjU7" target="_blank" rel="noreferrer">
              Discord
            </a>{' '}
            +{' '}
            <a href="https://twitter.com/GhostCatNFT" target="_blank" rel="noreferrer">
              Twitter
            </a>{' '}
            with either $$$ or Ghost Cats as prizes, so stay tuned. <br /> <br />
            4) Ultimately you'll be able to look after your adopted Ghost Cats - feed, groom, explore, etc. with them in a
            multiplayer world. After the art project is released we will begin working on this ASAP!
          </p>
        }
      />
      <Divider />
      <ImageContainer
        title={'Our Mission'}
        paragraph={
          <p>
            We will mostly be donating to local shelters in Malaysia, with our first choice being{' '}
            <a href="https://mypetshaven.org/" target="_blank" rel="noreferrer">
              My Pets Haven
            </a>{' '}
            as they really care for the animals, even take them to the beach! <br /> <br /> With more sales, we'll be able to
            reach out to others in need all around the world.
          </p>
        }
        img={adoptCat}
        alt={'Adopt me'}
      />
    </>
  );
};

export default About;